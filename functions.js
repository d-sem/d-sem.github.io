function echo(msg) {
    document.getElementById("demo").innerHTML = msg;
}

function chat(msg) {
    document.getElementById("chat").innerHTML = msg;
}



function isEmpty(str) {
    return (!str || 0 === str.length);
}


function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}

function checkLogin()
{
    console.log('check login...')
    if (validate) {
        console.log('validate ok');
        message.list();
        button.off('auth');
        button.off('reg');
        button.on('out');
        button.on('get-users');
        button.on('get-messages');
        form.on('post-message');
        message.list()
    } else {
        console.log('validate not ok');
        button.on('auth');
        button.on('reg');
        button.off('get-users');
        button.off('get-messages');
        button.off('out');
        form.off('post-message');
        chat('');
    }

}




