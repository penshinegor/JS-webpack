import '../styles/main.scss';

var buttonSend = document.getElementById('button-send');

alert('Hello person. I want to ask you for some data and then display it');

let onButtonClick = function() {

    var firstName = document.getElementById('first-name').value;
    var secondName = document.getElementById('second-name').value;
    var dataBith = document.getElementById('data-of-bith').value;
    var selectCountry = document.getElementById('select').value;
    var genderChecked = function() {
        var gender = document.getElementsByName('gender');
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                return gender[i].value;
            }
        }
    }
    var email = document.getElementById('email').value;

    let isSure = confirm('Are you sure you entered everything correctly?');
    if (isSure) {
        var numberPhone = prompt('Almost forgot, enter phone number');
        alert(` Your firstname: ${firstName}\n Your secondname: ${secondName}\n You was born: ${dataBith}\n Country: ${selectCountry}\n Your gender: ${genderChecked()}\n Your email: ${email}\n Your phone: ${numberPhone}`);
    }
    else {
        alert('Correct and resubmit the data');
    }
}

buttonSend.addEventListener ('click', onButtonClick);
