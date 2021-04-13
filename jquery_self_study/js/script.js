$(document).ready(function(){
    $('h1').css('color','green');
})
$('#btn_start').click(function(){
    $('#message')
        .html('Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos soluta hic neque accusantium officiis')
        .css('background-color','green')
        .parent()
        .css('background-color','fff4dd')
        .width(150)
        height(80)
});
$('#btn_reset').click(function(){
    location.reload();
});