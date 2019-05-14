const sumButton = document.querySelector('.form__button');

function commaToDot(x) {
  return x.replace(',', '.');
}

sumButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  let firstNumber = document.getElementById('first-number').value;
  let secondNumber = document.getElementById('second-number').value;

  firstNumber = commaToDot(firstNumber);
  secondNumber = commaToDot(secondNumber);

  // Выведет ошибку при вводе некорректного значения в поле
  try {
    // Decimal исключает появ-е "лишних" знаков после запятой при сложении чисел с плавающей точкой
    firstNumber = new Decimal(firstNumber);
    secondNumber = new Decimal(secondNumber);
  } catch (error) {
    alert('Некорректное значение в поле ввода');
    return;
  }

  const sum = firstNumber.add(secondNumber);
  alert(`Результат: \n\r${sum}`);
});
