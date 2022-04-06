export const render = (arr) => {

    const galery = document.querySelector('.galery');
    const btnMore = document.querySelector('.button__btn');

    let numberCards = Math.floor((galery.clientWidth - 110 - ((Math.floor((galery.clientWidth - 110) / 210) - 1) * 20)) / 210);

    const renderCard = (item, index) => {

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

        if ((index + 1) > (numberCards * 2)) {
            galeryCard.classList.add('disabled-card')
        }
    }

    const startRender = (array) => {

        galery.innerHTML = "";

        array.forEach((item, index) => {
            renderCard(item, index);
        })
    }

    const moreRender = () => {

        // let rendered = document.querySelectorAll('.galery__card')
        let disabled = document.querySelectorAll('.disabled-card')

        // console.log(rendered);
        if (disabled.length) {
            disabled.forEach((item, index) => {
                if (index < numberCards) {
                    item.classList.remove('disabled-card')
                }
            })
        }
    }

    btnMore.addEventListener('click', (e) => {
        e.preventDefault()
        moreRender()
    })

    startRender(arr);


}