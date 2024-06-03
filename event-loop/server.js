const express = require("express");
const app = express();


app.use('/', (req, res) => {
    const {id} = req.params;

    setTimeout(()=> {
        console.log('teste');
        res.send('pagina carregada')
    }, 5000)
});

const port = 1111;

app.listen(port, () => {
  console.log("Servidor rodando na porta", port);
});
