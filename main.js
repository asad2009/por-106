Webcam.set({
    width: 350,
    height: 300 
});
Webcam.attach('camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src="+data_uri+">";

    });
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZZUbZeAIb/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function check(){
    img=document.getElementById("image");
    classifier.classify(img,gotresult);
}
function gotresult(error,result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
    }