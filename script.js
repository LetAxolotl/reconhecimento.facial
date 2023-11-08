const teacherblemachineLink = "https://teachablemachine.withgoogle.com/models/O12BJoN8q/";
const modelLink = teacherblemachineLink + "model.json";


const camera = document.getElementById('camera');
const result = document.getElementById('result');

const classifier = m15.imageClassifier(modelLink, modelLoad);

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(camera);

function snap(){
    result.innerHTML = '';

        Webcam.snap(function (dataURI){
        const captura = document.createElement('img');

        captura.setAttribute('id', 'captura');
        captura.setAttribute('src', dataURI)

        result.appendChild(captura);
    });
    check();
    }

    function modelLoaded(){
        console.log('Modelo carregado!');
        Webcam.attach(camera);
    }

    function check() {
        const img = document.getElementById('captura');
        classifier.classify(img, gotResult);
    }

    function gotResult(error, results){
        console.log(error);
        console.log(results)
      
        const axolotl = getElementById("resultAxolotlName");
        const precisao = document.getElementById("resultAxolotlAccuracy");

        if (!error){
            objeto.innerHTML = results[0].label;
            precisao.innerHTML = results[0].confidence.toFixed(2);
        } else {
            console.log(error);
        }
    }
