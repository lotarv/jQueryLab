//Функции для проверки полей формы
function usernameChecker(){
    var username = $("#username").val();
    // Проверка на наличие только латинских букв и цифр
    if (!isNaN(username[0])) {
        addError("Имя пользователя не может начинаться с цифры");
        $("#username").css('background-color', "tomato");

    }
    else {
        removeError("Имя пользователя не может начинаться с цифры");

    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        addError("Имя пользователя должно состоять только из латинских букв и цифр.");
        $("#username").css('background-color', "tomato");

    } else {
        removeError("Имя пользователя должно состоять только из латинских букв и цифр.");
    }

    // Проверка на отсутствие специальных символов, исключая цифры и кириллицу
    if (/[^a-zA-Z0-9]/.test(username)) {
        addError("Имя пользователя не должно содержать специальные символы.");
        $("#username").css('background-color', "tomato");

        
    } else {
        removeError("Имя пользователя не должно содержать специальные символы.");
    }

    if (username.length < 3 || username.length > 16) {
        addError("Имя пользователя должно содержать от 3 до 16 символов");
        $("#username").css('background-color', "tomato");
    }
    else {
        removeError("Имя пользователя должно содержать от 3 до 16 символов");

    }

    if (username.match(/^[a-zA-Z][a-zA-Z0-9]*$/) && !(username.length < 3 || username.length > 16)) {
        $("#username").css('background-color', 'hsl(214, 47%, 94%)')
    }


    
}

function passwordChecker(){
    let currentValue = $("#password").val();

    // Проверка длины пароля
    if (currentValue.length < 8) {
        addError("Длина пароля должна быть больше 8 символов!");
        $("#password").css('background-color', "tomato");

    } else {
        removeError("Длина пароля должна быть больше 8 символов!");
    }

    // Проверка наличия заглавной буквы
    if (!/[A-Z]/.test(currentValue)) {
        addError("Пароль должен содержать заглавную букву.");
        $("#password").css('background-color', "tomato");

    } else {
        removeError("Пароль должен содержать заглавную букву.");
    }

    // Проверка наличия цифры
    if (!/\d/.test(currentValue)) {
        addError("Пароль должен содержать цифру.");
        $("#password").css('background-color', "tomato");

    } else {
        removeError("Пароль должен содержать цифру.");
    }

    // Проверка наличия специального символа
    if (!/[@$!%*?&]/.test(currentValue)) {
        addError("Пароль должен содержать специальный символ.");
        $("#password").css('background-color', "tomato");

    } else {
        removeError("Пароль должен содержать специальный символ.");
    }

    // Проверка отсутствия кириллицы
    if (/[а-яА-Я]/.test(currentValue)) {
        addError("Пароль не должен содержать кириллицу.");
        $("#password").css('background-color', "tomato");

    } else {
        removeError("Пароль не должен содержать кириллицу.");
    }

    if (currentValue.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*[а-яА-Я]).{8,}$/
    )) {
        $("#password").css('background-color', "hsl(214, 47%, 94%)");
    }
}


function passwordAgainChecker(){
    let currentValue = $("#passwordAgain").val();
    //Проверка на совпадение с паролем
    if (currentValue != $("#password").val()){
        addError("Пароли должны совпадать!");
        $("#passwordAgain").css('background-color', 'tomato');
    }
    else {
        removeError("Пароли должны совпадать!");
        $("#passwordAgain").css('background-color', 'hsl(214, 47%, 94%)');

    }
    
}

function emailChecker(event){
    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    let currentValue = $("#email").val();
    if (!emailRegex.test(currentValue)){
        addError("Неверный формат email");
        $("#email").css("background-color", "tomato");
    }
    else {
        removeError("Неверный формат email");
        $("#email").css("background-color", "hsl(214, 47%, 94%)");

    }
}

function phoneChecker(){
    var PhoneRegex = /^(\+7|8)[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
    let currentValue = $("#phone").val();
    if (!PhoneRegex.test(currentValue)){
        addError("Номер телефона некорректен");
        $("#phone").css('background-color', 'tomato');

        
    }
    else {
        removeError("Номер телефона некорректен");
        $("#phone").css('background-color', 'hsl(214, 47%, 94%)');
        
    }

}


function nameChecker(){
    var nameRegex = /^[А-Яа-я]+(\s|-)[А-Яа-я]+(\s|-)[А-Яа-я]+$/;
    let currentValue = $("#fullname").val();
    if (!nameRegex.test(currentValue)){
        addError("Имя указано неверно");
        $("#fullname").css('background-color', 'tomato');
    }
    else {
        removeError("Имя указано неверно");
        $("#fullname").css('background-color', 'hsl(214, 47%, 94%)');
    }


}