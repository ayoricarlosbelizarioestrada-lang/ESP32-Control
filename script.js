const led = document.getElementById("led");

document.getElementById("btnOn").onclick = function () {

    led.innerHTML = "🟢 Encendido";

}

document.getElementById("btnOff").onclick = function () {

    led.innerHTML = "🔴 Apagado";

}
