function initIndexIconHover() {
    const indexIcon24 = document.getElementById('a965_icons_24');
    const indexIcon65 = document.getElementById('a965_icons_65');
    const indexIconTM = document.getElementById('a965_icons_TM');
    
    if (indexIcon24) {
        indexIcon24.addEventListener('mouseover', () => {
            indexIcon24.src = '../images/home/24OWLS-Hover.png';
        });
        indexIcon24.addEventListener('mouseout', () => {
            indexIcon24.src = '../images/home/24OWLS.png';
        });
    }
    
    if (indexIcon65) {
        indexIcon65.addEventListener('mouseover', () => {
            indexIcon65.src = '../images/home/65-Hover.png';
        });
        indexIcon65.addEventListener('mouseout', () => {
            indexIcon65.src = '../images/home/65.png';
        });
    }
    
    if (indexIconTM) {
        indexIconTM.addEventListener('mouseover', () => {
            indexIconTM.src = '../images/home/Tangent Moves-Hover.png';
        });
        indexIconTM.addEventListener('mouseout', () => {
            indexIconTM.src = '../images/home/Tangent Moves.png';
        });
    }
}

export { initIndexIconHover };
