import styles frin "./readMoreButton.module.css";
function toggleDropdown() {
    const content = document.getElementById('dropdownContent');
    const buttonText = document.getElementById('buttonText');
    const arrow = document.getElementById('arrow');

    content.classList.toggle('hidden');
    arrow.classList.toggle('rotated');

    if (content.classList.contains('hidden')) {
        buttonText.textContent = 'Read more';
        arrow.textContent = '▶';
    } else {
        buttonText.textContent = 'Read less';
        arrow.textContent = '▼';
    }
}