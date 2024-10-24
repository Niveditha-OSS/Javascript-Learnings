const users = [
    {
        name: 'Alice',
        age: 45
    },
    {
        name: 'Bob',
        age: 30
    },
    {
        name: 'Charlie',
        age: 15
    }];

    users.sort((user1,user2) => {
        return user1.age - user2.age
    })

    console.log(users)



