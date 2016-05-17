(function(){
   $(document).ready(function(){
       
       if(window.innerWidth <= 650){
           $('#misaptitudes div').hide(500);
        $('#misconocimientos div').hide(500);
        $('#misredes div').hide(500);
        $('#misconocimientos header ').mouseenter(function(){
            $('#misconocimientos div').show(1000);
            $('#yosoy div').hide(1000);
            $('#misaptitudes div').hide(1000);
            $('#misredes div').hide(1000);
        })
        $('#misaptitudes header').mouseenter(function(){
            $('#misconocimientos div').hide(1000);
            $('#misaptitudes div').show(1000);
            $('#misredes div').hide(1000);
            $('#yosoy div').hide(1000);
        });
         $('#misredes header').mouseenter(function(){
            $('#yosoy  div').hide(1000); 
            $('#misredes div').show(1000);
            $('#misconocimientos div').hide(1000);
            $('#misaptitudes div').hide(1000); 
        });
        $('#yosoy header').mouseenter(function(){
           $('#yosoy div').show(1000);
            $('#misconocimientos div').hide(1000);
            $('#misaptitudes div').hide(1000);
            $('#misredes div').hide(1000);
            
        });
        
       }else{
          
           $('#titulo #logo').show(1000).delay(1000);
            $('main').mouseenter(function(){
                $('#yosoy').show(1000)
                setTimeout(function(){
                    $('#misconocimientos').show(1000).delay(1000);
                },1000);
                setTimeout(function(){
                    $('#misaptitudes').show(1000).delay(1000);
                },2000);
                setTimeout(function(){
                    $('#misredes').show(1000).delay(1000);
                },3000);
                
                
                
            })
       }
   })
    
})()