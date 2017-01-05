$(document).ready(function(){
  $('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
    }
  );
  $('.collapsible').collapsible();
  $('.modal').modal();
});

$('ul.tabs').tabs('select_tab', 'tab_id');

$('#annotation .dms.selector [type=checkbox]').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dms').css("display","block");
	} else {
		$('.tt li.dms').css("display","none");
	}
});

$('#annotation .dm5.selector [type=checkbox]').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dm5').css("display","block");
	} else {
		$('.tt li.dm5').css("display","none");
	}
});

$('#annotation .dmm.selector [type=checkbox]').change(function(){
	if ($(this).is(':checked')) {
		$('.tt li.dmm').css("display","block");
	} else {
		$('.tt li.dmm').css("display","none");
	}
});
