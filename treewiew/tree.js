var Tree = function (element, option) {
    var defaultOption = {
        data: []
    }
    this.option = option || defaultOption;
}

Tree.prototype = function () {
    init: function () {
        var html = this.createTree(this.option.data);
        element.innerHTML = html;
        this.toogleTab();
    },

    createTree: function (d) {
        var option = '';
        for (var i = 0; i < d.length; i++) {
            if (d[i].submenu) {
                option += '<li>' + d[i].title + '<ul>' + CreateTree(d[i].submenu) + '</ul>' + '</li>';
            } else {
                option += '<li>' + d[i].title + '<a href=' + d[i].url+ '></a></li>';
            }
        }
        return option;
    },

    toogleTab: function () {
        $('.icon, .sub-title').on('click', function (e) {
            var ul = $(this).nextAll('.sub-box');
            var icon = $(this).parent().children('.icon');
            if (icon.hasClass('close')) {
                ul.hide();
                icon.removeClass('close').addClass('open');
            }
            else {
                ul.show();
                icon.removeClass('open').addClass('close');
            }
        });
    }
}
