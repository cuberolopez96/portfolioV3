(function(){
   $(document).ready(function(){
       var active = false;
       
       if(window.innerWidth <= 900){
           $("#flecha").click(function(){
           $('body,html').animate({scrollTop:$('#titulo').height()},1000);
       });
           $('#misaptitudes div').fadeOut(500);
        $('#misconocimientos div').fadeOut(500);
        $('#misredes div').fadeOut(500);
        $('#misconocimientos header ').mouseenter(function(){
            $('#misconocimientos div').slideDown(1000);
            $('#yosoy div').slideUp(1000);
            $('#misaptitudes div').slideUp(1000);
            $('#misredes div').slideUp(1000);
        })
        $('#misaptitudes header').mouseenter(function(){
            $('#misconocimientos div').slideUp(1000);
            $('#misaptitudes div').slideDown(1000);
            $('#misredes div').slideUp(1000);
            $('#yosoy div').slideUp(1000);
        });
         $('#misredes header').mouseenter(function(){
            $('#yosoy  div').slideUp(1000); 
            $('#misredes div').slideDown(1000);
            $('#misconocimientos div').slideUp(1000);
            $('#misaptitudes div').slideUp(1000); 
        });
        $('#yosoy header').mouseenter(function(){
           $('#yosoy div').slideDown(1000);
            $('#misconocimientos div').slideUp(1000);
            $('#misaptitudes div').slideUp(1000);
            $('#misredes div').slideUp(1000);
            
        });
        
       }else{
          
           $('#titulo #logo').show(1000).delay(1000);
           $("#flecha").click(function(){
           $('main').slideDown(1000); 
            setTimeout(function(){
                $('body,html').animate({scrollTop:$('#titulo').height()},1000);
            },1000);
            if(active==false){
                    $('#yosoy').fadeIn(1000)
                setTimeout(function(){
                    $('#misconocimientos').fadeIn(1000).delay(1000);
                },1000);
               
                setTimeout(function(){
                    $('#misaptitudes').fadeIn(1000).delay(1000);
                },2000);
                setTimeout(function(){
                    $('#misredes').fadeIn(1000).delay(1000);
                },3000);
                   active = true;
               }    
       });
            
               
                
                
                
            
       }
   })
    
})()