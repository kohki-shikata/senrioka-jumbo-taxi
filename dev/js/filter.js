$('ul.tabs').tabs('select_tab', 'tab_id');

$('#sel-dms').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dms').css("display","block");
	} else {
		$('.tt li.dms').css("display","none");
	}
});

$('#sel-dm5').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dm5').css("display","block");
	} else {
		$('.tt li.dm5').css("display","none");
	}
});

$('#sel-dmm').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dmm').css("display","block");
	} else {
		$('.tt li.dmm').css("display","none");
	}
});
