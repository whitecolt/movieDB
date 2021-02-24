

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




const sortArr = (array) => {
    array.sort();
    
}

const ad = document.querySelectorAll(".promo__adv"),
      genre = document.querySelector(".promo__genre"),
      background = document.querySelector(".promo__bg"),
      form = document.querySelector('form.add'),
      addInput = form.querySelector('.adding__input'),
      checkbox = form.querySelector('[type = "checkbox"]'),
      filmsList = document.querySelector(".promo__interactive-list");
      


 function createMovieList(films, parent) {
        parent.innerHTML = ""
    
        films.forEach((item, index) => {
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
    
const deleteAdv = (arr) => {
    arr.forEach(item => item.remove())
}




  form.addEventListener('submit', (e) => {
    e.preventDefault()
   
    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    
        createMovieList(movieDB.movies, filmsList);
        
    }
    e.target.reset() 
})


const makeChanges = () => {
    genre.textContent = "ДРАМА"
    background.style.backgroundImage = 'url("img/bg.jpg")'
}



deleteAdv(ad)
makeChanges()
sortArr(movieDB.movies)
createMovieList(movieDB.movies, filmsList)

})







