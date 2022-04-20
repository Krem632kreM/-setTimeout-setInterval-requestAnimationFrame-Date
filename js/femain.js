let date = new Date();

let days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

let timesOfDay = [
  'Доброй ночи',
  'Доброе утро',
  'Добрый день',
  'Добрый вечер'
];
let timesOfDayIndex;

switch(date.getHours()) {
  case 0 :
    case 1 :
      case 2 :
        case 3 :
          case 4 :
            case 5 :
              timesOfDayIndex = 0;
              break;

              case 6 :
                case 7 :
                  case 8 :
                    case 9 :
                      timesOfDayIndex = 1;
                      break;

                          case 10 :
                            case 11 :
                              case 12 :
                                case 13 :
                                  case 14 :
                                    case 15 :
                                      case 16 :
                                        case 17 :
                                          timesOfDayIndex = 2;
                                          break;
                                          
                          case 18 :
                            case 19 :
                              case 20 :
                                case 21 :
                                  case 22 :
                                    case 23 :
                                          timesOfDayIndex = 3;
                                          break;
}

const am12 = () => {

  var date12 = new Date();
  var hours12 = date12.getHours() - (date12.getHours() >= 12 ? 12 : 0);
  var period = date12.getHours() >= 12 ? 'PM' : 'AM';
  var minutes12 = date12.getMinutes();
  var seconds12 = date12.getSeconds();
  if (minutes12 < 10) minutes12 = "0" + minutes12;
  if (seconds12 < 10) seconds12 = "0" + seconds12;

  return hours12 + ":" + minutes12 + ":"+ seconds12 +" " + period
  }

let dateNow = new Date().getTime(),
    dateStop = new Date('01 january 2023').getTime(),
    timeRemaining = (dateStop - dateNow)/1000,
    hours = Math.floor(timeRemaining / 60 / 60) % 24,
    dayss = Math.floor(timeRemaining / 60 / 60 / 24);



let str = `<div id="id1"><span class="class1"> ${timesOfDay[timesOfDayIndex]} <br>
Сегодня: ${days[date.getDay()]} <br>
Текущее время: ${am12()} <br>
До нового года осталось ${dayss} дней </span> </div></span> </div>`
  
//document.body.innerHTML += str;

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

function throttle(callback, delay) {
  let isWaiting = false;
  let savedArgs = null;
  let savedThis = null;
  return function wrapper(...args) {
    if (isWaiting) {
      savedArgs = args
      savedThis = this
      return;
    }
    callback.apply(this, args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false
    if (savedArgs) {
      wrapper.apply(savedArgs, savedThis)
      savedThis = null
      savedArgs = null
    }
    }, delay)
  }
}

const input = throttle(() => {
  let input_taker = document.getElementById('input').value;
  document.getElementById('block').innerHTML = input_taker;
}, 3000)


let mainBg = document.querySelector('.main-bg'), count = 0, flyInterval;
const flyAnimate = () => {
  flyInterval = requestAnimationFrame(flyAnimate)
  count++
  if (count<1000) mainBg.style.top = count + 'px'
  else cancelAnimationFrame(flyInterval)
}

const go = document.querySelector('.go')
const reset = document.querySelector('.reset')
  let animate = true;

  go.addEventListener('click', () => {
  console.log(animate)
  if (animate) {
  flyInterval = requestAnimationFrame(flyAnimate);
  animate = false;
  } else {
    animate = true;
    cancelAnimationFrame(flyInterval);
  } 
})

reset.addEventListener('click', () => {
  count = 0;
  mainBg.style.top = count + 'px'
})

