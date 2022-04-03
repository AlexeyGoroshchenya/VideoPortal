import { database } from './database';

export const render = () => {

    const galery = document.querySelector('.galery');
    const btnMore = document.querySelector('.button__btn');

    let numberGaps = (Math.floor((galery.clientWidth - 110) / 210) - 1) * 20;
    let numberCards = Math.floor((galery.clientWidth - 110 - numberGaps) / 210);

    const renderCard = (item) => {

        const galeryCard = document.createElement('div');
        galeryCard.classList.add('galery__card')
        galeryCard.innerHTML = `
        <div class="galery__image"><img src="${item.preview}" alt=""></div>
        <div class="galery__logo">${item.label}</div>
        <div class="galery__text">
            <div class="galery__name"><span>${item.title}</span> ${item.year}, ${item.type}</div>
            <div class="galery__rating"><img src="img/tomatometer_fresh.149b5e8adc3_copy_91.png"
                    alt=""><span>${item.tomato}</span><img src="img/aud_score_fresh.6c24d79faaf_copy_94.png"
                    alt=""><span>${item.audience}</span></div>
        </div>
        `;
        galery.append(galeryCard);

    }

    const startRender = () => {

        database.forEach((item, index) => {
            if (index < (numberCards * 2)) {
                renderCard(item);
            }
        })
    }

    const moreRender = () => {
        let rendered = document.querySelectorAll('.galery__card').length

        if (rendered) {
            database.forEach((item, index) => {

                if (index > rendered && index <= (rendered + numberCards)) {
                    renderCard(item)
                }
            })
        }
    }

    btnMore.addEventListener('click', (e) => {
        e.preventDefault()
        moreRender()
    })

    startRender();

}