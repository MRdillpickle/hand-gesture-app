
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_qualatiy: 90
});
camera = document.getElementById("camaer");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src = '" + data_uri + "'>";
    });
}
console.info("ml5veriton:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cy-2aY67W/model.json", modelLoaded);
function modelLoaded() {console.info("model loaded!");}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.info(results);
    document.getElementById("result_emoji_name").innerHTML = results[0].label;
    document.getElementById("result_emoji_pic").innerHTML = results[1].label;
    pre_1 = results[0].label;
    pre_2 = results[1].label;
    if(results[0].label == "yes"){
        document.getElementById("update_emoji").innerHTML = "yes";
    }
    if(results[0].label == "no"){
        document.getElementById("update_emoji").innerHTML = "no";
    }
    if(results[0].label == "stop"){
        document.getElementById("update_emoji").innerHTML = "stop";
    }
    
    if(results[1].label == "yes"){
        document.getElementById("update_emoji").innerHTML = "yes";
    }
    if(results[1].label == "no"){
        document.getElementById("update_emoji").innerHTML = "no";
    }
    if(results[1].label == "stop"){
        document.getElementById("update_emoji").innerHTML = "stop";
    }
}