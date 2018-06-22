jQuery(document).ready(function () {

    var formName = "Report From";
    var input1 = {
        id: "subject",
        type: "text",
        class: "text",
        lable: true
    };

    var $log = $("#log"),
        str = "hello, hello, hello, <b>my name is</b> jQuery.",
        html = $.parseHTML(str),
        nodeNames = [];

    // Append the parsed HTML
    $log.append(html);

    // Gather the parsed HTML's node names
    $.each(html, function (i, el) {
        nodeNames[i] = "<li>" + el.nodeName + "</li>";
    });

    // Insert the node names
    $log.append("<h3>Node Names:</h3>");
    $("<ol></ol>")
        .append(nodeNames.join(""))
        .appendTo($log);
});