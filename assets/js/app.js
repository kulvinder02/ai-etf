// navbar
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}
// countdown
// Function to start the countdown timer
function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = parseInt(timer / (3600 * 24), 10);
        hours = parseInt((timer % (3600 * 24)) / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Start the countdown timer when the page loads
window.onload = function () {
    // Change the duration as per your requirement (in seconds)
    startCountdown(296400); // 1 day countdown (24 hours * 60 minutes * 60 seconds)
};

countdown();
//  -------------------form validation------------------------------
function validateForm() {
    var firstName = document.getElementById('firstname').value.trim();
    var lastName = document.getElementById('lastname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();

    var isValid = true;

    // First Name validation
    var firstNameError = document.getElementById('firstnameError');
    if (!firstName) {
        firstNameError.textContent = 'First Name is required';
        isValid = false;
    } else {
        firstNameError.textContent = '';
    }

    // Last Name validation
    var lastNameError = document.getElementById('lastnameError');
    if (!lastName) {
        lastNameError.textContent = 'Last Name is required';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }

    // Email validation
    var emailError = document.getElementById('emailError');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Phone Number validation
    var phoneError = document.getElementById('phoneError');
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Invalid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    return isValid;
}

// slider---
$('.responsive').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4.73,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
