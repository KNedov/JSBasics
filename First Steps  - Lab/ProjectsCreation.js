function ProjectsCreation(input){
    let name = (input[0])
    let projects = Number (input[1])
    let ours = (3*projects)
    console.log (`The architect ${name} will need ${ours} hours to complete ${projects} project/s.`)
}
ProjectsCreation(["George" , "4"])
