
export pairwise_identical, missing

"""
    missing(data::PopData; by::String = "sample")
Get missing genotype information in a `PopData`. Specify a mode of operation
to return a DataFrame corresponding with that missing information.

#### Modes
- "sample" - returns a count and list of missing loci per individual (default)
- "pop" - returns a count of missing genotypes per population
- "locus" - returns a count of missing genotypes per locus
- "full" - returns a count of missing genotypes per locus per population

### Example:
```
missing(gulfsharks(), by = "pop")
```
"""

@inline function Base.missing(data::PopData; by::String = "sample")
    if by ∈ ["sample", "individual"]
        DataFrames.combine(
            DataFrames.groupby(data.loci, :name),
            :genotype => (i -> count(ismissing, i)) => :missing
        )
    elseif by ∈ ["pop", "population"]
                DataFrames.combine(
            DataFrames.groupby(data.loci, :population),
            :genotype => (i -> count(ismissing, i)) => :missing
        )
    elseif by ∈ ["locus", "loci"]
        DataFrames.combine(
            DataFrames.groupby(data.loci, :locus),
            :genotype => (i -> count(ismissing, i)) => :missing
        )

    elseif by ∈ ["detailed", "full"]
        DataFrames.combine(
            DataFrames.groupby(data.loci, [:locus, :population]),
            :genotype => (i -> count(ismissing, i)) => :missing
        )
    else
        @error "Mode \"$by\" not recognized. Please specify one of: sample, pop, locus, or full"
        missing(data)
    end
end

#TODO add to docs (Data Exploration page and API)

"""
    pairwise_identical(data::PopData)
Return a table of the percent of identical genotypes that are identical for each locus
between pairs of individuals.
"""
function pairwise_identical(data::PopData)
    sample_names = samples(data)
    pairwise_identical(data, sample_names)
end

"""
    pairwise_identical(data::PopData, sample_names::Vector{String})
Return a table of the percent of identical genotypes that are identical for each locus
between all pairs of provided individuals.
"""
function pairwise_identical(data::PopData, sample_names::Vector{String})
    errs = ""
    all_samples = samples(data)
    if sample_names != all_samples
        for i in sample_names
            if i ∉ all_samples
                errs *= " $i,"
            end
        end
        errs != "" && error("Samples not found in the PopData: " * errs)
    end
    sample_pairs = pairwise_pairs(sample_names)
    n = length(sample_pairs)
    perc_ident_vec = Vector{Float64}(undef, n)
    n_vec = Vector{Int}(undef, n)
    idx = 0
    p = Progress(length(sample_pairs), dt = 1, color = :blue)
    @inbounds for (sample_n, sample_1) in enumerate(sample_names[1:end-1])
        geno_1 = get_genotypes(data, sample_1)
        len_1 = length(collect(skipmissing(geno_1)))
        @inbounds @sync Base.Threads.@spawn for sample_2 in sample_names[sample_n+1:end]
            idx += 1
            geno_2 = get_genotypes(data, sample_2)
            len_2 = length(collect(skipmissing(geno_2)))
            shared_geno = minimum([len_1, len_2])
            shared = sum(skipmissing(geno_1 .== geno_2))
            @inbounds perc_ident_vec[idx] = round(shared/shared_geno, digits = 2)
            @inbounds n_vec[idx] = shared_geno
        end
    update!(p, idx)
    end
    DataFrame(:sample_1 => map(i -> i[1], sample_pairs), :sample_2 => map(i -> i[2], sample_pairs), :identical => perc_ident_vec, :n => n_vec)
end