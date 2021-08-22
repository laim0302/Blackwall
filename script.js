document.addEventListener('DOMContentLoaded', function () {

	const logos = [
		{
			companyName: 'Airbnb',
			companyLogo: './img/partners-logo/Airbnb Logo.svg',
			companyUrl: 'https://www.airbnb.ru/'
		},
		{
			companyName: 'Hubspot',
			companyLogo: './img/partners-logo/Hubspot Logo.svg',
			companyUrl: 'https://www.hubspot.com/'
		},
		{
			companyName: 'Google',
			companyLogo: './img/partners-logo/Google Logo.svg',
			companyUrl: 'https://www.google.ru/'
		},
		{
			companyName: 'Microsoft',
			companyLogo: './img/partners-logo/Microsoft Logo.svg',
			companyUrl: 'https://www.microsoft.com/ru-ru'
		},
		{
			companyName: 'Walmart',
			companyLogo: './img/partners-logo/Walmart Logo.svg',
			companyUrl: 'https://www.walmart.com/'
		},
		{
			companyName: 'FedEx',
			companyLogo: './img/partners-logo/FedEx Logo.svg',
			companyUrl: 'https://www.fedex.com/global/choose-location.html'
		}
	];

	const logoList = document.querySelector('.logo-list');

	for (let item of logos) {
		let logosItem = document.createElement('li');
		logosItem.classList.add('logo-list__item');
		logosItem.innerHTML = `
			<a class="logo-list__link" href="${item.companyUrl} " target="_blank">
				<img class="logo-list__img" src="${item.companyLogo} " alt="${item.companyName} logo">
			</a>			
		`;
		logoList.append(logosItem);
	}
});