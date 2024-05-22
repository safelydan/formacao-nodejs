function enviarEmail(corpo, para){
    setTimeout(()=>{
        console.log(`Email enviado para ${para}
${corpo}
De: Dane`)

    }, 5000)
}


enviarEmail('eandro cu de apito', 'Eandro')




// setTimeout(()=> {
//     console.log('Meu nome eh daniel')
// }, 5000) // por padrao o setTimeout ja eh asincrono