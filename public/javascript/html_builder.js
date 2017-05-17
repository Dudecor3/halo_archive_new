var HtmlBuilder = function () {    
    this.get_characters_html = function (character) {
        var html = "<div id='character' class='col-xs-12 col-sm-12 col-md-4 col-lg-3' >" +
                "<a id='dynamic_links' href='../dynamic_content/dynamic_content.html?char=" + character.name + "'>" +
                "<h4>"+ character.name +"</h4></a>"+
                "<img class='character_image' id='character_image' src='" + character.tab_image + "'>" +
                "<p>Race: "+ character.race +"</p>" +
                "<p>Appeared in: "+ character.appeared_in +"</p>" +
                "</div>";
                return html;
        };

    this.get_games_html = function (game) {
           var html = "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-4' id='games'>" +
                "<a id='dynamic_links' href='../dynamic_content/games_content.html?char=" + game.name + "'>"  +
                "<h1>" + game.name + "</h1></a>" +
                "<img src='" + game.tab_image + "'>" +
                "<p> Rating: "+ game.rating + "</p>" +
                "<p>Released: " + game.released + "</p>" +
                "<p>"+ game.description +"</p>" +
                "</div>";
                 return html;
        }

    this.get_dynamic_template = function (item) {
        var html = "<h1>" + item.name + " </h1>"
                return html;
    };
    
    this.get_typeahead_html = function (items) {
        var html = ""

        for (var item in items) {
            var name = items[item].name;
            html += '<a data-fullname="' + name + '" class="list-group-item">' + name + '</a>';
        }
        return html;
    }
}