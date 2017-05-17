var games_html = new HtmlBuilder();
var gameService = new DataService(new AjaxService(), "../JSON/halo-games.json");
var print_to_html = document.getElementById("game_content");

gameService.get_all(function(all_games) {
    console.log("All games retrived!");
    all_games.forEach(function (game) {
        print_to_html.innerHTML += games_html.get_games_html(game);
    });
});