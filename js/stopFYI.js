$("textarea").each(function() {
    var text = $(this).value();
    text = text.replace("fyi", "");
    $(this).value(text);
});
