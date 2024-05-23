// promise = promessa

// função que retorna uma promessa que resolve com um objeto contendo um id após 3 segundos
function pegarId() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1 });
      }, 3000);
    });
  }
  
  // função que retorna uma promessa que resolve com um email após 2 segundos, usando um id passado como argumento
  function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("email.com");
      }, 2000);
    });
  }
  
  // função que retorna uma promessa que resolve se o email for enviado com sucesso após 3 segundos, ou rejeita se houver um erro
  function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const deuErro = false; // simulação de erro
        console.log("email enviado");
        if (deuErro) {
          reject("deu erro"); // rejeita a promessa se houve um erro
        } else {
          resolve({ time: 6, to: "dane" }); // resolve a promessa com um objeto contendo informações adicionais
          // posso passar tanto um json para receber mais dados em um só
        }
      }, 3000);
    });
  }
  
  // inicia a cadeia de promessas chamando pegarId() (da problema ter varias promises aninhadas, vira uma bagunça, é bom evitar usar uma promise dentro da outra    )
  pegarId()
    .then((id) => { // quando pegarId() resolver, executa essa função com o resultado (id)
      buscarEmailNoBanco(id)
        .then((email) => { // quando buscarEmailNoBanco(id) resolver, executa essa função com o resultado (email)
          enviarEmail("taaarr", email) // envia o email com o corpo e o endereço de email resolvido
            .then(() => { // quando enviarEmail() resolver, executa essa função
              console.log("email enviado para o usuario com id: ", id);
            })
            .catch((err) => { // se enviarEmail() rejeitar, trata o erro aqui
              console.log(err);
            });
        })
        .catch((err) => { // se buscarEmailNoBanco(id) rejeitar, trata o erro aqui
          console.log(err);
        });
    })
    .catch((err) => { // se pegarId() rejeitar, trata o erro aqui
      console.log(err);
    });
  