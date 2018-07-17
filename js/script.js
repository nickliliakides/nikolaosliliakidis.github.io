/*---------------------------------------------------------------------
                          PARALLAX JS CODE
---------------------------------------------------------------------*/

(function() {

    var myParallax = 
    document.querySelectorAll("#experience"), speed = 0.7;
  
    window.onscroll = function(){
        myParallax.forEach(function(elP){
        var windowYOffset = - window.pageYOffset,
            elPBackgroundPos = "50%" + (windowYOffset*speed) + "px";
      
      elP.style.backgroundPosition= elPBackgroundPos;
                  
        });      
    };

})();

function myPhoneFunction() {
    document.getElementById("phoneMail").innerHTML = "Phone number: +44-0-7575855085";
}

function myEmailFunction() {
    document.getElementById("phoneMail").innerHTML = "Email: nickliliakides@gmail.com";
}
