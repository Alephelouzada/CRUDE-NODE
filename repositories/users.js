let {bd} = require('../database/users')

const getUsers = () =>{

    return bd;

}

const getUsersById = (idUser) => {
    return bd.filter((usuario) => usuario.id === idUser);
}

const createUser = (body) =>{
    const newUser = {
        id:(bd.length+1).toString(),
        name:body.name
      }   
      //adicionar esse novo objeto ao banco
      bd.push(newUser);
      return newUser;
      
    }
    const deleteUser =(idUser) =>{

        bd = bd.filter((usuario) => usuario.id != idUser);
        return  null

    }
    const uptadeUser = (idUser,body) => {

        bd = bd.map((usuario) =>{ 
            if(usuario.id === idUser){
        
          //atualizar as informações
              usuario.name = body.name;
            }
            return usuario;
        })
        
        return bd;
        
    }

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    uptadeUser,
}