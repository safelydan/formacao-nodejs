const fs = require('fs')

const read = () => {
    let thread = 1;
    let count = 1;

    while(count <= 4) {
        fs.readFile('./teste.txt', function(err, data) {
            const dateTime = new Date()
            console.log(`leitura arquivo ${thread} - ${dateTime.getSeconds()}:${dateTime.getMilliseconds()}`)
        })
        count++
    }
} 


module.exports = {read};