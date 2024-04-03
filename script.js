
document.querySelector('p > a').addEventListener('click', function() {
	const email = document.querySelector('p > a').textContent;
	const input = document.createElement('input');
	input.value = email;
	document.body.appendChild(input);
	input.select();
	document.execCommand('copy');
	document.body.removeChild(input);
	alert('E-mail copiado para a área de transferência!');
});