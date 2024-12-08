let a = document.querySelectorAll('.elem');

a.forEach(function(val) {
    const child = val.querySelector('img'); 
    
    val.addEventListener('mouseenter', function() {
        child.style.opacity = 1; 
    });
    
    val.addEventListener('mouseleave', function() {
        child.style.opacity = 0; 
    });
    
    val.addEventListener('mousemove', function(dets) {
        
        
        child.style.left = dets.x + 'px'; // Position the image horizontally
        // val.childNodes[3].style.left=dets.x+'px';can acess image
        child.style.top = dets.y + 'px'; // Position the image vertically
    });
});
