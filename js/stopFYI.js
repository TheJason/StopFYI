$("#ogFYI").change(function() {
    var text = $(this).val();
    text = text.replace(/FYI.../g, "");
    text = text.replace(/FYI../g, "");
    text = text.replace(/FYI./g, "");
    text = text.replace(/FYI-/g, "");
    text = text.replace(/FYI - /g, "");
    text = text.replace(/F.Y.I./g, "");
    text = text.replace(/F.Y.I/g, "");
    text = text.replace(/fyi.../g, "");
    text = text.replace(/fyi../g, "");
    text = text.replace(/fyi./g, "");
    text = text.replace(/fyi -/g, "");
    text = text.replace(/fyi-/g, "");
    text = text.replace(/f.y.i./g, "");
    text = text.replace(/f.y.i/g, "");
    text = text.replace(/fyi/g, "");
    text = text.replace(/Fyi/g, "");
    text = text.replace(/Fyi /g, "");
    text = text.replace(/FYi/g, "");
    text = text.replace(/fYi/g, "");
    text = text.replace(/fyI/g, "");
    text = text.replace(/FYI/g, "");
    $("#correctMessage").text("fyi - " + text);
});
