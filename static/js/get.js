 
function getBotResponse() {

        var rawText = $("#textInput").val();
        var userHtml = '<p class="userText"><span>'+ rawText +'</span> </p>';
       	$("#textInput").val("");
        $("#chatbox").append(userHtml);
        
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
        
        $.get("/get", { msg: rawText }).done(function(data) {	
        	var botHtml = '<p class="botText"><span>'+ data +'</span> </p>';
        $("#chatbox").append(botHtml);

        document.getElementById("my-chat").scrollBy(0, 1000);
      
        //**********  Text to Speech **************//

        var botHtml2 = data;
        responsiveVoice.speak(botHtml2);

        //******************************************//
        
        
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});

        document.getElementById("my-chat").scrollBy(0, 1000);
        });
    }

    $("#textInput").keypress(function(e) {
        if(e.which == 13) {
            getBotResponse();
            document.getElementById("my-chat").scrollBy(0, 1000);

        }
    });
    $("#buttonInput").click(function() {
  
	getBotResponse();	
		
   })
 