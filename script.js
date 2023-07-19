const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const timer= document.querySelector('#time');
timer.textContent=`${day}.${month}.${year}`;