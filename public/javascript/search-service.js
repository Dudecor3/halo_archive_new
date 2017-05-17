var SearchService = function (ajaxService) {
    var Urls = [
        "../JSON/halo-games.json",
        "../JSON/halo-characters.json"
    ];
    var data = [];

    this.get_all = function (callback) {
        Urls.forEach(function (url) {
            ajaxService.get(url)
                .then(function(response) {
                    response.forEach(function (item) {
                        data.push(item);
                })
                callback(response);
            })
        })
    }
}