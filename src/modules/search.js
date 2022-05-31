import { database } from './database';
import { render } from './render';

export const search = () => {
    const searchByNameInput = document.querySelector('.search__input')
    const searchByLabelBtns = document.querySelector('.menu__labels')
    const searchByLabelAll = document.querySelectorAll('.menu__label-a')
    const searchByTypeInput = document.querySelector('.menu__checkboxes')
    const searchByGenresInput = document.querySelector('.menu__genre select')
    const searchByParamsBlock = document.querySelector('.menu__search')

    let resultArr = database.concat()
    console.log(resultArr)

    const searchByName = () => {

        resultArr = database.filter((item) => {
            let searchingValue = searchByNameInput.value.toLowerCase();
            if (item.title.toLowerCase().includes(searchingValue)) {
                return item
            }
        })
        render(resultArr)

        console.log(resultArr)
    }

    const searchByLabel = (element) => {


        searchByLabelAll.forEach(label => {
            if (label.classList.contains('active__label')) {
                resultArr = database.filter((item) => {
                    if (item.label.toLowerCase() === label.textContent.toLowerCase()) {
                        return item
                    }
                })
            }
        })

        //resultArr = database.filter((item) => {
        //if (item.label.toLowerCase() === element.textContent.toLowerCase()) {
        //return item
        //}
        //})
        if (resultArr.length > 0) {
            render(resultArr)
        } else {
            resultArr = database.concat()
            render(database)
        }

        console.log(resultArr)
    }

    const searchByGenres = () => {
        let genreSearchingValue = searchByGenresInput.options[searchByGenresInput.selectedIndex].textContent.toLowerCase();
        if (genreSearchingValue !== 'genre') {
            resultArr = resultArr.filter((item) => {

                if (item.genres.toLowerCase().includes(genreSearchingValue)) {
                    return item
                }
            })
        }

    }

    const searchByScores = () => {

        let selectedScoreSelect = document.querySelector('.menu__sort select')
        let selectedScoreOption = selectedScoreSelect.options[selectedScoreSelect.selectedIndex].value
        if (selectedScoreOption === 't1') {
            resultArr.sort((a, b) => a.tomato < b.tomato ? 1 : -1);
        } else if (selectedScoreOption === 't2') {
            resultArr.sort((a, b) => a.audience < b.audience ? 1 : -1);
        }

        render(resultArr)
    }

    const searchByYears = () => {

        resultArr = resultArr.filter((item) => {
            if (+item.year > +document.querySelector('.min-range').textContent &&
                +item.year < document.querySelector('.max-range').textContent) {
                return item
            }
        })
    }

    const searchByType = () => {

        let resultByType = resultArr.concat();
        let resultTVType = [];
        let resultMovieType = [];

        let tvCheckbox = false;
        let movieCheckbox = false;

        document.querySelectorAll('.menu__checkboxes input').forEach((checkbox, index) => {

            if (index < 1 && checkbox.checked) {
                resultTVType = resultByType.filter((item) => {
                    if (item.type.toLowerCase() === checkbox.value.toLowerCase()) {
                        return item
                    }
                })
                tvCheckbox = true;
            }
            if (index > 0 && checkbox.checked) {
                resultMovieType = resultByType.filter((item) => {
                    if (item.type.toLowerCase() === checkbox.value.toLowerCase()) {
                        return item
                    }
                })
                movieCheckbox = true;
            }
        })

        if (!tvCheckbox && !movieCheckbox) {
            return
        }

        resultArr = resultTVType.concat(resultMovieType)
    }


    const searchByParams = () => {

        resultArr = database.concat()

        searchByLabel()
        searchByType()
        searchByScores()
        searchByYears()
        searchByGenres()

        console.log(resultArr)

        render(resultArr)
    }



    searchByNameInput.addEventListener('change', () => {
        searchByName()

    })

    searchByLabelBtns.addEventListener('click', (e) => {
        searchByLabelAll.forEach(item => {
            item.classList.remove('active__label');
        })
        e.target.classList.add('active__label');

        searchByParams();
    })


    searchByParamsBlock.addEventListener('change', (e) => {

        searchByParams()

        if (e.target.matches('.menu__checkboxes input')) {
            //    searchByType();
        }



    })

    searchByScores()


}


