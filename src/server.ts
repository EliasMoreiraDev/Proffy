import express from 'express'

const app = express()

app.get('/users' , (request, response) =>{
    return response.json(
        [
            {nome:'Elias'},
            {nome: 'jose'}
        ]
    )
})
app.listen(3333)