const blacklist = require('./blacklist')
const {promisify} = require('util')

const existsAsync = promisify(blacklist.exists).bind(blacklist)
const setAsync = promisify(blacklist.set).bind(blacklist)

const jwt = require('jsonwebtoken')
const { createHash } = require('crypto')

function gerarTokenHash(token){
    return createHash('sha256')
    .update(token)
    .digest('hex')
}

module.exports = {
    adiciona : async token => {
        const dataExpiracao = jwt.decode(token).exp
        const tokenHash = gerarTokenHash(token)
        

        await setAsync(tokenHash, '')
        
        blacklist.expireat(tokenHash,dataExpiracao)
       
    },
    contemToken: async token =>{
        const tokenHash = gerarTokenHash(token)
        const resultado = await existsAsync(tokenHash)

        return resultado === 1
    },
}