function fishTank (input){
    let l = Number(input[0])
    let w = Number (input[1])
    let h = Number (input[2])
    let percetage = Number (input[3])
    let volumeFishTank = Number (l * w * h)
    let convertVolume = Number (volumeFishTank *0.001)
    let fullVolume = Number (percetage/100)
    let litersNeeded = Number (convertVolume *(1-fullVolume))

    console.log (litersNeeded)


}
fishTank (["105",
"77",
"89",
"18.5"]
)