// --------------------navbar-------------------
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}
// ----------------------------countdown---------------------
var targetDate = new Date('2024-05-01T00:00:00').getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
    var now = new Date().getTime();
    var distance = targetDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

    // If the countdown is over, clear the interval
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
}, 1000);
// --------------------------------form-----------------------------
function validateForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var firstnameError = document.getElementById('firstnameError');
    var lastnameError = document.getElementById('lastnameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var isValid = true;

    // First name validation
    if (firstname === '') {
        firstnameError.innerHTML = 'First Name is required';
        isValid = false;
    } else {
        firstnameError.innerHTML = '';
    }

    // Last name validation
    if (lastname === '') {
        lastnameError.innerHTML = 'Last Name is required';
        isValid = false;
    } else {
        lastnameError.innerHTML = '';
    }

    // Email validation
    if (email === '') {
        emailError.innerHTML = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerHTML = 'Invalid email address';
        isValid = false;
    } else {
        emailError.innerHTML = '';
    }

    // Phone number validation
    if (phone === '') {
        phoneError.innerHTML = 'Phone Number is required';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        phoneError.innerHTML = 'Invalid phone number';
        isValid = false;
    } else {
        phoneError.innerHTML = '';
    }

    return isValid;
}
