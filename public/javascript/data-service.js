var DataService = function(ajaxService, url) { 
     var Url = url;

    var data = []; 

    this.get_all = function (callback) {
        ajaxService.get(Url)
            .then(function(response) {
                response.forEach(function (games) {
                    data.push(games);
                })

                callback(response);
            })
    }
}