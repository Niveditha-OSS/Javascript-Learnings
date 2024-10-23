function privateCounter() {
    let count = 0;
  
    return {
      increment: (val = 1) => {
          count += count+val;
      },
      getCount: () =>{
        return count;
      }
    }
  
  }
  
  const counter = privateCounter();
  
  console.log(counter.getCount())
  
  counter.increment(5)
  
  console.dir(counter.getCount())