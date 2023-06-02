Webcam.set({
    Width:350,
    Height:300, 
    Image_format:"jpg",
    jpg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        }
    )
}
function speak(){
    var synth=window.speechSynthesis;
    speak="The First Prediction is"+ data_1;
    speak2="The Second Prediction is"+ data_2;
    var utter_this=new SpeechSynthesisUtterance(speak+speak2);
    synth.speak(utter_this);
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VX8Au69UM/model.json", modelloaded);
function modelloaded(){
    console.log("model loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name_2").innerHTML=results[1].label;
        data_1=results[0].label;
        data_2=results[1].label;
        speak();
        if (results[0].label=="Happy")
        {
            document.getElementById("update_emoji").innerHTML="&#128522";
        }
        if (results[0].label=="Sad")
        {
            document.getElementById("update_emoji").innerHTML="&#128532";
        }
        if (results[0].label=="Angry")
        {
            document.getElementById("update_emoji").innerHTML="&#128548";
        }
        if (results[1].label=="Happy")
        {
            document.getElementById("update_emoji_2").innerHTML="&#128522";
        }
        if (results[1].label=="Sad")
        {
            document.getElementById("update_emoji_2").innerHTML="&#128532";
        }
        if (results[1].label=="Angry")
        {
            document.getElementById("update_emoji_2").innerHTML="&#128548";
        }
    }
}
