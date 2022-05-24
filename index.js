// selectors
let newAdvice = document.getElementById('genAdvice');
const genBtn = document.getElementById('generator-btn');


// eventListeners
genBtn.addEventListener("click", renderAdvice);




// functions

function renderAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        newAdvice.innerHTML = `<q>${data.slip.advice}</q>`
    });
};
