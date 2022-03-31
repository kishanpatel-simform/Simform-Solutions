require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('62442f68154fc3a0e66e2205', { age: 22 }).then((user) => {
    console.log(user)

    return User.countDocuments({ age: 22 })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})