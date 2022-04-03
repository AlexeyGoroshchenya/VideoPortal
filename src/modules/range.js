export const range = () => {

    const rangeInputs = document.querySelectorAll('input[type="range"]');
    const minRange = document.querySelector('.min-range')
    const maxRange = document.querySelector('.max-range')

    const showRangeValue = (input) => {
        let rangePercent = (input.max - input.min) / 100
        let lengthRangeElement = document.querySelector('.menu__range').clientWidth

        let rangeMinPercent = (rangeInputs[0].value - rangeInputs[0].min) / rangePercent
        let rangeMaxPercent = (rangeInputs[1].value - rangeInputs[1].min) / rangePercent
        let rangeMinTransition = ((lengthRangeElement * rangeMinPercent) / 100) - 15
        let rangeMaxTransition = ((lengthRangeElement * rangeMaxPercent) / 100) - 15

        minRange.style.transform = `translateX(${rangeMinTransition}px)`
        minRange.textContent = rangeInputs[0].value
        maxRange.style.transform = `translateX(${rangeMaxTransition}px)`
        maxRange.textContent = rangeInputs[1].value
    }

    document.querySelector('.menu__years').addEventListener('input', (e) => {
        if (e.target === rangeInputs[0]) {
            if (+rangeInputs[0].value > +rangeInputs[1].value) {
                rangeInputs[1].value = +rangeInputs[0].value;
            }
        }

        if (e.target === rangeInputs[1]) {
            if (+rangeInputs[1].value < +rangeInputs[0].value) {
                rangeInputs[0].value = +rangeInputs[1].value;
            }
        }

        if (e.target.matches('input[type="range"]')) {
            showRangeValue(e.target)
        }
    })

    rangeInputs.forEach((input) => {
        showRangeValue(input)
    });

    /*
    rangeInputs[0].addEventListener('input', (e) => {
        if (+rangeInputs[0].value > +rangeInputs[1].value) {
            rangeInputs[1].value = +rangeInputs[0].value;
        }
    });

    rangeInputs[1].addEventListener('input', (e) => {
        if (+rangeInputs[1].value < +rangeInputs[0].value) {
            rangeInputs[0].value = +rangeInputs[1].value;
        }
    });

    rangeInputs.forEach((input) => {
        showRangeValue(input)

        input.addEventListener('change', () => {
            showRangeValue(input)
        })
    });
*/
}