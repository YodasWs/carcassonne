document.addEventListener('deviceready', function() {$=Zepto;
	$.ajax({
		type:'GET',
		dataType:'json',
		url: 'expansion.json',
		complete:function(xhr) {
			switch (xhr.status) {
			case 200:
				break;
			default:
				break;
			}
		}
	});
}, false);
	
}