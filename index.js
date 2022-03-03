const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    { name:'nome',message:'Qual o seu nome' },
    { name:'idade',message:'Qual a sua idade' },

]).then((answers)=> {
    if(!answers.nome || !answers.idade){
        throw new Error('O nome e a idade são obrigatótios')
    }
    const respostas = `O nome do usuario é ${answers.nome}
    e ele tem${answers.idade}`
    console.log(chalk.bgYellow.black(respostas))
})
 .catch((err) => console.log(err))
