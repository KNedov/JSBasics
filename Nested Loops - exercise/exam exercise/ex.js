function ex(input) {
  let a = Number(input[0])
  for(let row=2;row<a;row++)
          if (a%row!==0) {
            console.log(a);}
}
ex(["8"]);
