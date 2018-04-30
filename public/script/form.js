jQuery(document).ready(function () {


    var selection_bathingspot = $("#selection_bathingspot");
    var url_string = window.location.href;
    var url = new URL(url_string);
    console.log(url);
    var spot = url.searchParams.get("spot");

    
    switch (spot) {
        case "spot1":
        selection_bathingspot.val("Option 1");
            break;
        case "spot2":
            selection_bathingspot.val("Option 2");
            break;
        default:
            selection_bathingspot.val("Option 4");
            break;
    }


});