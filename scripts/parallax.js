Array.prototype.forEach.call(document.querySelectorAll('.parallax'), function(elem) {
    elem.style.backgroundImage = 'url('+elem.getAttribute('data-parallax-image')+')';
})