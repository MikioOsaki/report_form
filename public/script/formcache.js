jQuery(document).ready(function () {

    var inputs = $('#uploadForm :input');
    var spot = $('#selection_bathingspot');
    var category = $('#selection_category');
    var headline = $('#input_headline');
    var text = $('#textarea');
    var image = $('#reportImage');

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
            case "spot3":
                spot.val("Option 3");
                break;
            default:
                spot.val("Option 4");
                break;
        }
        sessionStorage.setItem('spot', spot.val());
    }

    if (sessionStorage.getItem('spot') != null) {
        spot.val(sessionStorage.getItem('spot'));
    }
    if (sessionStorage.getItem('category') != null) {
        category.val(sessionStorage.getItem('category'));
    }
    if (sessionStorage.getItem('headline') != null) {
        headline.val(sessionStorage.getItem('headline'));
    }
    if (sessionStorage.getItem('text') != null) {
        text.val(sessionStorage.getItem('text'));
    }
    if (sessionStorage.getItem('reportImage') != null) {
        reportImage.val(sessionStorage.getItem('reportImage'));
    }
    $(spot).change(function () {
        sessionStorage.setItem('spot', spot.val());
    });
    $(category).change(function () {
        sessionStorage.setItem('category', category.val());
    });
    $(headline).change(function () {
        sessionStorage.setItem('headline', headline.val());
    });
    $(text).change(function () {
        sessionStorage.setItem('text', text.val());
    });
    $(reportImage).change(function () {
        sessionStorage.setItem('reportImage', reportImage.val());
    });

});