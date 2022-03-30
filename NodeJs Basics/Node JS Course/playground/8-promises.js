const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 7, 4])
        reject('Error')
    }, 2000)
})
doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})