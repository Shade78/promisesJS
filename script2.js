// async 
const keys = [
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 55,
    },
]



const getBeer = (someKeys) => {
    const beerPromise = fetch('https://api.sampleapis.com/beers/ale');
    return beerPromise
        .then( data => {
            return data.json()
        })
        .then( list => {
            const beer = list.find(result => result.id === someKeys.id)
            console.log(beer)
            
        })
}

const getBeerFromArray = (id) => {
    return new Promise((resolve, reject) => {
        const beer = keys.find(result => result.id === id);
        if (beer){
            resolve(beer)
        } else {
            reject(Error('ошибка'))
        }
    }) 
}

getBeerFromArray(55)
    .then( data => {
        return getBeer(data)
    })
    