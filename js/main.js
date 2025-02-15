const navLinks = document.querySelectorAll('.mobile-navigation__link');
const toggler = document.getElementById('menu-toggler-id');
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		toggler.checked = false;
		});
	});
