// Confetti Effect
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiElements = [];
const numberOfConfetti = 300;

for (let i = 0; i < numberOfConfetti; i++) {
    confettiElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() * numberOfConfetti,
        color: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
        tilt: Math.floor(Math.random() * 5) - 5
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiElements.forEach((c, index) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fillStyle = c.color;
        ctx.fill();
        updateConfetti(c, index);
    });
}

function updateConfetti(c, index) {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(c.d);

    if (c.y > canvas.height) {
        confettiElements[index] = {
            x: Math.random() * canvas.width,
            y: -10,
            r: c.r,
            d: c.d,
            color: c.color,
            tilt: c.tilt
        };
    }
}

setInterval(drawConfetti, 1000 / 30);
// Play background music when the page loads
window.onload = () => {
    const backgroundMusic = document.getElementById('audio-background');
    backgroundMusic.play().catch(error => {
        console.error("Error playing audio:", error);
    });
};
