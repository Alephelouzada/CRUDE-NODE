let {bd} = require('../database/users')

const getUsers = () =>{

    return bd;

}

const getUsersById = (idUser) => {
    return bd.filter((usuario) => usuario.id === idUser);
}

module.exports = {
    getUsers,
    getUsersById
}