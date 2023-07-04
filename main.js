const firstName = 'Chyngyz';
const lastName = 'Sultanov';

document.write(`Саламатсызбы, ${firstName} ${lastName}!<br>`);

console.log(`Саламатсызбы, ${firstName} ${lastName}!`);

const num1 = 8;
const num2 = 3;

if (num1 === num2) {
  console.log('Числа равны');
} else if (num1 > num2) {
  console.log('Первое число больше');
} else {
  console.log('Второе число больше');
}
const color = 'зеленый';

if (color === 'зеленый') {
  console.log('Можно идти');
} else if (color === 'желтый') {
  console.log('Ждите');
} else if (color === 'красный') {
  console.log('Стойте');
} else {
  console.log('Некорректное значение цвета');
}


const stars1 = 6;
let price1;

if (stars1 === 1 || stars1 === 2) {
  price1 = 20;
} else if (stars1 === 3 || stars1 === 4) {
  price1 = 30;
} else if (stars1 === 5) {
  price1 = 120;
} else {
  console.log('Такого количества звёзд нет');
}

console.log(`Стоимость отеля с ${stars1} звездами: $${price1}`);