$(document).ready(main);


function main() {

    const menu = $("#toggle-menu");


    let isVisible = false;
    
    const button = $("#burger");

    button.click(() => {

        console.log(isVisible)
        
        if (isVisible) {
        
            menu.removeClass("mostrar");
            isVisible = false
            $("header").css("min-height","12%")
                        .css("height","12%")
                        .css("background","#fffefb");
            $("#logo-mobile").show();   
            $("#logo-mobile-white").hide(); 
            $("#burger i").css("color", "#fffefb");
            $("#burger").css("background", "#7300ba");

            
        } else {
            

            menu.addClass("mostrar");
            isVisible = true
            $("header").css("height","100%")
                        .css("background","#7300bad5");

            $("#logo-mobile").hide();
            $("#logo-mobile-white").show();

            $("#burger i").css("color", "#7300ba");
            $("#burger").css("background", "#fffefb");
            
        }

    })

    // button.click(() => {

    //     console.log(isVisible)
        
    //     if (isVisible) {
            
    //         menu.hide();
    //         isVisible = false
    //         $("header").css("min-height","12%")
    //                     .css("height","12%")
    //                     .css("background","#fffefb");
    //         $("#logo-mobile").show();   
    //         $("#logo-mobile-white").hide();
    //         $("#burger i").css("color", "#fffefb");
    //         $("#burger").css("background", "#7300ba");

                     
    //     } else {
            
    //         menu.show();
    //         isVisible = true
    //         $("header").css("height","100%")
    //                     .css("background","#7300bad5");

    //         $("#logo-mobile").hide();
    //         $("#logo-mobile-white").show();

    //         $("#burger i").css("color", "#7300ba");
    //         $("#burger").css("background", "#fffefb");
            
    //     }

    // })



};