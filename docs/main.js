const calc = document.querySelector('.calc');

calc.addEventListener('click', function(event) {
  if(!event.target.classList.contains('calc__btn')) return;

  let value = event.target.innerText;

  switch(value) {
    case 'C':
    result.innerText = '';
    break;

    case '=':
    //Проверка выражения
    if(result.innerText.search(/[^0-9*/+-]/mi) != -1) return;

    //Исполнение выражения
    result.innerText = eval(result.innerText).toFixed(0);
    break;

    default:
    result.innerText += value;
  }

});
