'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const inputRUB = wrapper.querySelector('#rub');
    const inputUSD = wrapper.querySelector('#usd');
    const inputEURO = wrapper.querySelector('#euro');

    inputRUB.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

        request.open('GET', url);
        request.addEventListener('load', () => {
            if (request.status == 200) {
                const data = JSON.parse(request.response);
                const valueUSD = data.Valute.USD.Value;
                const valueEURO = data.Valute.EUR.Value;

                inputUSD.value = (inputRUB.value / valueUSD).toFixed(2);
                inputEURO.value = (inputRUB.value / valueEURO).toFixed(2);
            } else {
                console.log('Error');
            }
        });

        request.send();
    });
});
