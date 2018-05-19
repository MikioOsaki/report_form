jQuery(document).ready(function () {

    var inputs = $('#uploadForm :input');
    var spot = $('#selection_bathingspot');
    var category = $('#selection_category');
    var headline = $('#input_headline');
    var textarea = $('#textarea');
    var image_uploads = $('#image_uploads');
    
    var url_string = window.location.href;
    var url = new URL(url_string);
    var urlparam = url.searchParams.get("spot");
/**
 * Populate Selection input syntax: jQuery.getJSON( url [, data ] [, success ] )
 * getJSON is asynchronous !!!
 */
    $.getJSON("assets/Badegewaesser_Infrastruktur_v2.1.json", function (spots) {
        spots.forEach(function (element) {
            spot.append('<option value=' + element.id + '>' + element.name + '</option>');
        });
    });

    if (sessionStorage.getItem('lng') != null && sessionStorage.getItem('lat') != null) {
        $("#labelPosition").text("Sie haben folgende Position gewählt:");
        $('#lng').text("Längengrad: " + sessionStorage.getItem('lng'));
        $('#lat').text(", Breitengrad: " + sessionStorage.getItem('lat'));
        $('#locationpicker').text("Gewählte Position ändern");
    } else {
        $("#labelPosition").text("Keine Position ausgewählt");
    }

    if (sessionStorage.getItem('spot') == null) {

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
    if (sessionStorage.getItem('textarea') != null) {
        textarea.val(sessionStorage.getItem('textarea'));
    }
    if (sessionStorage.getItem('image_uploads') != null) {
        /**
         * image_uploads.val(sessionStorage.getItem('image_uploads'));
         * cannot be set due to security reasons.
         */
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
    $(textarea).change(function () {
        sessionStorage.setItem('textarea', textarea.val());
    });
    $(image_uploads).change(function () {
        sessionStorage.setItem('image_uploads', image_uploads.val());
    });

});