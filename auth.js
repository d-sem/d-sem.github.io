var auth = {
    login: function(email, pass){
        console.log('login');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                // console.dir(response);
                response = JSON.parse(response);
                // console.dir(response);
                // console.log(response.auth_token);
                token.set(response.auth_token);
                // document.getElementById("token").innerHTML = response.auth_token;
                // echo(response.auth_token);
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
        // document.getElementById("token").innerHTML = token.get();
    },
    validate: function(){
        console.log('click');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                validate = true;
                checkLogin();
            }

            if (this.readyState == 4 && this.status == 401) {
                validate = false;
                checkLogin();
            }
        };
        xhttp.open("GET", URL + "/users/", true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    }
}