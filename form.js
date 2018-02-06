var form = {
    on: function (id){
        var el = document.getElementById(id);
        if (el.style.display != 'block') {
            el.style.display = 'block';
        }
    },
    off: function (id){
        var el = document.getElementById(id);
        if (el.style.display != 'none') {
            el.style.display = 'none';
        }

    },
    toggle: function (id) {
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}