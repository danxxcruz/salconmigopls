let date = '';
let time = '';
let food = '';

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
});

document.getElementById('dateSelectButton').addEventListener('click', function() {
    date = document.getElementById('datePicker').value;
    if (date) {
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'block';
    } else {
        alert('Please select a date.');
    }
});

document.querySelectorAll('#question3 button').forEach(button => {
    button.addEventListener('click', function() {
        time = button.value;
        document.getElementById('question3').style.display = 'none';
        document.getElementById('question4').style.display = 'block';
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
        const whatsappNumber = '1234567890'; // Replace with the actual number
        const message = `You said yes! We can go on ${date} at ${time}. I'll get ${food}.`;
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
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ffcc00', '#ff6699', '#ccff66', '#66ccff', '#ff99cc'];
    return colors[Math.floor(Math.random() * colors.length)];
}
