const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const searchForm = document.querySelector(".js-form");

const loadBtn2 = document.querySelector(".js-load-2");
const resultsContainer2 = document.querySelector(".js-results-2");
const searchInput2 = document.querySelector(".js-input-2");
const searchForm2 = document.querySelector(".js-form-2");




searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

loadBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();

    if (searchValue) {
        fetch(`https://api.github.com/users/${searchValue}`)
            .then(resp => {
                if (!resp.ok) {
                    throw Error(`isn't okay bro: ` + resp.status);
                }
                return resp.json();
            })
            .then((data) => {
                resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                 <p> О себе: <span>${data.bio}</span><p>
                 <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
             </div>`
            })

        .catch((err) => {
            console.warn(err)
            resultsContainer.innerHTML = `<div class="response-container">
          No such user, try again, bro! 
        </div>`
        })
    }

})





const returnHTML = (data) => {
    return (`<div class="response-container2">
                 <p> Имя: <span>${data.name}</span><p>
                 <p> Никнейм: <span>${data.username}</span><p> 
                 <p> Сайт: <span>${data.website}</span><p>
                 <p> Компания: <span>${data.company.name}</span><p>
             </div>`

    )
}


searchForm2.addEventListener("submit", function(event) {
    event.preventDefault();
});

loadBtn2.addEventListener("click", function(event) {
    event.preventDefault();
    resultsContainer2.innerHTML = ''

    const searchValue2 = searchInput2.value.trim().toLowerCase();


    axios.get(`https://jsonplaceholder.typicode.com/users/${searchValue2}`)
        .then(resp => resp.data)
        .then((data) => {

            if (!data.length) {
                resultsContainer2.innerHTML = returnHTML(data)
            }

            for (let i = 0; i < data.length; i++) {
                resultsContainer2.innerHTML += returnHTML(data[i])
            }

        })

    .catch((err) => {
        console.warn(err)
        resultsContainer2.innerHTML = ' No such id, try again, bro!  '
    })


})