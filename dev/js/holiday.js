var today = new Date();
var holiday = JapaneseHolidays.isHoliday(today);
var date = now.getDay();
if(holiday) {
  console.log("今日は " + holiday + " です");
  $('#date-selector li.tab.holiday a').addClass('active');
} else if(date === 0 || date === 6) {
  $('#date-selector li.tab.holiday a').addClass('active');
}
