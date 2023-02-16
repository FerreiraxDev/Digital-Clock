const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const clock = setInterval(function time(){
    let fDate = new Date();
    hr = fDate.getHours();
    min =fDate.getMinutes();
    sec =fDate.getSeconds();

    if(hr < 10){
        hr = '0' + hr
    }

    if(min < 10){
        min = '0' + min
    }

    if(sec < 10){
        sec = '0' + sec
    }
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
})