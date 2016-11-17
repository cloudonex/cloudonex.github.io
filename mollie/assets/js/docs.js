!function (a) {
    "use strict";
    a(function () {
        var b = a(window), c = a(document.body);
        c.scrollspy({target: ".bs-docs-sidebar"}), b.on("load", function () {
            c.scrollspy("refresh")
        }), a('.bs-docs-container [href="#"]').click(function (a) {
            a.preventDefault()
        }), setTimeout(function () {
            var b = a(".bs-docs-sidebar");
            b.affix({
                offset: {
                    top: function () {
                        var c = b.offset().top, d = parseInt(b.children(0).css("margin-top"), 10), e = a(".bs-docs-nav").height();
                        return this.top = c - e - d
                    }, bottom: function () {
                        return this.bottom = a(".bs-docs-footer").outerHeight(!0)
                    }
                }
            })
        }, 100)

    })
}(jQuery), function () {
    "use strict";

}();