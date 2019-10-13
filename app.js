var textBox = {
    inputField : "user_input",
    submit : "user_submit",
    response : "response",

    evalTextField : function() {
        let user_input = this.getInput();
        var geval = eval;
        try {
            this.setResponse(geval(user_input));
        }
        catch(err) {
            this.setResponse(err.message, "red");
        }
        this.updateTextField("");
    },

    updateTextField : function(newString) {
        let input = document.getElementById(this.inputField);
        input.value = newString;
    },

    buttonHandler : function() {
        this.evalTextField();
    },

    getInput : function() {
        return document.getElementById(this.inputField).value;
    },

    setResponse : function(strVal, fontcolor="black") {
        document.getElementById(this.response).style.color = fontcolor;
        document.getElementById(this.response).innerHTML = strVal;
    }
}
