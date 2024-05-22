// função enviarEmail que simula o envio de um email após 3 segundos
function enviarEmail(corpo, para, callback) {
  // setTimeout é usado para simular um atraso de 3 segundos
  setTimeout(() => {
    // log para simular que o email foi enviado
    console.log(`
  email enviado para ${para}
  ${corpo}
  de: dane
  `);
    // chama a função de callback passada como argumento
    callback("dane", "ok", 5, "5s");
  }, 3000);
}

// imprime uma mensagem no console antes de enviar o email
console.log("enviando email...");

// chama a função enviarEmail com os parâmetros: corpo do email, destinatário e uma função de callback
enviarEmail("eandro cu de apito", "eandro", (nome, status, amount, time) => {
  // esta função de callback é executada após o email ser enviado (após os 3 segundos)
  console.log(`EMAIL ENVIADO POR: ${nome}`);
  console.log(`STATUS: ${status}`);
  console.log(`QUANTIDADE DE PESSOAS: ${amount}`);
  console.log(`TEMPO: ${time}`);
});

// imprime outra mensagem no console imediatamente após chamar enviarEmail
console.log("tarara");
