//Функции для обновления списка ошибок
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



//Обработчик формы
$(document).ready(function(){
    $("#username").on('input',usernameChecker);
    $("#password").on('input', passwordChecker);
    $("#passwordAgain").on('input', passwordAgainChecker);
    $("#email").on('input', emailChecker);
    $("#phone").on('input', phoneChecker);
    $("#fullname").on('input', nameChecker);
    $(".form").on("submit", function(e){
        e.preventDefault();
        let flag = true;
        if ($("#username").val() == "") {
            $("#username").css('background-color', 'tomato');
            flag = false;
        }

        if ($("#password").val() == "") {
            $("#password").css('background-color', 'tomato');
            flag =  false;
        }

        if ($("#passwordAgain").val() == "") {
            $("#passwordAgain").css('background-color', 'tomato');
            flag =  false;
        }

        if (flag) this.submit();
        
    })
    
})