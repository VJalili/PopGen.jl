export allele_avg, richness, summary, summary_stats

"""
    allele_avg(data::PopData; rounding::Bool = true)
Returns a NamedTuple of the average number of alleles ('mean') and
standard deviation (`stdev`) of a `PopData`. Use `rounding = false` to
not round results. Default (`true`) rounds to 4 digits.
"""
function allele_avg(data::PopData; rounding::Bool = true, population = false)
    tmp = richness(data)
    if rounding
        (mean = round(mean(tmp.richness), digits = 4), stdev = round(variation(tmp.richness), digits = 4))
    else
        (mean = mean(tmp.richness), stdev = variation(tmp.richness))
    end
end


"""
    richness(data::PopData; population::Bool = false)
Calculates various allelic richness and returns a table of per-locus
allelic richness. Use `population = true` to calculate richness by
locus by population.
"""
function richness(data::PopData; population::Bool = false)
    if !population
        DataFrames.combine(
            groupby(data.loci, :locus),
            :genotype => (geno -> length(unique_alleles(geno))) => :richness
        )
    else
        DataFrames.combine(
            groupby(data.loci, [:locus, :population]),
            :genotype => (geno -> length(unique_alleles(geno))) => :richness
        )
    end
end


#TODO add citations to docstring
"""
    summary(data::PopData; by::String = "global")
Provides summary statistics for a `PopData` object. Use `by = "locus"` for
summary information by locus. Global values are given as unweighted means of
the per-locus parameters.

### Het_obs
observed heterozygosity given as:\n
1 - ∑ₖ ∑ᵢ Pₖᵢᵢ/np \n
where Pkii represents the proportion of homozygote `i` in sample `k` and `np`
is the number of samples in that population

### HT
overall gene diversity given as: \n
1 - ∑ᵢ(p̄ᵢ² + (HS / (ñ × np)) - Het_obs / (2 × ñ × np)) \n
where p̄ᵢ = ∑ₖpₖᵢ / np

### HS
within population gene diversity given as: \n
1 - ∑ᵢ(pᵢ² + HS / (ñ × np) - Het_obs / (2 × ñ × np)) \n
where ñ = np / ∑ₖ(1/nₖ) \n
where p̄ᵢ² = ∑ₖ(pᵢₖ² / np)

### DST
amount of gene diversity among samples given as: \n
HT - HS

### DST′
amount of gene diversity among samples adjusted for sample size given as: \n
(np / (np-1)) × Dst

### HT′
overall gene diversity adjusted for sample size given as: \n
HS + DST′

### FST
proportion of the total genetic variance in subpopulations relative to the total genetic variance  given as: \n
DST / HT

### FST′
proportion of the total genetic variance in subpopulations relative to the total genetic variance, adjusted for heterozygosity given as: \n
DST′ / HT′

### FIS
proportion of the genetic variance in a locus relative to the genetic variance within subpopulations given as: \n
1 - (Het_obs / HS)

### DEST
population differentiation (Jost 2008) given as: \n
(np/(np-1)) × (Ht'-Hs) / (1-Hs)
"""
function Base.summary(data::PopData; by::String = "global")
    # observed/expected het per locus per pop
    het_df = DataFrames.combine(
        groupby(data.loci, [:locus, :population]),
        :genotype => nonmissing => :n,
        :genotype => hetero_o => :het_obs,
        :genotype => (i -> hetero_e(i)) => :het_exp,
        :genotype => allele_freq => :alleles
    )
    # collapse down to retrieve averages and counts
    n_df = DataFrames.combine(
        [:het_obs, :het_exp, :n, :alleles] => (o,e,n,alleles) -> (
            count = sum(.!iszero.(n)),
            mn = sum(.!iszero.(n)) ./ sum(reciprocal.(n)),
            HS = mean(skipmissing(gene_diversity_nei87.(e,o,sum(.!iszero.(n)) ./ sum(reciprocal.(n))))),
            Het_obs = mean(skipmissing(o)),
            avg_freq = sum(values(avg_allele_freq(alleles)).^2)
            ),
        groupby(het_df, :locus)
    )

    Ht = 1.0 .- n_df.avg_freq .+ (n_df.HS ./ n_df.mn ./ n_df.count) - (n_df.Het_obs ./ 2.0 ./ n_df.mn ./ n_df.count)
    FIS =  1.0 .- (n_df.Het_obs ./ n_df.HS)
    DST = Ht .- n_df.HS
    FST = DST ./ Ht
    DST′ = n_df.count ./ (n_df.count .- 1) .* DST
    DEST = DST′ ./ (1 .- n_df.HS)
    HT′ = n_df.HS .+ DST′
    FST′ = DST′ ./ Ht

    if lowercase(by) != "global"
        insertcols!(
        select!(
        n_df, :locus,
        :Het_obs => (i -> round.(i, digits = 4)) => :Het_obs,
        :HS => (i -> round.(i, digits = 4)) => :HS,
        ),
        :HT => round.(Ht, digits = 4),
        :DST => round.(DST, digits = 4),
        :HT′ => round.(HT′, digits = 4),
        :DST′ => round.(DST′, digits = 4),
        :FST => round.(FST, digits = 4),
        :FST′ => round.(FST′, digits = 4),
        :FIS => round.(FIS, digits = 4),
        :DEST => round.(DEST, digits = 4)
        )
    else
        Het_obs = mean(n_df.Het_obs)
        HS = mean(n_df.HS)
        Ht = mean(Ht)
        #FIS = mean(FIS)
        DST = mean(DST)
        #FST = mean(FST)
        DST′ = mean(DST′)
        #DEST = mean(DEST)
        HT′ = mean(HT′)
        #FST′ = mean(FST′)

        DataFrame(
        :Het_obs => round.(Het_obs, digits = 4),
        :HS => round.(HS, digits = 4),
        :HT => round.(Ht , digits = 4),
        :DST => round.(DST, digits = 4),
        :HT′ => round.(HT′, digits = 4),
        :DST′ => round.(DST′, digits = 4),
        :FST => round(DST / Ht, digits = 4),
        :FST′ => round(DST′ / HT′, digits = 4),
        :FIS => round(1 - (Het_obs / HS), digits = 4),
        :DEST => round(DST′ / (1 - HS), digits = 4)
        )
    end
end

const summary_stats = summary
