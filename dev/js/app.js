$(document).ready(function(){
  $('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
    }
  );
  $('.collapsible').collapsible();
  $('.modal').modal();
});

$('ul.tabs').tabs('select_tab', 'tab_id');

$('#sel-dms[type=checkbox]').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dms').css("display","block");
	} else {
		$('.tt li.dms').css("display","none");
	}
});

$('#sel-dm5[type=checkbox]').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dm5').css("display","block");
	} else {
		$('.tt li.dm5').css("display","none");
	}
});

$('#sel-dmm[type=checkbox]').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dmm').css("display","block");
	} else {
		$('.tt li.dmm').css("display","none");
	}
});
