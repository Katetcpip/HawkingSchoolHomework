const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");


searchInput.addEventListener('change', function(event) {
    event.preventDefault();
    const value = event.target.value;
    try {
        if (isNaN(value)) {
            throw new Error('isnt number, try again!')
        }
        if (value < 5) {
            throw new Error('value must be above 5')
        }
        if (value > 10) {
            throw new Error('value must be below 10')
        }

    } catch (err) {
        console.log(err);
        resultsContainer.innerHTML = `<div class="response-container"> ${err} </div>`
    }

})