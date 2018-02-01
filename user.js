var user = {
    create: function (name, email, pass1, pass2){
        console.log('create user');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 422){
                    echo('имя занято');
                }
                if (this.status == 201) {
                    echo('пользователь зарегистрирован');
                }
            }
        };
        xhr.open('POST', URL + '/users/', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var query = 'name=' + name +
                    '&email=' + email +
                    '&password=' + pass1 +
                    '&password_confirmation=' + pass2;

        xhr.send(query);
        // xhr.send('name=testman1&email=mail1@mail.com&password=123123&password_confirmation=123123');

    },
    list: function (){
        console.log('click');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                echo(this.responseText);
            }
        };
        xhttp.open("GET", URL + "/users/", true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    }
}