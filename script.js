jQuery(document).ready(function($){
  var path = window.location.pathname.split("/").pop();
  
  if ( path == '' ) {
    path = 'index.php';
  }
      
  var target = $('nav a[href="'+path+'"]');

  target.addClass('active');
});

//-----------------------------------------------

  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

  //---------------------------------------------

$(document).ready(function(){
    $('#wrapper').fadeIn("slow");
});


