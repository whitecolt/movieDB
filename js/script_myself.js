'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
    const movieDB = {
        movies: [
            "Звездные войны",
            "Яблоко ",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

const ad = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      background = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('.add'),
      addInput = document.querySelector('.adding__input'),
      checkbox = document.querySelector('[type = "checkbox"]')

const deleteAd = (arr) => {
    arr.forEach(item => item.remove())
}

const makeChanges = (genre, background) => {
    genre.textContent = "ДРАМА";
    background.style.backgroundImage = "url('img/bg.jpg')"

}

const sortArr = (arr) => {
    arr.sort();
}

const createMovieList = (films, parent) => {
    parent.innerHTML = "";
    sortArr(films)

    films.forEach((item,index) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${index+1}. ${item}
                <div class="delete"></div>
            </li>
        `
    })
    document.querySelectorAll('.delete').forEach((item, index) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(index, 1);
           
        })
    })
}


addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let newFilm = addInput.value;
        let favorite = checkbox.checked;

        if(newFilm) {

            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`
            }

            if (favorite){
                console.log("Добавляем любимый фильм")
            }
            movieDB.movies.push(newFilm)
            sortArr(movieDB.movies)
            createMovieList(movieDB.movies, movieList)
        }   
    
    })

deleteAd(ad)
makeChanges(genre, background)
createMovieList(movieDB.movies, movieList)
})