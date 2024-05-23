// promise = promessa

// função que retorna uma promessa que resolve com um objeto contendo um id após 3 segundos
async function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1 });
    }, 3000);
  });
}

// função que retorna uma promessa que resolve com um email após 2 segundos, usando um id passado como argumento
async function buscarEmailNoBanco(id) {
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
      const deuErro = true; // simulação de erro
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

async function enviarEmailParaUsuario() {
  try {
    const id = await pegarId();
    const email = await buscarEmailNoBanco(id);

    const emailEnviado = await enviarEmail("tar", email);
    console.log('email enviado com sucesso!')

    console.log(emailEnviado);
  } catch (err) {
    console.log(err);
  }
}

enviarEmailParaUsuario();

