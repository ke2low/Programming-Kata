let talkingCalendar = function(date) {
  const array = date.split("/");
  const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"];

  if (array[1][0] === "0") {
    array[1] = array[1].split("").splice(1,1).join("");
  }
  if (array[2][0] === "0") {
    array[2] = array[2].split("").splice(1,1).join("");
  }

  const dayEnding = function(day) {
    const ending = {  1 : "st", 2 : "nd", 3 : "rd"};
    let defaultEnding = "th";
    day = parseInt(day);
    if (day === 1 || day === 2 || day === 3) {
      return ending[day];
    } else  {
      return defaultEnding;
    }
  };
  
  return (monthArr[parseInt(array[1]) - 1] + " " + array[2] + dayEnding(array[2]) + ", " + array[0]);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));