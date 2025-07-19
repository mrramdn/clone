function initIndexIconHover() {
  const iconMap = [
    {
      selector: 'img[alt="24OWLS logo"]',
      defaultSrc: 'images/home/24OWLS.png',
      hoverSrc: 'images/home/24OWLS-Hover.png',
    },
    {
      selector: 'img[alt="65 logo"]',
      defaultSrc: 'images/home/65.png',
      hoverSrc: 'images/home/65-Hover.png',
    },
    {
      selector: 'img[alt="Tangent Moves logo"]',
      defaultSrc: 'images/home/Tangent Moves.png',
      hoverSrc: 'images/home/Tangent Moves-Hover.png',
    },
  ];

  iconMap.forEach(({ selector, defaultSrc, hoverSrc }) => {
    const img = document.querySelector(selector);

    if (!img) return;

    img.addEventListener('mouseover', () => {
      img.src = hoverSrc;
    });

    img.addEventListener('mouseout', () => {
      img.src = defaultSrc;
    });
  });
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
            if (arrow) arrow.src = '../../images/logo-icons/Arrow Icon-Hover.svg';
        });
        
        item.addEventListener('mouseout', () => {
            if (arrow) arrow.src = '../../images/logo-icons/Arrow Icon.svg';
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
            if (arrowb) arrowb.src = '../../images/logo-icons/Black Arrow Icon-Hover.svg';
        });
        
        item.addEventListener('mouseout', () => {
            if (arrowb) arrowb.src = '../../images/logo-icons/Black Arrow Icon.svg';
        });
    });
}

export { initIndexIconHover, initFestivalRowHover };
