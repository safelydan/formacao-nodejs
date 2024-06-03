const { read } = require("./read");

(() => {
  setTimeout(() => {
    const date1 = new Date();

    console.log(`time1:  ${date1.getMinutes()} - ${date1.getMilliseconds()} `);
  }, 3000);
  setTimeout(() => {
    const date2 = new Date();
    console.log(`time2:  ${date2.getMinutes()} - ${date2.getMilliseconds()} `);
  }, 3000);

  read()
})();
