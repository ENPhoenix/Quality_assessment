(function() {
	const stars = document.querySelectorAll('.star');
	const feedbackArea = document.querySelector('.feedback-area');
	const submitBtn = document.querySelector('.submit-btn');
	const textarea = document.getElementById('feedback-text');
	let selectedRating = 0;


    	// Проверка на наличие элементов
	if (!stars.length || !feedbackArea || !submitBtn || !textarea) {
		console.error('Не удалось найти необходимые элементы на странице.');
	return;
	}


	// Обновляем заполнение звёзд и aria-атрибуты
	function updateStars(rating) {
		stars.forEach(star => {
			const starVal = Number(star.getAttribute('data-value'));
			if (starVal <= rating) {
				star.classList.add('filled');
				star.setAttribute('aria-checked', 'true');
				star.setAttribute('tabindex', '0');
			} else {
				star.classList.remove('filled');
				star.setAttribute('aria-checked', 'false');
				star.setAttribute('tabindex', '-1');
			}
		});
	}


		// Обработчики кликов и клавиатуры у звёзд
	stars.forEach((star, index) => {
		star.addEventListener('click', () => {
			selectedRating = Number(star.getAttribute('data-value'));
			updateStars(selectedRating);
			handleRating(selectedRating);
		});
        	});

	// Логика после выбора рейтинга
	function handleRating(rating) {
		console.log('Выбранный рейтинг:', rating);
		if (rating >= 1 && rating <= 3) {
			feedbackArea.style.display = 'flex';
			textarea.focus();
		} else if (rating >= 4) {
			feedbackArea.style.display = 'none';
			// Перенаправление, вставьте нужную ссылку вместо примера
			window.location.href = 'https://yandex.ru/maps/org/khasl/208848680698/reviews/?add-review=true&ll=92.898862%2C55.993993&mode=search&sctx=ZAAAAAgBEAAaKAoSCeQSRx6IrEhAEY%2BlD11QxUpAEhIJpwLuef60vT8RnRGlvcEXpj8iBgABAgMEBSgKOABAmp0GSAFqAnJ1nQHNzMw9oAEAqAEAvQEGIpzAwgEG2Zzl9ZMBggII0KXQsNGB0LuKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=92.898862%2C55.993993&sspn=0.013723%2C0.004801&tab=reviews&text=Хасл&z=17.08';
		}
	}
	// Обработчик отправки отзыва
	submitBtn.addEventListener('click', () => {
		const feedback = textarea.value.trim();
		if (!feedback) {
			alert('Пожалуйста, введите отзыв перед отправкой.');
			textarea.focus();
			return;
		}
		// Логика отправки отзыва по желанию
		alert('Спасибо за ваш отзыв!');
		// Сброс формы
		textarea.value = '';
		feedbackArea.style.display = 'none';
		updateStars(0);
		selectedRating = 0;
		stars[stars.length - 1].focus(); // Фокус на первой звезде (1)
	});
})();