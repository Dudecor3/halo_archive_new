var searchService = new SearchService(new AjaxService);
var getUrlInfo = new GetUrlInfo();
var dynamic_html = new HtmlBuilder();
var dynamicContentTag = document.getElementById("show_dynamic_content");

console.log("page is connected");

searchService.get_all(function (all_halo) {
    all_halo.forEach(function (item) {
        if (getUrlInfo.getUrlParameter("char") === item.name) {
            dynamicContentTag.innerHTML += dynamic_html.get_dynamic_template(item);
        }
    })
})