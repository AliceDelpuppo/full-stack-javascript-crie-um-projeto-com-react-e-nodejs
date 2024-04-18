const fs = require('fs')
// import fs from 'fs' //  package.jsonc => "type": "module"

console.log(JSON.parse(fs.readFileSync('livros.json')))

// ESCREVE NO ARQUIVO
// const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'))
// const novoDado = { id: '5', nome: 'Livro mais que demais', srcImg: 'images/livro.png', url: '#' }

// fs.writeFileSync('livros.json', JSON.stringify([...dadosAtuais, novoDado]))

// console.log(JSON.parse(fs.readFileSync('livros.json')))
