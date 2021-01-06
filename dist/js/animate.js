$( document ).scrollTop( 0);
function animate(className,addClassName) {
    var elements;
    var windowHeight;
    const neededScrollHeight = -535; 
    function choseElems(name){
        return document.getElementsByClassName(name);
    }
  
    function init() {
      elements = choseElems(className);
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add(addClassName);
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
};
//deactivate save scroll on update
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});
animate("aside__section","aside__section--loaded");
animate("main__section","main__section--loaded");