const myPromise = new Promise((resolve, reject) => {
  const nome = "Daniel";

  if (nome === "Daniel") {
    resolve(`usuario ${nome} encontrado`);
  } else {
    reject(`usuario ${nome} nao encontrado`);
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const myPromise2 = new Promise((resolve, reject) => {
  const nome = "janiel";

  if (nome === "Daniel") {
    resolve(`usuario ${nome} encontrado`);
  } else {
    reject(`usuario ${nome} nao encontrado`);
  }
});

myPromise2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((dataFormatada) => {
    console.log(dataFormatada);
  })
  .catch((error) => {
    console.log(error);
  });

const myPromise3 = new Promise((resolve, reject) => {
  const nome = "janiel";

  if (nome === "Daniel") {
    resolve(`usuario ${nome} encontrado`);
  } else {
    reject(`usuario ${nome} nao encontrado`);
  }
});

myPromise3
  .then((data) => {
    return data.toLowerCase();
  })
  .then((dataFormatada) => {
    console.log(dataFormatada);
  })
  .catch((error) => {
    console.log(`Aconteceu um erro: ${error}`);
  });

const myPromise4 = new Promise((resolve, reject) => {
  const nome = "janiel";

  if (nome === "Daniel") {
    resolve(`usuario ${nome} encontrado`);
  } else {
    reject(`usuario ${nome} nao encontrado`);
  }
});


