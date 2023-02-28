window.scrollTo(0, 0);

new WOW().init();

var times = [6500, 6000, 6000, 6000, 6000, 6000,6000, 6000, 5000, 6000,
6000, 6000, 6000, 5500, 5500, 5500, 13000];

function play() {
    scroll();
    var iTime = 0;
    for (let i = 0; i < times.length; i++) {
        iTime = iTime + times[i];
        setTimeout(function () { scroll() }, iTime);
    }
    document.getElementById("audio").play();
}

var desiredOffset = 0;
function scroll() {
    const options = {
        speed: 150,
        minDuration: 550,
        maxDuration: 1500,
        element: window,
        cancelOnUserAction: true,
        onComplete: function () { }
    };

    desiredOffset += document.body.clientHeight;

    animateScrollTo(desiredOffset, options);

}
function replay() {
    desiredOffset = 0;
    window.scrollTo(0, 0);
    location.reload();
}