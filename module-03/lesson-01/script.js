// Task-1

// Task-2

// Task-3

// Task-4

// Task-5

// Task-6

// Task-7

// Task-8

// Task-9

// Task-10

// Task-11

// Task-12

  // исходный массив
  let ar12 = ['test', 'west', 'list', 'class', 'best'];

  function f12() {
    // индекс последнего элемента
    let lastIndex = ar12.length - 1;

    // меняем местами нулевой и последний
    let temp = ar12[0];
    ar12[0] = ar12[lastIndex];
    ar12[lastIndex] = temp;

    // выводим массив в out-12 через пробел
    document.querySelector('.out-12').textContent = ar12.join(' ');
  }

  // привязываем функцию к кнопке
  document.querySelector('.b-12').onclick = f12;



// Task-13у

// Task-14

// Task-15

// Task-16

// Task-17

// Task-18
let ar18 = [15, 24, 13, 78, 21, 4, 45, 67,];

  function f18() {
    // предполагаем, что первый элемент — максимальный
    let max = ar18[0];

    // перебираем массив
    for (let i = 1; i < ar18.length; i++) {
      if (ar18[i] > max) {
        max = ar18[i];
      }
    }

    // выводим результат
    document.querySelector('.out-18').textContent = max;
  }

  // привязываем функцию к кнопке
  document.querySelector('.b-18').onclick = f18;
// Task-19

// Task-20
