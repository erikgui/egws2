(function() {

    'use strict';

    var viewportWidth;
    var viewportHeight;
    var lastScrollY = 0,
        ticking = false;

    function onScroll() {
        lastScrollY = window.scrollY;
        requestTick();
    }

    function onResize() {
        setViewportDimensions();
    }

    function onLoad() {
        setViewportDimensions();
    }

    function setViewportDimensions() {
        viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    function update() {
        document.querySelector('.dawn').style.opacity = Math.max(0, (viewportHeight - lastScrollY)/(viewportHeight));
        document.querySelector('.day').style.opacity = Math.max(0, (viewportHeight*2 - lastScrollY)/(viewportHeight*2));
        document.querySelector('.dusk').style.opacity = Math.max(0, (viewportHeight*4 - lastScrollY)/(viewportHeight*4));
        ticking = false;
    }

    window.addEventListener('scroll', onScroll, false);
    window.addEventListener('resize', onResize, false);
    window.addEventListener('load', onLoad, false);

})();
