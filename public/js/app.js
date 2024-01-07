const express = require('express')
const app = express()

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})


app.listen(3000, () => {
    console.log('Server berjalan pada port 3000.')
    })
    