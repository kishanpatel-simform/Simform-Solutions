 setTimeout(() => {
     console.log("Two Second timeout")
 }, 2000)

 const names = ['Kishan', 'Jaymin', 'Yash', 'Anjum', 'Nayan', 'Rutul']
 const shortnames = names.filter((name) => {
     return name.length <= 4
 })


 const geocode = ((address, callback) => {
     setTimeout(() => {
         const data = {
             latitude: 0,
             longitude: 0
         }
         callback(data)
     }, 2000)
 })
 geocode('LosAngeles', (data) => {
     console.log(data)
 })