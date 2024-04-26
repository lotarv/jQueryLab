const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordAgainInput = document.getElementById("passwordAgain");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const fullnameInput = document.getElementById("fullname");
const dateInput = document.getElementById("date");
const facultyInput = document.getElementById("faculty");
const subfacultyInput = document.getElementById("subfaculty");


usernameInput.addEventListener('input', () => usernameChecker());
passwordInput.addEventListener('input', () => passwordChecker());
passwordAgainInput.addEventListener('input', event => passwordAgainChecker(event));
emailInput.addEventListener('input', () => emailChecker());
phoneInput.addEventListener('input', () => phoneChecker());
function usernameChecker(){
    let currentValue = usernameInput.value;
    // Проверка на наличие только латинских букв и цифр
    if (!/^[a-zA-Z0-9]+$/.test(currentValue)) {
        addError("Имя пользователя должно состоять только из латинских букв и цифр.");
        usernameInput.style.backgroundColor = "tomato";
    } else {
        removeError("Имя пользователя должно состоять только из латинских букв и цифр.");
    }

    // Проверка на отсутствие специальных символов, исключая цифры и кириллицу
    if (/[^a-zA-Z0-9]/.test(currentValue)) {
        addError("Имя пользователя не должно содержать специальные символы.");
        usernameInput.style.backgroundColor = "tomato";
    } else {
        removeError("Имя пользователя не должно содержать специальные символы.");
    }
    if (errors.children.length == 0) {
        usernameInput.style.backgroundColor = "var(--defaultColor)";
    }
}

function passwordChecker(){
    let currentValue = passwordInput.value;

    // Проверка длины пароля
    if (currentValue.length < 8) {
        addError("Длина пароля должна быть больше 8 символов!");
        passwordInput.style.backgroundColor = "tomato";
    } else {
        removeError("Длина пароля должна быть больше 8 символов!");
    }

    // Проверка наличия заглавной буквы
    if (!/[A-Z]/.test(currentValue)) {
        addError("Пароль должен содержать заглавную букву.");
        passwordInput.style.backgroundColor = "tomato";
    } else {
        removeError("Пароль должен содержать заглавную букву.");
    }

    // Проверка наличия цифры
    if (!/\d/.test(currentValue)) {
        addError("Пароль должен содержать цифру.");
        passwordInput.style.backgroundColor = "tomato";
    } else {
        removeError("Пароль должен содержать цифру.");
    }

    // Проверка наличия специального символа
    if (!/[@$!%*?&]/.test(currentValue)) {
        addError("Пароль должен содержать специальный символ.");
        passwordInput.style.backgroundColor = "tomato";
    } else {
        removeError("Пароль должен содержать специальный символ.");
    }

    // Проверка отсутствия кириллицы
    if (/[а-яА-Я]/.test(currentValue)) {
        addError("Пароль не должен содержать кириллицу.");
        passwordInput.style.backgroundColor = "tomato";
    } else {
        removeError("Пароль не должен содержать кириллицу.");
    }

    // Если все условия выполнены, сброс фона
    if (errors.children.length == 0) {
        passwordInput.style.backgroundColor = "var(--defaultColor)";
    }
    passwordAgainChecker();
}


function passwordAgainChecker(){
    let currentValue = passwordAgainInput.value;
    //Проверка на совпадение с паролем
    if (currentValue != passwordInput.value){
        addError("Пароли должны совпадать!");
        passwordAgainInput.style.backgroundColor = "tomato";
    }
    else {
        removeError("Пароли должны совпадать!");
        passwordAgainInput.style.backgroundColor = "var(--defaultColor)";
    }
    passwordChecker()
}

function emailChecker(event){
    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    let currentValue = emailInput.value;
    if (!emailRegex.test(currentValue)){
        addError("Неверный формат email");
        emailInput.style.backgroundColor = "tomato";
    }
    else {
        removeError("Неверный формат email");
        emailInput.style.backgroundColor = "var(--defaultColor)"
    }
}

function phoneChecker(){
    var PhoneRegex = /^(\+7|8)[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
    let currentValue = phoneInput.value;
    if (!PhoneRegex.test(currentValue)){
        addError("Номер телефона некорректен");
        phoneInput.style.backgroundColor = "tomato";
    }
    else {
        removeError("Номер телефона некорректен");
        phoneInput.style.backgroundColor = "var(--defaultColor)"
    }

}