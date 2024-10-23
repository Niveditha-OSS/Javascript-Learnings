

let inarray = [1,3,4,1,1,1,1]

function findOcc(arr) {
  let minval = arr.sort((a,b) => a - b)[0];
  let count = 0;

  arr.forEach( e => {
    if(e === minval)
      count+=1;
  })
  console.log(count)
  return count;

}

findOcc(inarray)