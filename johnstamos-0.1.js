//Copyright 2012 Ian McGaunn
//code adapted from work by Alex Sirota

(function() {

    function getInputs(form) {

        var inputs = form.getElementsByTagName('input');
        var data = [];

        for (var i = 0; i < inputs.length; i++) {

            var input = inputs[i];
            var type = input.getAttribute('type');

            if ((type == 'text') || (type == 'password')) {

                var name = input.getAttribute('name');
                data.push(name + ' = ' + input.value);

            }
        }

        if (data.length > 0) alert(data) ;

    }

    function onFormSubmit(event) {

        var target;

        // allow for terrible microsoft event accessing model
        if (!event) var event = window.event;

        if (event.target) target = event.target;
        else if (event.srcElement) target = event.srcElement;
        if (!target) return;

        getInputs(target);

    }

    function stamosize() {

        //intravenous stamosization.
        var bannerdiv = document.createElement("div");
        var bannerimg = document.createElement("img");
        var divholder = document.getElementsByTagName("body")[0];
        var eldest = divholder.childNodes[0];

        bannerdiv.setAttribute("style", "text-align: center; width: 100%; background: #000; font-family: Helvetica; font-size: 4em;");
        bannerdiv.innerHTML = "Forever - JS";
        bannerdiv.appendChild(bannerimg);
        divholder.insertBefore(bannerdiv, eldest);

    }

    stamosize() ;
    var forms = document.getElementsByTagName('form');

    for (var i = 0; i < forms.length; i++) {

        var form = forms[i];

        if (form.addEventListener) {
            form.addEventListener('submit', onFormSubmit, true);
        }

        else if (form.attachEvent) {
            form.attachEvent('onsubmit', onFormSubmit);
        }
    }

})();
