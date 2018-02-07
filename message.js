var message = {
    create: function(msg){
        console.log('post message');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {
                message.list();
                // echo(this.responseText);
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
        xhttp.open("GET", URL + "/messages?last=" + length, true);
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
    remove: function(id){
        console.log('delete message');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {
                message.list();
                // echo(this.responseText);
            }
        };
        xhr.open("DELETE",  URL + "/messages/" + id, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", token.get());
        xhr.send();
    },
    echo: function(data){
        this.data = data;
        data = JSON.parse(data);
        this.print(data);
    },
    data: null,
    print: function(data) {
        var output = document.createElement('div');
        user.get_userid();
        // data = data.slice(length);
        for (var i = 0; i < data.length; i++){
            var div = document.createElement('div');
            div.className = 'message';

            var time = document.createElement('span');
            time.className = 'text';
            var formattedTime = formatTime(new Date(data[i].created_at));
            time.innerHTML = formattedTime;
            div.appendChild(time);

            var username = document.createElement('span');
            username.className = 'name';
            username.innerHTML = user.get_username(data[i].user_id);
            div.appendChild(username);

            if (data[i].user_id == user.id) {
                var span = document.createElement('span');
                var txt = document.createTextNode("\u00D7"); // 	\u270E
                span.dataset.message_id = data[i].id;
                span.className = "delete";
                span.onclick = function() {
                    console.log('click delete')
                    var div = this.parentElement;
                    div.style.display = "none";
                }
                span.appendChild(txt);
                div.appendChild(span);
            }

            var text = document.createElement('span');
            text.className = 'text';
            text.innerHTML = data[i].text;
            div.appendChild(text);
            output.appendChild(div);
        }
        chat(output.innerHTML);
    },
    length: length,
    pull: [] //todo: сделать опциональные запросы
}