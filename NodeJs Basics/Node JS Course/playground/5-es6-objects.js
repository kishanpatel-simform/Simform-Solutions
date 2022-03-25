const myname = 'Kishan'
const age = 22
const user = {
    myname,
    age,
    location: 'Ajmedabad'

}
console.log(user)

const product = {
    name: "Oil",
    price: 4500,
    saleprice: 4499

}
const { price: productprice, name, rating = 5 } = product
console.log(productprice)
console.log(name)
console.log(rating)