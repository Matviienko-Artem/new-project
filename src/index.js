import './styles.css';


///  ------------------- Задача с Codewars -------------------------

function digitalRoot(namber) {
  const namberString = String(namber);
  // const newArray = namberString.split('').map(namber => Number(namber));

  let x = 0;
  console.log(x.length);
  // while (newArray.length >) {}

  if (namberString.length === 2) {
    x = parseInt(namberString[0]) + parseInt(namberString[1]);

    return console.log(x);
  } else if (namberString.length > 2) {
    // ------------------- этот вариант надо еще доделать ---------------
    // for (let i = 0; i < namberString.length; i++) {
    //   // arr.push(newArray[i]);

    //   x += parseInt(namberString[i]);

    //   console.log(`Это длинна ${namberString.length}`);
    //   console.log(`Текущая цифра ${parseInt(namberString[i])}`);
    // }

    // while (x.length < 2) {}  <<<------------------ этот вариант надо еще продумать
    return console.log(x);
  }
}

digitalRoot(65);

let counter = 5;

while (counter < 55) {
  console.log('counter: ', counter);
  counter += 1;
}