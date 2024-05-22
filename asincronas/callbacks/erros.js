// função enviarEmail que simula o envio de um email após 3 segundos
function enviarEmail(corpo, para, callback) {
  // setTimeout é usado para simular um atraso de 3 segundos
  setTimeout(() => {


    const deuErro = false;

    if (deuErro) {
      callback(3, "erro");
    } else {
      callback(3);
    }

    // chama a função de callback passada como argumento
  }, 3000);
}

// imprime uma mensagem no console antes de enviar o email
console.log("enviando email...");

// chama a função enviarEmail com os parâmetros: corpo do email, destinatário e uma função de callback
enviarEmail("eandro cu de apito", "eandro", (time, erro) => {
  if (!erro) {
    console.log("tudo ok");
    console.log(`time: ${time}s`);
  } else {
    console.log(erro);
    console.log(`time: ${time}s`);
  }
});

// imprime outra mensagem no console imediatamente após chamar enviarEmail
console.log("tarara");
