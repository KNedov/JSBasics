function ex(m) {
  let buff = 0;
  let odd = true;

    for (let i = 1; i < m; i++) {
      if (i % 2 !== 0) {
      console.log(i);
      buff += i;
      
    }
  }

  console.log(`Sum: ${buff}`);
}
ex(5);
ex(3);
ex();
