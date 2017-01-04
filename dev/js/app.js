$(document).ready(function(){
  $('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
    }
  );
  $('.modal').modal();
});

$('ul.tabs').tabs('select_tab', 'tab_id');
