
function updateTime(){
    let now = new Date();

    document.getElementById('hour-display').textContent = now.getHours().toString().padStart(2, '0');
    document.getElementById('minute-display').textContent = now.getMinutes().toString().padStart(2,'0');
    document.getElementById('second-display').textContent = now.getSeconds().toString().padStart(2,'0');
}

setInterval(updateTime, 1000);

let isDragging = false;
let portfolioBtn = document.getElementById('portfolio-btn');

let offsetX = 0;
let offsetY = 0;

portfolioBtn.addEventListener('mousedown', function(e){
    e.preventDefault();

    let rect = portfolioBtn.getBoundingClientRect();

    document.body.appendChild(portfolioBtn);

    portfolioBtn.style.left = rect.left + 'px';
    portfolioBtn.style.top = rect.top + 'px';
    
    isDragging = true;

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
})

document.addEventListener('mouseup', function(){
    isDragging = false;
})

document.addEventListener('mousemove', function(e){
    if(isDragging){
        portfolioBtn.style.left = (e.clientX - offsetX) + 'px';
        portfolioBtn.style.top = (e.clientY - offsetY)+ 'px';
    }
});