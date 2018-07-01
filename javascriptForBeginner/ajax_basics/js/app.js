//search-button
//// Create an alert when button is clicked
/// we will take the search string and return the wikipedia API.
$('.search-button').click(function (e){
    e.preventDefault();
    displayWikiData();
}) // we are binding a javascript function


var displayWikiData =  () => {

    var $linksElement = $('#links');
    var searchString = $('#searchString').val();

    var wikipediaUrl ='https://en.wikipedia.org/w/api.php?action=opensearch&search='
                    + searchString+'&format=json&callback=wikiCallback';

    $.ajax({
        url:wikipediaUrl,
        dataType:"jsonp",
        jsonp:"callback",
        success: function(res){
            var linkLists = res[1];
            console.log(linkLists);
            linkLists.forEach(function(item){
                var url = 'https://en.wikipedia.org/wiki/'+item;
                $linksElement.append('<li> <a href= " ' +url +'">'+ item+ '</a> </li>');
                return url;

            })
        }
    });

    return false;
}


// $('#form').submit(displayWikiData);


