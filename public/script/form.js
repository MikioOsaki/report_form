jQuery(document).ready(function () {


    var selection_bathingspot = $("#selection_bathingspot");
    var url_string = window.location.href;
    var url = new URL(url_string);
    console.log(url);
    var spot = url.searchParams.get("spot");

    var lat = url.searchParams.get("lat");
    var lng = url.searchParams.get("lng");
    if (lat != null && lng != null) {

        $("#labelPosition").text("lat: " + lat + ", lng: " + lng);
    }
    else{
        $("#labelPosition").text("Keine Position ausgewählt");
    }


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