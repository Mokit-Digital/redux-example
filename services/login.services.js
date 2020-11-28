const jwt = require('jsonwebtoken')

const db = [{
    username: 'admin',
    password: 'admin'
}]

const authenticate = async({ username, password }) =>{

    const user = db.find(user => {
        return user.password == password && user.username == username
    })

    if(user) {
        const token = await jwt.sign({username}, 'configuracaodasuaaplicacao')

        return {
            token,
            user
        }
    }
}

module.exports = {
    authenticate
}