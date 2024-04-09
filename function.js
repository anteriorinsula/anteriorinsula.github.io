


$(document).ready(function() {


    $('body').keyup(function(e){

        if(e.keyCode == 32){
            // user has pressed space
            $('#easter_egg').append("♥");
        }
    });



    random_image()

});
