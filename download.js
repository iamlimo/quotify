$(function () {
  $('#save').click(function () {
      html2canvas($('#result'), {
          onrendered: function (canvas) {
              theCanvas = canvas
                document.body.appendChild(canvas)

                // Convert and download as image 
                var dataUrl = canvas.toDataURL();
                //Canvas2Image.saveAsPNG(atob(canvas)) 
                $('#out').append(canvas)
                // Clean up 
                //document.body.removeChild(canvas);
              
            console.log(dataUrl);
            $("#down").click(function(){
                var download = document.getElementById('down').href = dataUrl;
               console.log(dataUrl)
            }) ;    
            }
        })
    })
})
