const groups = {
    Group1: {
      John: "Blue",
      Peter: "Green"
    },
    Group2: {
      Jane: "Red",
      May: "Green"
    },
    Group3: {
      Howard: "Blue",
      Lee: "Red",
      Lim: "Green"
    }
  };


  //console.log(groups)

  let output = {};

  function group(groups) {

    for(var group in groups) {
        let groupObj = groups[group];

        for(var person in groupObj){
            //console.log(person)
            var colour = groupObj[person]
           // console.log(colour)
            if(!output[colour]){
              output[colour] = [];
            }
            output[colour].push(person);
        }

}
return output;

}

//console.log(group(groups));







