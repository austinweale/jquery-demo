/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

window.onload = function(){

    $('#change-content').click(changeContent);

    $('#add-at-end').click(addContent);

    $('#add-at-start').click(addFront);

    $('#insert-before').click(insertBefore);

    $('#move-after').click(moveToAfter);

    $('#surround-class').click(surround);

    $('#hide-text').click(longText);

    $('#remove-word').click(remove);

};


var changeContent = function(){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();
    $(selector).html(newContent);
}

var addContent = function(){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();
    $(selector).append(newContent);
}

var addFront = function(){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();
    $(selector).prepend(newContent);
}

var insertBefore = function(){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();

    $(selector).before(newContent);
}

var moveToAfter = function(){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();

    $(selector).insertAfter(newContent);
}

var surround = function(){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();

    $(selector).wrap('<div class =' + newContent + '></div>');
}

var longText = function(){
    var selector = $('#selector').val();
    
    var html = $(selector).html();


    if(html.length > 12){
        $(selector).wrap("<div class ='hidden'></div>");
    }
}

var remove = function(){
    var selector = $('#selector').val();
    var newContent= $('#newContent').val();

    var html = $(selector).html();


    if(html.includes(newContent)){
        $(selector).remove();
    }
}










