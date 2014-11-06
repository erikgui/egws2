(function() {

    'use strict';

    var viewportWidth;
    var viewportHeight;
    var _scrollY = 0,
        _ticking = false;

    function onScroll() {
        _scrollY = window.scrollY;
        requestTick();
    }

    function onResize() {
        setViewportDimensions();
    }

    function onLoad() {
        setViewportDimensions();
        onScroll();
        update();
    }

    function setViewportDimensions() {
        viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    function requestTick() {
        if (!_ticking) {
            requestAnimationFrame(update);
            _ticking = true;
        }
    }

    function update() {
        document.querySelector('.dawn').style.opacity = Math.max(0, (viewportHeight - _scrollY)/(viewportHeight));
        document.querySelector('.day').style.opacity = Math.max(0, (viewportHeight*2 - _scrollY)/(viewportHeight*2));
        document.querySelector('.dusk').style.opacity = Math.max(0, (viewportHeight*4 - _scrollY)/(viewportHeight*4));
        _ticking = false;
    }

    window.addEventListener('scroll', onScroll, false);
    window.addEventListener('resize', onResize, false);
    window.addEventListener('load', onLoad, false);

})();
