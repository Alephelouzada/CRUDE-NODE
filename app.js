const express = require('express')// é usado para importa framework em um projeto.
const userService = require('./services/users')
const app = express()//é usado para criar uma instância do aplicativo express, permite que você configure e manipulerota.
const port = 3000//é uma linha de código que define uma chamada contante "port" com o valor 3000.
app.use(express.json())//é usado para adicionar o middleware.


//get users
app.get('/users', (request, response) => {
  response.json(userService.getUsers());
})

app.get('/users/:id', (request, response) => {
  //pegar o id da requisição
  const idUser = request.params.id;
  response.json(userService.getUsersById(idUser));
  // responder a requisição com as informações do users

})
app.post("/users",(request, response) => {

//pegar o id requisição
const body =  request.body;

//criar um novo pbjeto a partir desse corpo

//responder a requisição com o banco completo
response.status(201).json(userService.createUser(body));

})

app.delete("/users/:id",(request, response) =>{

  //pegar o id da requisição
  const idUser = request.params.id;
  

  // pecorrer o banco e encontrar quem tem o id da requisição



  //respoder com meu banco atulizado
  userService.deleteUser(idUser);

  response.json("apagado com sucesso.");

 //response.status(204).json(userRepository.deleteUser(idUser));

})
app.patch("/users/:id",(request, response)=>{
  // pagar o id da requição 
  const idUser = request.params.id;

  //pagar o corpo da requição 
  const body = request.body;

  //percorrer o banco
  
  userService.uptadeUser(idUser,body);
  
  //responder a equisição com banco
  response.status(200).json("Atualizado com sucesso");

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})