var Options = (function () {

  // Private Methods:
    var showClass = function(className, isVisible) {
        el = document.getElementsByClassName(className);
        for (i = 0; i < el.length; i++) {
            if (isVisible) {
                el[i].style.display = 'initial';
            } else {
                el[i].style.display = 'none';
            }
        }
    };

  // Public Methods
    var changeOption = function(element) {
        var className = element.id.split("_")[1];
        var showDef = element.checked;
        if (showDef) {
            showClass(className, true);
        } else {
            showClass(className, false);
        }
    };

    return {
      // Register all public methods here
        changeOption: changeOption
    }

})();
