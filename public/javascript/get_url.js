var GetUrlInfo = function () {
        this.getUrlParameter = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? " " : decodeURIComponent(results[1].replace(/\+/g, " "));
    }    
}