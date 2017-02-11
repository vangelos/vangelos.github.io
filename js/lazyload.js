/**
 * @author Shaumik Daityari
 * @copyright Copyright © 2013 All rights reserved.
 */

var lazyload = lazyload || {};

(function($, lazyload) {

    "use strict";

    var page = 2,
        buttonId = "#moreButton",
        loadingId = "#loadingDiv",
        container = "#smartPortfolio";

    lazyload.load = function() {

        var url = "./pages/" + page + ".html";

        $(buttonId).hide();
        $(loadingId).show();

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).fadeOut();
                    $(loadingId).text("Портфолио полностью загружено");
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $(loadingId).text("К сожалению, возникла какая-то ошибка при запросе. Пожалуйста, обновите страницу.");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).show();
        $(loadingId).hide();

        $(response).appendTo($(container));
        page += 1;
    };

})(jQuery, lazyload);