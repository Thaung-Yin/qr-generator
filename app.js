let qrValue = document.getElementById('qrValue');
let qrImg = document.getElementById("qrImg");
let qrBox = document.getElementById("qrBox")
let generateBtn = document.getElementById('btn');
let resetBtn = document.getElementById('reset');

qrValue.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        generate();
    }
});

generateBtn.addEventListener("click", generate);
resetBtn.addEventListener("click", restart);



function generate(){
    if(qrValue.value === ''){
        
        qrValue.classList.add("error");
        setTimeout(()=>{
            qrValue.classList.remove("error");
        },1000)

    }else{
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrValue.value;
        qrBox.classList.add("active");
        qrValue.value= "";
    }
}

function restart() {
    qrValue.value = "";
    qrBox.classList.remove("active");
    qrImg.src = "";
}