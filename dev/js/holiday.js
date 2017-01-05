var today = new Date();
var holiday = JapaneseHolidays.isHoliday(today);
if(holiday) {
  console.log("今日は " + holiday + " です");
  $('#date-selector li.tab.holiday a').addClass('active');
} else {
  console.log("今日は祝日ではありません");
}
