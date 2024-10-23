
function getNames(users) {
    let names = [];
    //for(let {name} of user) {
     // names.push(name);
    //}
  
  users.forEach(user => {
    names.push(user.name)
  })
  
    return names;
  
  }
  
  console.log(getNames(users));
  
  
  let var1;
  console.log(`${var1} and typeof ${var1}`)
  
  let var2 = null;
  console.log(typeof var2)
  console.log(foo);
  
  let foo = 1