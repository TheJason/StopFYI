$("#ogFYI").change(function() {
    var text = $(this).val();
    text = text.replace("FYI...", "");
    text = text.replace("FYI..", "");
    text = text.replace("FYI.", "");
    text = text.replace("FYI-", "");
    text = text.replace("FYI - ", "");
    text = text.replace("F.Y.I.", "");
    text = text.replace("F.Y.I", "");
    text = text.replace("fyi...", "");
    text = text.replace("fyi..", "");
    text = text.replace("fyi.", "");
    text = text.replace("fyi -", "");
    text = text.replace("fyi-", "");
    text = text.replace("f.y.i.", "");
    text = text.replace("f.y.i", "");
    text = text.replace("fyi", "");
    $("#correctMessage").text("fyi - " + text);
});
