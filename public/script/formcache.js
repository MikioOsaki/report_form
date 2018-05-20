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


    function loadCache() {
        if (sessionStorage.getItem('spotID') != null) {
            spot.val(sessionStorage.getItem('spotID'));
        }
        if (sessionStorage.getItem('categoryID') != null) {
            category.val(sessionStorage.getItem('categoryID'));
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

    }

    function updateCache() {

        $(spot).change(function () {
            sessionStorage.setItem('spotID', spot.val());
            sessionStorage.setItem('spotName', $('#selection_bathingspot option:selected').text());
        });
        $(category).change(function () {
            sessionStorage.setItem('categoryID', category.val());
            sessionStorage.setItem('categoryName', $('#selection_category option:selected').text());
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

    }
});