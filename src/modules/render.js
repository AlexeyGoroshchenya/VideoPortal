import { database } from './database';

export const render = () => {

    const galery = document.querySelector('.galery');
    const galeryCards = document.querySelectorAll('.galery__card');
    console.log(galery);

    galeryCards.forEach((item, index) => {
        item.innerHTML = `
        <div class="galery__image"><img src="${database[index].preview}" alt=""></div>
        <div class="galery__logo">${database[index].label}</div>
        <div class="galery__text">
            <div class="galery__name"><span>${database[index].title}</span> ${database[index].year}, ${database[index].type}</div>
            <div class="galery__rating"><img src="img/tomatometer_fresh.149b5e8adc3_copy_91.png"
                    alt=""><span>${database[index].tomato}</span><img src="img/aud_score_fresh.6c24d79faaf_copy_94.png"
                    alt=""><span>${database[index].audience}</span></div>
        </div>
`

    })

}