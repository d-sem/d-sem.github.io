var auth = {
    login: function(email, pass){
        console.log('login');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('login success');
                var response = JSON.parse(this.responseText);
                token.set(response.auth_token);
                auth.validate();
                form.off('form-auth');
                message.list();
            }
        };

        xhr.open("POST", URL + "/authenticate/", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var query = 'email=' + email + '&password=' + pass;

        xhr.send(query);
    },
    out: function(){
        token.remove();
        this.validate();
    },
    validate: function(){
        console.log('validate login');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('validate success');
                validate = true;
                checkLogin();
            }

            if (this.readyState == 4 && this.status == 401) {
                console.log('validate fail');
                validate = false;
                checkLogin();
            }
        };
        xhttp.open("GET", URL + "/messages?last=1", true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    }
}