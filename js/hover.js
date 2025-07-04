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

function initFestivalRowHover() {
    /*Lists animation white*/
    const listRows = document.querySelectorAll('.a965_row');

    listRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.classList.add('hover');
        });

        row.addEventListener('mouseout', () => {
            row.classList.remove('hover');
        });
    });

    /*change arrow white*/
    const festRows = document.querySelectorAll('.a965_row');

    festRows.forEach(item => {
        const arrow = item.querySelector('.list-arrow');

        item.addEventListener('mouseover', () => {
            if (arrow) arrow.src = '../images/logo-icons/Arrow Icon-Hover.svg';
        });
        
        item.addEventListener('mouseout', () => {
            if (arrow) arrow.src = '../images/logo-icons/Arrow Icon.svg';
        });
    });

    /*Lists animation black*/
    const listb = document.querySelectorAll('.a965_rowb');

    listb.forEach(listb => {
        listb.addEventListener('mouseover', () => {
            listb.classList.add('hover');
        });

        listb.addEventListener('mouseout', () => {
            listb.classList.remove('hover');
        });
    });

    /*change arrow-black*/
    const festlistb = document.querySelectorAll('.a965_rowb');

    festlistb.forEach(item => {
        const arrowb = item.querySelector('.list-arrow-b');

        item.addEventListener('mouseover', () => {
            if (arrowb) arrowb.src = '../images/logo-icons/Black Arrow Icon-Hover.svg';
        });
        
        item.addEventListener('mouseout', () => {
            if (arrowb) arrowb.src = '../images/logo-icons/Black Arrow Icon.svg';
        });
    });
}

export { initIndexIconHover, initFestivalRowHover };
