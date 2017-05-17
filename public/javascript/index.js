var PeopleService = function () { 
    var searchUrl;
    var baseUrls = [
        '../JSON/halo-characters.json',
        '../JSON/halo-games.json' 
    ];

    this.search = function (query, callback) {
        if (query === '' || typeof query === 'undefined') {
            return;
        }

        for (var url in baseUrls) {
            searchUrl = baseUrls[url] + 'people?searchQuery=' + query;

            axios.get(baseUrls[url])
            .then(function(response) {
                callback(response.data);
            });
        }
    }
};

var peopleService = new PeopleService(); 
var htmlBuilder = new HtmlBuilder(); 

document.getElementById('search').addEventListener('keyup', function () {
    var query = document.getElementById('search').value; 
    var results = document.getElementById('results'); 

    results.innerHTML += ''; 

    peopleService.search(query, function (items) {
        if (items.length > 0) {
            results.innerHTML += htmlBuilder.get_typeahead_html(items);
            results.classList.remove('hidden');
        }

        document.querySelectorAll('.list-group-item').forEach(function(listItem) {
            listItem.addEventListener('click', onTypeaheadItemClick); 
        })
    })
})

var onTypeaheadItemClick = function (e) {
    e.preventDefault(); 
    var clickedName = e.target.getAttribute('data-fullname');
    document.getElementById('search').value = clickedName;
    document.getElementById('results').innerHTML = '';
    document.getElementById('results').classList.add('hidden');
};