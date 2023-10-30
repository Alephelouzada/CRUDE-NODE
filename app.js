const express = require('express')// é usado para importa framework em um projeto.
const userRepository = require('./repositories/users')
const app = express()//é usado para criar uma instância do aplicativo express, permite que você configure e manipulerota.
const port = 3000//é uma linha de código que define uma chamada contante "port" com o valor 3000.
app.use(express.json())//é usado para adicionar o middleware.


//get users
app.get('/users', (request, response) => {
  response.json(userRepository.getUsers());
})

app.get('/users/:id', (request, response) => {
  //pegar o id da requisição
  const idUser = request.params.id;
  response.json(userRepository.getUsersById(idUser));
  // responder a requisição com as informações do users

})
app.post("/users",(request, response) => {

//pegar o id requisição
const body =  request.body;

//criar um novo pbjeto a partir desse corpo
const newUser ={

  id:(bd.length+1).toString(),
  name:body.name

}

//adicionar esse novo objeto ao banco
bd.push(newUser);

//responder a requisição com o banco completo
response.json(bd);

})

app.delete("/users/:id",(request, response) =>{

  //pegar o id da requisição
  const idUser = request.params.id;

  // pecorrer o banco e encontrar quem tem o id da requisição

  bd = bd.filter((usuario) => usuario.id != idUser);

  //respoder com meu banco atulizado
  response.json(bd);

})
app.patch("/users/:id",(request, response)=>{
  // pagar o id da requição 
  const idUser = request.params.id;

  //pagar o corpo da requição 
  const body = request.body;

  //percorrer o banco
  bd = bd.map((usuario) =>{ 
    if(usuario.id === idUser){

  //atualizar as informações
      usuario.name = body.name;
    }
    return usuario
})

  
  //responder a equisição com banco
  response.json(bd);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})