
function updateTime(){
    let now = new Date();

    document.getElementById('hour-display').textContent = now.getHours();
    document.getElementById('minute-display').textContent = now.getMinutes().toString().padStart(2,'0');
    document.getElementById('second-display').textContent = now.getSeconds().toString().padStart(2,'0');
}

setInterval(updateTime, 1000);