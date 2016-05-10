(function(){
    var issoy=false;
    var isconocimientos= false;
    $(document).ready(function(){
        $('#soy').click(function(){
            if(issoy == false){
                $('#yosoy').show(1000);
                issoy=true;
            }else{
                 $('#yosoy').hide(1000);
                issoy=false;
            }
        })
    });
})()