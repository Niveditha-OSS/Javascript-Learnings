
const users = [
  
    {
      id: 1,
      name: 'Jack',
      isActive: true
    },
    {
      id: 2,
      name: 'John',
      isActive: true,
    },
    {
      id: 3,
      name: 'Mike',
      isActive: false,
    }
  ]
  
  const isPresent = (userName) => {
    let found = false;
    users.forEach(user => {
      console.log(user.name, userName)
      if(user.name.toLocaleLowerCase() === userName.toLocaleLowerCase())
        found = true;
    })
    return found;
  }
  
  //console.log(isPresent('Johnnnn'))
  
  const isNameExists = (name,users) =>  users.some((user) => user.name === name);
  
  //console.log(isNameExists('Mike',users))