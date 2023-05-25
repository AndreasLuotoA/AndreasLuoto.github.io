$(document).ready(function() {
    $('input[name="first"]').focus(function() {
        $('h2').text('first');
    });

    $('input[name="last"]').focus(function() {
        $('h2').text('last');
    });
});