jQuery(document).ready(function () {

    var inputs = $('#uploadForm :input');
    var spot = $('#selection_bathingspot');
    var category = $('#selection_category');
    var headline = $('#input_headline');
    var textarea = $('#textarea');
    var image_uploads = $('#image_uploads');
    var firstname = $('#input_firstname');
    var lastname = $('#input_lastname');
    var email = $('#input_email');
    var phone = $('#input_phone');
    var checkbox_send_copy = $('#checkbox_send_copy');

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
        if (sessionStorage.getItem('spotID') == null) {
            selectSpotByUrlParam();
            sessionStorage.setItem('spotID', urlparam);
        } else {
            loadCache();
        }
    });
    $.getJSON("assets/report_categories.json", function (categories) {
        categories.forEach(function (element) {
            category.append('<option value=' + element.id + '>' + element.name + '</option>');
        });
        loadCache();
    });

    updateCache();
    updateLocationLable();

    function updateLocationLable() {
        if (sessionStorage.getItem('lng') != null && sessionStorage.getItem('lat') != null) {
            $("#labelPosition").text("Sie haben folgende Position gewählt:");
            $('#lng').text("Längengrad: " + sessionStorage.getItem('lng'));
            $('#lat').text(", Breitengrad: " + sessionStorage.getItem('lat'));
            $('#locationpicker').text("Gewählte Position ändern");
        } else {
            $("#labelPosition").text("Keine Position ausgewählt");
        }
    }

    function selectSpotByUrlParam() {
        if (urlparam != undefined) {
            spot.val(urlparam);
            sessionStorage.setItem('spotID', spot.val());
            sessionStorage.setItem('spotName', $('#selection_bathingspot option:selected').text());
        }
    }
});