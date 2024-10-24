const students =[
    {
        name: 'Niveditha',
        dept: 'IT'
    },
    {
        name: 'chandana',
        dept: 'HR'
    },
    {
        name: 'veda',
        dept: 'IT'
    },
    {
        name: 'manjula',
        dept: 'IT'
    }
]

function groupBy(students,property) {

    let output = {};
    for(student of students){
        let key = student[property]
        if(!output[key])
            output[key] = []
        output[key].push(student.name)
    }
    console.log(output)
    return output;
}

groupBy(students,'dept');