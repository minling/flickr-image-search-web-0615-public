$(document).ready(function(){
  
  //write your solution here...
  $('#search').on('click', function(){
    getSearchPhoto();
  })
    
});


function getSearchPhoto(){
    
    var keyword = $('#keyword').val()
    var flickrUrl = 'https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+ keyword +'&jsoncallback=?';

    $.ajax({
        url: flickrUrl,
        keyword: $('#keyword').val(),
        dataType: 'jsonp'
    }).done(function(data){
        // debugger
        $.each( data.photos.photo, function(i, photo){
            var farm = parseInt(photo.farm);
            var server = parseInt(photo.server)
            var id = parseInt(photo.id)
            var secret = photo.secret
            var imgurl = 'https://farm' + farm + '.staticflickr.com/' + server +'/'+ id +'_'+ secret +'.jpg'
            $('#feed').append("<img src ='" + imgurl +"'>")
            debugger;
        })
    })
//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
}
/*

API url: 

https://www.flickr.com/services/api/request.rest.html

AJAX request URLwith tags=cat (search term = cat):

https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=cat&jsoncallback=?

JSON Snippet:

jsonFlickrApi({
    "photos": {
        "page": 1,
        "pages": 46641,
        "perpage": 100,
        "total": "4664056",
        "photo": [
            {
                "id": "7790251192",
                "owner": "80992738@N00",
                "secret": "50b0af1b38",
                "server": "8440",
                "farm": 9,
                "title": "Friends",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0
            },

info about creating photo url from son data: http://www.flickr.com/services/api/misc.urls.html

http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

Example Test:

http://farm9.staticflickr.com/8440/7790251192_50b0af1b38.jpg

*/
