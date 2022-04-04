const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.port | 3000



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server Running")
})

// const jwt = require('jsonwebtoken')
// const myFunction = async() => {
//     const token = jwt.sign({ __id: 'abc123' }, 'thisismynewcourse', { expiresIn: '2 weeks' })
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myFunction()

const User = require('./models/user')
const Task = require('./models/task')
const main = async() => {
    const user = await User.findById('624abe5cd4cd5d422c28a1bc')
        // await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()