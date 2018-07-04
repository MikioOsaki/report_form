jQuery(document).ready(function () {

    var spot = $('#selection_bathingspot');
    var category = $('#selection_category');

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
    $.getJSON("assets/report_categories.json", function (categories) {
        categories.forEach(function (element) {
            category.append('<option value=' + element.id + '>' + element.name + '</option>');
        });
    });

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

});