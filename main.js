Webcam.set({
    width: 400,
    height:300,
    image_format:"png",
    png_quality:110
});

camera= document.getElementById("camera");

Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snapshot_result' src="+data_uri+">"
    })
}

console.log("ml5.version"+ml5.version)

classefier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mCVak3mSc/model.json",model_loded)

function model_loded(){
    console.log("model_loded")
}
prediction1=""
prediction2=""
function speak(){
    var synth= window.speechSynthesis;
    speak_data_1="The first prediction is "+prediction1
    speak_data_2="and the second prediction is "+prediction2
    var utter_this=new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
    synth.speak(utter_this)
}
