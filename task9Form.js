document.querySelector('.form').addEventListener('click', event => event.stopPropagation());


const errors = document.querySelector('.errors');


function addError(message){
    if (!existsError(message)){
        const new_error = document.createElement('li');
        new_error.textContent = message;
        errors.appendChild(new_error);
    }
    return
}

function removeError(message){
    Array.from(errors.children).forEach(error => { if (error.textContent === message) errors.removeChild(error)})
}

function existsError(message){
    for (let error of Array.from(errors.children)){
        if (error.textContent == message) return true
    }
    return false;
}