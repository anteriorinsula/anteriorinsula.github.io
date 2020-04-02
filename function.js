

/*
function random_image(){
    var items = Array("SPATIEBALK_6.gif");



    var item = items[Math.floor(Math.random() * items.length)]

    console.log(item)

    $("#banner").attr("src",item)
}



*/

function toggle_image(id, image_src1, image_src2) {

    var image = document.getElementById(id);
    var parts = image.src.split("/");
    var image_src = parts[parts.length-1];
    //console.log(image.src)
    if (image_src=== image_src1){

        image.src= "images/social/" + image_src2;
    }
    else if (image_src=== image_src2){

        image.src= "images/social/" + image_src1;
    }
    else {
        image.src = "images/social/" + image_src1;
    }
}


$(document).ready(function() {


    $('body').keyup(function(e){

        if(e.keyCode == 32){
            // user has pressed space
            $('#easter_egg').append("♥");
        }
    });



    random_image()

});
