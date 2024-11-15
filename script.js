let date = '';
let time = '';
let food = '';

document.addEventListener('DOMContentLoaded', function() {
    const datePicker = document.getElementById('datePicker');
    const today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);

    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
    window.scrollTo(0, 0);
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const question1 = document.getElementById('question1');
    // Cambiar la posición del botón "No"
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * 81 + 15}%`;
    noButton.style.left = `${Math.random() * 79 + 15}%`;
});

document.getElementById('dateSelectButton').addEventListener('click', function() {
    date = document.getElementById('datePicker').value;
    if (date) {
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'block';
        window.scrollTo(0, 0);
    } else {
        alert('Please select a date.');
    }
});

document.querySelectorAll('#question3 button').forEach(button => {
    button.addEventListener('click', function() {
        time = button.value;
        document.getElementById('question3').style.display = 'none';
        document.getElementById('question4').style.display = 'block';
        window.scrollTo(0, 0);
    });
});

document.getElementById('otherFoodButton').addEventListener('click', function() {
    const otherFoodInput = document.getElementById('otherFoodInput').value.trim();
    if (otherFoodInput) {
        food = otherFoodInput;
        showCongratulations();
    } else {
        alert('Please enter a food choice.');
    }
});

document.querySelectorAll('#question4 button').forEach(button => {
    button.addEventListener('click', function() {
        food = button.value;
        showCongratulations();
    });
});

function showCongratulations() {
    document.getElementById('question4').style.display = 'none';
    document.getElementById('congratulations').style.display = 'block';
    createConfetti();
    setTimeout(() => {
        const whatsappNumber = '+5358778090'; // Replace with the actual number
        const message = `Vale, vamos a salir! Podemos ir el ${date} en la ${time}. Vamos a por ${food}.`;
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.location.href = whatsappLink;
    }, 2000);
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-particle');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `-${Math.random() * 10}vh`; // Generar desde arriba de la pantalla
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ffcc00', '#ff6699', '#ccff66', '#66ccff', '#ff99cc'];
    return colors[Math.floor(Math.random() * colors.length)];
}