var wrappers = document.getElementsByClassName("highlightBox");
for (var i = 0; i < wrappers.length; i++) {
    var wrapper = wrappers[i];
    var highlights = wrapper.getElementsByClassName("highlightSide");
    for (var j = 0; j < highlights.length; j++) {
        var highlight = highlights[j];
        highlight.style.left = - highlight.getBoundingClientRect().width - wrapper.getBoundingClientRect().left + "px";
    }
}
