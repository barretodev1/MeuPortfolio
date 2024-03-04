document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault(); 
        
        const targetId = item.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 
        
        if (targetElement) {
          
            const targetOffset = targetElement.offsetTop;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
});
