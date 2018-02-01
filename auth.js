var auth = {
    login: function(email, pass){
        console.log('login');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                console.dir(response);
                response = JSON.parse(response);
                console.dir(response);
                console.log(response.auth_token);
                token.set(response.auth_token);
                document.getElementById("token").innerHTML = response.auth_token;
                echo(response.auth_token);
            }
        };

        xhr.open("POST", URL + "/authenticate/", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var query = 'email=' + email + '&password=' + pass;

        xhr.send(query);
    }
}