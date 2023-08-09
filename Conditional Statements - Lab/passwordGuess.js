function passwordGuess (input){
    let paswordIs = input[0]
    if (paswordIs == "s3cr3t!P@ssw0rd"){
        console.log ("Welcome")
    }else{
        console.log ("Wrong password!")
    }
}
passwordGuess (["s3cr3t!p@ss"])