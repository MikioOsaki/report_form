jQuery(document).ready(function () {

    var inputs = $('#uploadForm :input');
    var spot = $('#selection_bathingspot');
    var category = $('#selection_category');
    var headline = $('#input_headline');
    var text = $('#textarea');
    var url_string = window.location.href;
    var url = new URL(url_string);
    var lat = url.searchParams.get("lat"); 
    var lng = url.searchParams.get("lng"); 
    if (lat != null && lng != null) { 

        $("#labelPosition").text("lat: " + lat + ", lng: " + lng); 
    } else { 
        $("#labelPosition").text("Keine Position ausgewählt"); 
    }

    if (sessionStorage.getItem('spot') == null) {
      
        console.log(url);
        var urlparam = url.searchParams.get("spot");

        var lat = url.searchParams.get("lat");
        var lng = url.searchParams.get("lng");
        if (lat != null && lng != null) {

            $("#labelPosition").text("lat: " + lat + ", lng: " + lng);
        } else {
            $("#labelPosition").text("Keine Position ausgewählt");
        }

        switch (urlparam) {
            case "spot1":
                spot.val("Option 1");
                break;
            case "spot2":
                spot.val("Option 2");
                break;
            default:
                spot.val("Option 4");
                break;
        }
        sessionStorage.setItem('spot', spot.val());
    }

    if (sessionStorage.getItem('spot') != null) {
        $(selection_bathingspot).val(sessionStorage.getItem('spot'));
    }
    $(spot).change(function () {
        sessionStorage.setItem('spot', spot.val());
    });
    

});