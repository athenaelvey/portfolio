
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
    if(isDragging){
        let btnRect = portfolioBtn.getBoundingClientRect();
        let zoneRect = document.getElementById('dropzone').getBoundingClientRect();
        let character = document.getElementById('character');

        if(isOverlapping(btnRect, zoneRect)){
            character.style.transform = 'translateY(300px)';
            character.style.opacity = '0';

            setTimeout(function(){
                window.location.href = 'portfolio.html';
            }, 600);
        }
    }
    isDragging = false;
})

document.addEventListener('mousemove', function(e){
    if(isDragging){
        portfolioBtn.style.left = (e.clientX - offsetX) + 'px';
        portfolioBtn.style.top = (e.clientY - offsetY)+ 'px';
    }
});

function isOverlapping(rect1, rect2){
    return!(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}