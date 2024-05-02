// ----------------------------preloader--------------------
setTimeout(() => {
    console.log("Delayed for 5 second.");
    document.getElementById("preloader").classList.add("opacity-0")
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow-hidden")
}, 5000);

// navbar
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}
// ----------------------------countdown---------------------
function countdown() {
    const endDate = new Date("2024-05-24 00:00:00").getTime();

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        if (distance < 0) {
            clearInterval(timer);
            document.querySelector('.counter').innerHTML = '<div>Expired</div>';
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

// -------------------count-down---------------------
function counterapp() {
    const endDate = new Date("2024-05-24 00:00:00").getTime();

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = endDate - now;

        const day = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = formatTime(day);
        document.getElementById("hour").innerHTML = formatTime(hour);
        document.getElementById("minute").innerHTML = formatTime(minute);
        document.getElementById("second").innerHTML = formatTime(second);

        if (distance < 0) {
            clearInterval(timer);
            document.querySelector('.counterapp').innerHTML = '<div>Expired</div>';
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

counterapp();
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

// ========slider=========
$('.responsive').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4.73,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4.50,
                infinite: true,
            }
        },
        {
            breakpoint: 1160,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3.80,
            }
        },
        {
            breakpoint: 905,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 783,
            settings: {
                slidesToShow: 2.80,
            }
        },
        {
            breakpoint: 675,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
$('.buying_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        },
    ]
});