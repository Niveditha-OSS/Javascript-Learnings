
const sortedArray = (arr) => {
    return arr.sort((a,b) => a - b);
  }
  
  //console.log(sortedArray(inputArray))
  
  const books = [
    {
      name:"Harry Potter", 
      author: "Joanne Rowling"
    },
    {
      name:"Warcross", 
      author: "Marie Lu"
    },
    {
      name:"The Hunger Games", 
      author: "Suzzane Collins"
    }
  ]
  
  const sorted = books.sort((book1, book2) => {
    const auth1 = book1.author.split(' ')[1].toLocaleLowerCase();
    const auth2 = book2.author.split(' ')[1].toLocaleLowerCase();
  
    if( auth1 > auth2)
      return 1
    else 
    return -1
  })