var token = {
    id: 'token',
    key: 'token',
    get: function(){
        return localStorage.getItem(this.key);
    },
    echo: function(){
        document.getElementById(this.id).innerHTML = this.get();
    },
    remove: function(){
        localStorage.removeItem(this.key);
    },
    set: function(value){
        localStorage.setItem('token', value);
    }
}