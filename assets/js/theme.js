$('.datepicker').each(function(){
	var picker = new Pikaday({
		field: this
	});
});

$('.btn_res_image').on('click', function() {
	$('.res_image').empty();
	$('.error_text').empty();
	if($('.image_num').val()>3000){
		$('.error_text').append('3000以下を入力してくださいー');
	} else {
		for (let index = 0; index < $('.image_num').val(); index++) {
			$('.res_image').append('<img class="img-fluid image" src="assets/img/avatars/200468.png">');
		}
		var element = $(".res_image");
		html2canvas(element, { onrendered: function(canvas) {
			var imgData = canvas.toDataURL();
			var newData = imgData.replace(/^data:image\/png/, "data:application/octet-stream");
			$(".btn_image_dl").attr("download", "hueru_layla_san.png").attr("href", newData);
			$('.btn_image_dl').show();
		}});

	}

});
