//Initialize and add map

function initMap() {
    //Your location

    const loc = {lat: 25.761681, lng: -80.191788};

    //centered map on location
     const map = new google.maps.Map(document.querySelector('.map')
     ,{
         zoom: 14,
         center: loc});
     

     //The Market Positions at the location

     const marker = new google.maps.Marker({position: loc, map: map});





     //sticky menue background

     window.addEventListener('scroll', function(){

        if(window.scrollY > 150){
            document.querySelector('#nav-bar').style.opacity = 0.9;
        }
        else{
            this.document.querySelector('#nav-bar').style.opacity =1;
        }
     })


    //  smooth scrolling

    $('#nav-bar a,.btn').on('click', function(event){
        if(this.hash !==''){
            event.preventDefault();

            const hash = this.hash;
            
            $('html, body').animate(
                {
                scrollTop: $(hash).offset().top - 100
              }, 
            
            800
            );
            
        }
    });
    
}
