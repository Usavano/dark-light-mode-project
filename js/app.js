const body = document.querySelector('.wrapper');
const toggler = document.querySelector('.header__toggler');

const changeTheme = () => {
    const bodyAttr = body.dataset.theme;
    body.dataset.theme = bodyAttr === 'dark' ? 'default' : 'dark';
}
toggler.addEventListener('click', changeTheme);