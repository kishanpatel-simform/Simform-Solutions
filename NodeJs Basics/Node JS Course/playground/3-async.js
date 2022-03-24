console.log("Started")

setTimeout(() => {
    console.log("2 Second time out")
}, 2000)

setTimeout(() => {
    console.log("0 Second time out")
}, 0)
console.log("Stopped")