const lastname = localStorage.getItem("result");
const resultNode = document.querySelector('.j-result');
const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
const value = document.getElementById('num').value;
let s = document.getElementById('j-result');
s.textContent = '';
if (!(typeof value1 !== "number" && value >= 1 && value <= 10)) {
  s.textContent = 'Номер страницы вне диапазона от 1 до 10';
  return;
} else {  
  
  
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://picsum.photos/v2/list?limit=${value}');

xhr.send();
  
xhr.onload = function() {
  if (xhr.status != 200) {
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`Готово, получили ${xhr.response.length} байт https://picsum.photos/v2/list?limit=${value}`);
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    console.log(`Получено ${event.loaded} байт`);
  }

};

xhr.onerror = function() {
  console.log("Запрос не удался");
};
};
  });