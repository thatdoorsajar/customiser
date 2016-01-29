//
// SEAT BUTTONS
//
$('#btnButtonBlue').click(function() {
    $('.button').addClass('hide');
    $('#button-blue').removeClass('hide');
});
$('#btnButtonGreen').click(function() {
    $('.button').addClass('hide');
    $('#button-green').removeClass('hide');
});
$('#btnButtonGrey').click(function() {
    $('.button').addClass('hide');
    $('#button-grey').removeClass('hide');
});
$('#btnButtonPurple').click(function() {
    $('.button').addClass('hide');
    $('#button-purple').removeClass('hide');
});
$('#btnButtonRed').click(function() {
    $('.button').addClass('hide');
    $('#button-red').removeClass('hide');
});

//
// SEAT PADS
//
$('#btnSeatBlue').click(function() {
    $('.seat').addClass('hide');
    $('#seat-blue').removeClass('hide');
});
$('#btnSeatGreen').click(function() {
    $('.seat').addClass('hide');
    $('#seat-green').removeClass('hide');
});
$('#btnSeatOrange').click(function() {
    $('.seat').addClass('hide');
    $('#seat-orange').removeClass('hide');
});
$('#btnSeatPurple').click(function() {
    $('.seat').addClass('hide');
    $('#seat-purple').removeClass('hide');
});
$('#btnSeatWhite').click(function() {
    $('.seat').addClass('hide');
    $('#seat-white').removeClass('hide');
});

// 
// LEGS
// 
$('#btnLegsBlack').click(function() {
    $('.legs').addClass('hide');
    $('#legs-black').removeClass('hide');
});
$('#btnLegsWhite').click(function() {
    $('.legs').addClass('hide');
    $('#legs-white').removeClass('hide');
});

//
// FEET
//
$('#btnFeetBlack').click(function() {
    $('.feet').addClass('hide');
    $('#feet-black').removeClass('hide');
});
$('#btnFeetWhite').click(function() {
    $('.feet').addClass('hide');
    $('#feet-white').removeClass('hide');
});

//
// PRESETS
// 
$('#btnPreset1').click(function() {
    $('.button').addClass('hide');
    $('.seat').addClass('hide');
    $('.legs').addClass('hide');
    $('.feet').addClass('hide');

    $('#button-grey').removeClass('hide');
    $('#seat-orange').removeClass('hide');
    $('#legs-black').removeClass('hide');
    $('#feet-white').removeClass('hide');
});
$('#btnPreset2').click(function() {
    $('.button').addClass('hide');
    $('.seat').addClass('hide');
    $('.legs').addClass('hide');
    $('.feet').addClass('hide');

    $('#button-grey').removeClass('hide');
    $('#seat-blue').removeClass('hide');
    $('#legs-white').removeClass('hide');
    $('#feet-white').removeClass('hide');
});
$('#btnPreset3').click(function() {
    $('.button').addClass('hide');
    $('.seat').addClass('hide');
    $('.legs').addClass('hide');
    $('.feet').addClass('hide');

    $('#button-red').removeClass('hide');
    $('#seat-purple').removeClass('hide');
    $('#legs-black').removeClass('hide');
    $('#feet-white').removeClass('hide');
});