(function (global) {
    "use strict";

    var forEach = [].forEach;

    function qs(elem) {
        if (!qs.cache) {
            qs.cache = {};
        }
        return qs.cache[elem] || (qs.cache[elem] = global.document.querySelector(elem));
    }

    function qsa(elem) {
        if (!qsa.cache) {
            qsa.cache = {};
        }
        return qsa.cache[elem] || (qsa.cache[elem] = global.document.querySelectorAll(elem));
    }

    function addEvent(selector, event, callback) {
        var $elems = qsa(selector);
        forEach.call($elems, function (elem, key) {
            elem.addEventListener(event, callback.bind(elem));
        });
    }

    function play(key) {
        const audio = qs(`audio[data-key="${key}"]`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }

    // lendo eventos do teclado
    addEvent('html', 'keydown', function (event) {
        play(event.keyCode);
    });

    // lendo eventos do click
    addEvent('.key', 'click', function (event) {
        play(this.dataset.key);
    });

})(this || window);

