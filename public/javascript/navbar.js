/**
 * Created by marcfreeman on 27/03/2017.
 */
$(document).ready(function () {
    // Select button
    var sideslider = $('[data-toggle=collapse-side]');
    // HTML Selectors.
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');

    // implement the collapsable menu.
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel).toggleClass('out');
    });
});