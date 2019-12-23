module PopGen

##   o O       o O       o O       o O       o O
## o | | O   o | | O   o | | O   o | | O   o | | O
## | | | | O | | | | Dependencies| | | | O | | | | O
## O | | o   O | | o   O | | o   O | | o   O | | o
##   O o       O o       O o       O o       O o


using Convex,
      DataFrames,
      ECOS,
      Distributions,
      GeneticVariation,
      LinearAlgebra,
      MultipleTesting,
      PlotlyJS,
      ProgressMeter,
      Random
      Statistics,


export PopObj,
    summary,
    nancycats,
    gulfsharks,
    delimited, csv,
    genepop,
    bfc, vcf,
    samples,
    loci,
    isolate_genotypes,
    locations, locations!,
    population, populations, population!, populations!,
    remove_inds!,
    remove_loci!,
    missing,
    heterozygosity, het, He,
    hwe_test, hwe,
    plot_missing,
    plot_locations



##   o O       o O       o O       o O       o O
## o | | O   o | | O   o | | O   o | | O   o | | O
## | | | | O | | | |Include Files| | | | O | | | | O
## O | | o   O | | o   O | | o   O | | o   O | | o
##   O o       O o       O o       O o       O o

include("PopObj.jl")
include("Read.jl")
include("Datasets.jl")
include("Manipulate.jl")
include("AlleleFreq.jl")
include("HardyWeinberg.jl")
include("SummaryInfo.jl")
include("Plotting.jl")


end # module PopGen
