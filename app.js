$("form").submit(function(event){
    event.preventDefault();
    let fcolor = $("#fcolor").val().toLowerCase();
    let scolor = $("#scolor").val().toLowerCase();
    if(fcolor === scolor){
        $("p").text("That shirt is your favourite color");
    }
    else if(fcolor !== scolor){
        $("p").text(`${scolor} is a nice color too`);
    }
    else{
        $("p").text("Please enter valid colors.");
    }

})

