       
       
        var enter = document.getElementById('submit');
            var colorArr = ["#fff", "#000"]
                enter.addEventListener('click', function(){
                var input=  document.getElementById('textInput').value;
                    var result = document.getElementById('result');
                    
                    result.innerHTML = "<h2>" + input + "</h2>" ;
                    
                },false)

            var color = document.getElementsByClassName("colors");

            var colorArr = []

            for(var i = 0; i < color.length; i++){
                colorArr.push(color[i].value);
            }
                console.log(colorArr)
            var color = {
                black: document.getElementById("black"),
                purple: document.getElementById("purple"),
                red: document.getElementById("red"),
                green: document.getElementById("green"),
                orange: document.getElementById("orange"),
                blue: document.getElementById("blue")
            }



            color.black.addEventListener('click', function(){
                result.style.backgroundColor = colorArr[0];
                console.log("I am black")
            }, false);

            color.purple.addEventListener('click', function(){
                result.style.backgroundColor = colorArr[1];
            }, false)

            color.red.addEventListener('click', function(){
                result.style.backgroundColor = colorArr[2];
            }, false);
            color.green.addEventListener('click', function(){
                result.style.backgroundColor = colorArr[3];
            }, false)
            color.orange.addEventListener('click', function(){
                result.style.backgroundColor = colorArr[4];
            }, false)
            color.blue.addEventListener('click', function(){
                result.style.backgroundColor = colorArr[5];
            }, false);

            