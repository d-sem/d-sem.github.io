var form = {
    on: function (id){
        var el = this.get(id);
        if (el.style.display != 'block') {
            el.style.display = 'block';
        }
    },
    off: function (id){
        var el = this.get(id);
        if (el.style.display != 'none') {
            el.style.display = 'none';
        }

    },
    isVisible: function(id){
        return !!this.get(id).style.display;
    },
    get: function(id){
        return document.getElementById(id);
    },
    toggle: function (id) {
        var el = this.get(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}