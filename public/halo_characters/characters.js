/**
 * Created by Marc on 04/04/2017.
 */
var characterHtml = new HtmlBuilder();
var characterService = new DataService(new AjaxService(), "../JSON/halo-characters.json");

characterService.get_all(function (all_characters) {
    var allUnscTag = document.getElementById("unsc_characters"),
        allCovenenantTag = document.getElementById("covenant_characters"),
        allForerunnerTag = document.getElementById("forerunner_characters"),
        allOthersTag = document.getElementById("other_characters");
    
    var unsc = [],
        covenant = [],
        forerunner = [],
        other = [];
    console.log("All characters retrieved!");
    all_characters.forEach(function (character) {
        if (character.faction === "UNSC") {
            var unscCharacter = character;
            unsc.push(unscCharacter);
        }
        if (character.faction === "Covenant") {
            var covenantCharacter = character; 
            covenant.push(covenantCharacter);
        }
        if (character.faction === "Forerunner") {
            var forerunnerCharacter = character; 
            forerunner.push(forerunnerCharacter);
        }
        if (character.faction === "Other") {
            var otherCharacter = character;
            other.push(otherCharacter);
        }
    });
    unsc.forEach(function (character) {
        allUnscTag.innerHTML += characterHtml.get_characters_html(character);
    });
    covenant.forEach(function (character) {
        allCovenenantTag.innerHTML += characterHtml.get_characters_html(character);
    })
    forerunner.forEach(function (character) {
        allForerunnerTag.innerHTML += characterHtml.get_characters_html(character);
    })
    allOthersTag.innerHTML += characterHtml.get_characters_html(other);
})

