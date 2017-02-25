(function () {
    var editor, session, inputElement;

    /**
     * Filters out unwanted annotations (e.g. warning about doctype) due to common
     * case is the HTML being edited is not a full HTML document but a piece of HTML.
     */
    var filterAnnotation = function () {
        var annotations = session.getAnnotations() || [], i = len = annotations.length;

        while (i--) {
            if (/doctype first\. Expected/.test(annotations[i].text)) {
                annotations.splice(i, 1);
            }
        }

        if (len > annotations.length) {
            session.setAnnotations(annotations);
        }
    };

    /**
     * Initialises Ace editor.
     */
    var initialise = function () {
        editor = ace.edit('editor'),
        session = editor.getSession(),
        inputElement = document.querySelector('#Text');

        editor.setTheme('ace/theme/monokai');
        editor.setShowPrintMargin(false);

        session.setMode('ace/mode/html');
        session.setUseWrapMode(true);

        session.on('changeAnnotation', filterAnnotation);
        session.on('change', update);
    };
    
    /**
     * Updates hidden HTML input with latest content from Ace editor.
     */
    var update = function () {
        inputElement.value = session.getValue();
    };

    document.addEventListener('DOMContentLoaded', initialise);
})();