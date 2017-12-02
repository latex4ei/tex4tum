var Options = (function () {

    // list of options
    var lstOptions =     ["definition", "example", "legend"];
    var defaultOptions = [ true       , true     , false   ];

    var VERSION_STRING = "0.01";

    // Private Methods:
    var showClass = function(className, isVisible) {
        el = document.getElementsByClassName(className);
        for (i = 0; i < el.length; i++) {
            if (isVisible) {
                el[i].style.display = 'block';
            } else {
                el[i].style.display = 'none';
            }
        }
    };

    var setCookie = function (key, value, expiredays) {
        var d = new Date();
        d.setTime(d.getTime() + (expiredays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }

    var getCookie = function (key) {
        var name = key + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    var checkFirstVisit = function () {
        if(getCookie('version') != VERSION_STRING){
            for(var i = 0; i < lstOptions.length; i++) {
                setCookie(lstOptions[i], defaultOptions[i], 14);
            }
            setCookie('version', VERSION_STRING, 60);
        }
    }

  // Public Methods
    var changeOption = function(element) {
        var className = element.id.split("_")[1];

        showClass(className, element.checked);     // set visibility
        setCookie(className, element.checked, 60)  // save cookie

    };

    var loadOptions = function() {
        checkFirstVisit();
        for(var i = 0; i < lstOptions.length; i++) {
            var curOption = lstOptions[i];
            var state = (getCookie(curOption) == 'true');
            showClass(curOption, state);     // set visibility

            cbox = document.getElementById("checkbox_"+curOption);
            cbox.checked = state;
        }
    };

    return {
      // Register all public methods here
        changeOption: changeOption,
        loadOptions: loadOptions
    }

})();
