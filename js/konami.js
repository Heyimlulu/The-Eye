var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], // code combination
    n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
            openModal();

            var number = parseInt($('.seconds').text());
            $('.seconds').text(number--); // Decrement 1 before interval

            var interval = setInterval(
                function() {
                    $('.seconds').text(number--); // Decrement number variable by 1 each seconds
                }, 1000);

            setTimeout(
                function() {
                    closeModal(); // Close credits window
                    clearInterval(interval); // Stop interval
                    $('.seconds').text(20); // Reset value to 20 (seconds)
                }, 20000);
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});
function openModal() {
    document.getElementById("credits").style.display = "block";
}
function closeModal() {
    document.getElementById("credits").style.display = "none";
}