const inquirer = require("inquirer");
const { type } = require("os");

function soma(a, b) {
  return a + b;
}

async function somaInterativa() {
  const respostas = await inquirer.prompt([
    {
      type: "input",
      name: "numeroA",
      message: "Digite o número A da soma que deseja fazer: ",
    },
    {
      type: "input",
      name: "numeroB",
      message: "Digite o número B da soma que deseja fazer: ",
    },
  ]).then((respostas)=>{
    const numeroA = (Number (respostas.numeroA))
    const numeroB =  (Number (respostas.numeroA))
    
    console.log(soma(numeroA, numeroB));
    
  })
}


somaInterativa()