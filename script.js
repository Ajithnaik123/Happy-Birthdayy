function showBirthday() {
    // Music play logic - first click thone start avthundi
    const song = document.getElementById('bdaySong');
    song.play().catch(error => console.log("Playback failed:", error));

    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function showFunnyMessage() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
}

function showCake() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden');

    const flames = document.querySelectorAll('.flame');
    const statusText = document.getElementById('status-text');

    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add('active');
            if(index === flames.length - 1) {
                statusText.innerHTML = "Happy Birthday Priya! 🎉";
                finalCelebration();
            }
        }, (index + 1) * 1000);
    });
}

function finalCelebration() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
          clearInterval(interval);
          showFinalQuote(); // Show quotes after confetti
          return;
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function showFinalQuote() {
    const quotes = [
        "To the girl who brings so much light into the lives of everyone, Happy Birthday Bhanu Priya! 🌟",
        "Wishing you a year filled with love, laughter, and endless joy. You deserve the best! ❤️",
        "Stay as wonderful as you are. May all your dreams come true! ✨"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    setTimeout(() => {
        document.getElementById('step4').classList.add('hidden');
        document.getElementById('step5').classList.remove('hidden');
        document.getElementById('quote-text').innerText = randomQuote;
    }, 1500);
}