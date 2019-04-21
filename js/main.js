$(function () {
    $('.tooltip').tooltip({
        open: function () {
            // make sure all other tooltips are closed when opening a new one
            $('.tooltip').not(this).tooltip('close');
        }
    }).on('mouseleave', function (e) {
        var that = this;
        // close the tooltip later (maybe ...)
        mouseLeaveTimer = setTimeout(function () {
            $(that).tooltip('close');
        }, 100);
        // prevent tooltip widget to close the tooltip now
        e.stopImmediatePropagation();
    });

    $(document).on('mouseenter', '.ui-tooltip', function (e) {
        // cancel tooltip closing on hover
        clearTimeout(mouseLeaveTimer);
    });
    $(document).on('mouseleave', '.ui-tooltip', function () {
        // make sure tooltip is closed when the mouse is gone
        $('.tooltip').tooltip('close');
    });
});
