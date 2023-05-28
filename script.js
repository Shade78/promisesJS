
// const listPromise = fetch('https://api.sampleapis.com/countries/countries');
// listPromise
//     .then(data => data.json())
//     .then(countries => console.log(countries))
//     .catch(err => {
//         console.log('Ошибка', err)
//     })

const family = [
    {member: 'mother', id: 111, cofee: 'Black'},
    {member: 'father', id: 222, cofee: 'test'},
    {member: 'son', id: 333, cofee: 'Cappucino'},
]

const getCoffee = (member) => {
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
    return coffeePromise
    .then(data => data.json())
    .then(list => {
        const coffee = list.find(res => res.title === member.cofee)
        console.log(coffee)
        return {
            ...member,
            coffee
        }
    })
}


const getFamilyMember = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id);
            if (member) {
                resolve(member)
            } else {
                reject(Error('Член семьи не найден'))
            }
        }, 1500)
    })
}

getFamilyMember(111)
    .then(data => {
        return getCoffee(data);
    })
    .then(newMember => {
    console.log('newMember', newMember)
}).catch(err => {
    console.log(err)
})
