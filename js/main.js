/* your code goes here! */
$('#change-content').on('click', function(){
    //$('#content').find('#selector').val().replaceWith('#newContent')
    var toMod = $('#selector').val();
    var element = $(toMod)
    var contentToApply = $('#newContent').val()
    element.text(contentToApply)
    //or
    //$(''main ' + #element').html(contentToApply) add main to only do elements from top portion
});

$('#add-at-end').on('click', function(){
    var x = $('#selector').val()
    var xx =$(x)
    var xxx = $('#newContent').val()
    $(xx).append(xxx)
})

$('#add-at-start').on('click', function(){
    var x = $('#selector').val()
    var xx =$(x)
    var xxx = $('#newContent').val()
    $(xx).prepend(xxx)
})

$('#insert-before').on('click', function(){
    var x = $('#selector').val()
    var xx =$(x)
    var xxx = $('#newContent').val()
    $(xx).before(xxx)
})
//add at start use prepend

/* Use clever selections and event handlers to assign the described interactivity */

var selector = ('#selector')
var content = ('#newContent')
//work with all buttons
$('button').click(function() {
    // var buttonName = $(this).attr('id')
    // var toMod = $('#selector').val();
    // var element = $(toMod)
    // var contentToApply = $('#newContent').val()
    var selectorText - selector.val();
    var contentText - content.val()
    if(buttonName == 'change-content'){
    // var toMod = $('#selector').val();
    // var element = $(toMod)
    // var contentToApply = $('#newContent').val()
    // $('main ' + selectorText).html(contentText)
    }
    switch(buttonName){
        case 'change-content':
         $('main ' + selectorText).html(contentText)
         break;
         case 'hide-text':
         $'main ' + selectorText).hide()
        break;
        default:
        break;
    }
})
