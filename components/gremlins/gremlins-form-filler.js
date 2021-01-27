(function () {
    function callback() {
        gremlins.createHorde().gremlin(gremlins.species.formFiller()).unleash()
    }
    var s = document.createElement("script");
    s.src = "https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js";
    if (s.addEventListener) {
        s.addEventListener("load", callback, false)
    } else if (s.readyState) {
        s.onreadystatechange = callback
    }
    document.body.appendChild(s);
})()