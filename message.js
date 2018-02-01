var message = {
    create: function(msg){
        console.log('post message');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                echo(this.responseText);
            } else {
                echo('ошибка');
            }
        };
        xhr.open("POST",  URL + "/messages/", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", token.get());
        xhr.send('text=' + msg);
    },
    list: function(){
        console.log('messages-list');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                echo(this.responseText);
            }
        };
        xhttp.open("GET", URL + "/messages/", true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    },
    get: function(id){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                echo(this.responseText);
            }
        };
        xhttp.open("GET", URL + "/messages/" . id, true);
        xhttp.setRequestHeader("Authorization", token.get());
        xhttp.send();
    }
}