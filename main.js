function setup()
{
    canvas = createCanvas(350,300);
    canvas.position(690,508);

    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier('model.json', modelLoaded); ///Insert model source link in single quotes'' before model.json ///
}

console.log('ml5 version:', ml5.version);


function modelLoaded()
{
    console.log("model loaded successfully!")
}

function draw()
{
    image(video,0,0,350,300);
    classifier.classify(video,gotResult);
}

function gotResult (error,results)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}