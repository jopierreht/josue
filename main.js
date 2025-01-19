let sideMenuLinks = document.querySelectorAll('.side-menu a');
let sectionTitles = document.querySelectorAll('.sec-title');

sideMenuLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Reset all SVG icons and section borders
    sideMenuLinks.forEach(link => {
      link.querySelector('svg').setAttribute('fill', '#bbb');
    });

    sectionTitles.forEach(title => {
      title.style.borderColor = '#bbb';
      title.querySelector('svg').setAttribute('fill', '#bbb');

      let liText = title.querySelector('li:nth-child(2)'); // Target the second <li> (text "Welcome")
      if (liText) liText.style.color = '#bbb'; // Reset the text color
    });

    // Highlight the clicked link's SVG
    this.querySelector('svg').setAttribute('fill', '#00e7ff');

    // Get the target section ID and update its title border color
    let targetId = this.getAttribute('href'); // e.g., "#intro"
    let targetSectionTitle = document.querySelector(`${targetId} .sec-title`);

    if (targetSectionTitle) {
      targetSectionTitle.style.borderColor = '#00e7ff';
      targetSectionTitle.querySelector('svg').setAttribute('fill', '#00e7ff');

      let liText = targetSectionTitle.querySelector('li:nth-child(2)');
      if (liText) liText.style.color = '#00e7ff';
    }
  });
});