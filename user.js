/*
 * Модуль взаимодействия с пользователями
 */

var user = {
    create: function (name, email, pass1, pass2){
        console.log('create user');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 422){
                    echo('Ошибка');
                }
                if (this.status == 201) {
                    echo('');
                    form.off('form-reg');
                    auth.login(email, pass1);
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
    },
    list: function() {
        console.log('get user list');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                user.create_pull(this.responseText);
            }
        };

        xhttp.open("GET", URL + "/users/", true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    },
    get_username: function(id) {
        console.log('get user');
        if (this.data[id]) {
            console.log('user exists - no xhr request');
            return this.data[id];
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('user get success');
                user.data[id] = JSON.parse(this.responseText).name;
            }

            if (this.readyState == 4 && this.status == 404) {
                console.log('user get fail');
                echo('пользователь не существует');
            }
        };
        xhttp.open("GET", URL + "/users/" + id, true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    },
    get_userid: function() {
        console.log('get user id');
        var id = localStorage.getItem('user_id');
        if (id) {
            this.id = id;
            console.log('user id exists');
            return id;
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                user.id = JSON.parse(this.responseText);
                localStorage.setItem('user_id', user.id);
                console.log('user id get success' + user.id);
            }

            if (this.readyState == 4 && this.status == 404) {
                console.log('user get fail');
                echo('пользователь не существует');
            }
        };
        xhttp.open("GET", URL + "/users?user_id=true", true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    },
    create_pull: function(data) {
        console.log('create pull');
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            var user_id = data[i].id;
            var user_name = data[i].name;
            user.data[user_id] = user_name;
        }
    },
    id: null,
    data: []
}