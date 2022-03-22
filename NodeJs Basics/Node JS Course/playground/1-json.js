const fs = require('fs')
    /*const books = {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki"
    }
    */
    //const bookJSON = JSON.stringify(books)
    //rs.writeFileSync('1-json.json', bookJSON)
    //console.log(bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const books = JSON.parse(dataJSON)
books.title = "Become Rich in 90 Days"

const booksJSON = JSON.stringify(books)
fs.writeFileSync('1-json.json', booksJSON)