function up() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('up').style.opacity = 1;
    } else {
        document.getElementById('up').style.opacity = 0;
    }
}

window.onscroll = function() { up() };