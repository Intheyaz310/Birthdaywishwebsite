document.getElementById('blowCandles').addEventListener('click', function() {
    const candles = document.querySelectorAll('.candle');
    const balloons = document.querySelectorAll('.balloon');

    // Blow out the candles
    candles.forEach(candle => {
        candle.classList.add('blown');
    });

    // Make balloons float up
    balloons.forEach((balloon, index) => {
        setTimeout(() => {
            balloon.classList.add('float');
        }, index * 200); // Staggered animation
    });

    // After a delay, redirect to the wishes page
    setTimeout(() => {
        window.location.href = "wishes.html"; // Change this to your wishes page
    }, 100); // Change the delay to your desired time (4000 ms = 4 seconds)
});

