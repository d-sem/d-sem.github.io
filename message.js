var message = {
    create: function(msg){
        console.log('post message');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {
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
                message.echo(this.responseText);
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
    },
    echo: function(data){
        this.data = data;
        data = JSON.parse(data);
        // echo(data)
        console.log((data))
        this.print(data);
    },
    data: null,
    print: function(data) {
        var output = document.createElement('div');
        for (var i = 0; i < data.length; i++){
            var div = document.createElement('div');
            div.className = 'message';

            var userId = document.createElement('p');
            userId.className = 'name';
            userId.innerHTML = data[i].user_id;
            div.appendChild(userId);

            var text = document.createElement('p');
            text.className = 'text';
            text.innerHTML = data[i].text;
            div.appendChild(text);
            output.appendChild(div);
        }
        // console.dir(output);
        echo(output.innerHTML);
    },
    pull: [],
}