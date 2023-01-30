import inquirer from 'inquirer'
import chalk from 'chalk'


SystemInit()

let listaPropriedades = ['display-flex', 'text-align', 'text-decoration'];

function SystemInit() {

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Listar propriedades CSS',
          'Adicionar propriedades CSS',
          'Remover Propriedades CSS',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer['action']

      if (action === 'Listar propriedades CSS') {
        ListCSS()
      } else if (action === 'Adicionar propriedades CSS') {
        AddCSS()
      } else if (action === 'Remover Propriedades CSS') {
        RemoveCSS()
      } else if (action === 'Sair') {
        process.exit()
      } 
    })
}

function ListCSS(){
    listaPropriedades.sort((a, b) => {
        return a.localeCompare(b);
    });
    listaPropriedades.forEach((propriedade) => console.log(chalk.bgBlue.white(propriedade)));
    SystemInit();
}


function AddCSS(){
    
    inquirer.prompt([
        {
        name: 'PropertiesName',
        message: 'Digite um nova propriedade CSS:',
        },
    ])

    .then((answer) => {

        const PropertiesName = answer.PropertiesName

        let index = listaPropriedades.indexOf(PropertiesName)
        
        if(index === -1){
            listaPropriedades.push(PropertiesName)
            console.log(chalk.green('Parabéns, uma nova propriedade foi adicionada!'))
        } else {
            console.log(chalk.red('Esta propriedade já existe no sistema, digite outra!'))
        }
        
        SystemInit()
    })
      
}

function RemoveCSS(){
    
    inquirer
    .prompt([
        {
        name: 'PropertiesName',
        message: `Digite qual deseja ser removida:`,
        },
    ])
    .then((answer) => {

        const PropertiesName = answer.PropertiesName

        let index = listaPropriedades.indexOf(PropertiesName)
        
        if(index === -1){
            console.log(chalk.red('Esta propriedade não pode ser removida pois ela não existe no sistema, digite outra!'))
        } else {
            listaPropriedades.splice(index, 1)
            console.log(chalk.green('Propriedade removida com sucesso!'))
        }        
        SystemInit()
    })
      
}

