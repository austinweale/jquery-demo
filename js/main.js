/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

window.onload = function(){

    $('#change-content').click(function(){ selectVal(changeContent) });

    $('#add-at-end').click(function(){ selectVal(addContent) });

    $('#add-at-start').click(function(){ selectVal(addFront) });

    $('#insert-before').click(function(){ selectVal(insertBefore) });

    $('#move-after').click(function(){ selectVal(moveToAfter) });

    $('#surround-class').click(function(){ selectVal(surround) });

    $('#hide-text').click(function(){ selectVal(longText) });

    $('#remove-word').click(function(){ selectVal(remove) });

};

var selectVal = function(next){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();
    next(selector, newContent);
}

var changeContent = function(selector, newContent){
    $(selector).html(newContent);
}

var addContent = function(selector, newContent){
    $(selector).append(newContent);
}

var addFront = function(selector, newContent){
    $(selector).prepend(newContent);
}

var insertBefore = function(selector, newContent){
    $(selector).before(newContent);
}

var moveToAfter = function(selector, newContent){
    $(selector).insertAfter(newContent);
}

var surround = function(selector, newContent){
    $(selector).wrap('<div class =' + newContent + '></div>');
}

var longText = function(selector, newContent){
    var html = $(selector).html();
    if(html.length > 12){
        $(selector).wrap("<div class ='hidden'></div>");
    }
}

var remove = function(selector, newContent){
    var html = $(selector).html();
    if(html.includes(newContent)){
        $(selector).remove();
    }
}










