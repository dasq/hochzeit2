document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

function labnolThumb(t) {
    var e = '<img src="img/faridbenmiles-about.jpg">',
        n = '<div class="play"></div>';
    return e + n
}

function labnolIframe() {
    var t = document.createElement("iframe"),
        e = "https://www.youtube.com/embed/ID?autoplay=1";
    t.setAttribute("src", e.replace("ID", this.dataset.id)), t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "1"), this.parentNode.replaceChild(t, this)
}