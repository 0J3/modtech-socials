$(() => {
	try {
		setTimeout(() => {
			$('span.FadeIn')[0].style.left = '0px';
		}, 1);
		$('span.FadeIn').fadeIn(2000).removeClass('hidden');
	} catch (error) {}
});
