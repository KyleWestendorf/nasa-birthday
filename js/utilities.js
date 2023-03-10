export function populateDays(month, dayThirtyListElement, dayThirtyOneListElement, daysInMon) {
    if (month == "February") {
      dayThirtyListElement.classList.add("hidden");
      dayThirtyOneListElement.classList.add("hidden");
    } else if (daysInMon[month] == 30) {
      dayThirtyListElement.classList.remove("hidden");
      dayThirtyOneListElement.classList.add("hidden");
    } else {
      dayThirtyListElement.classList.remove("hidden");
      dayThirtyOneListElement.classList.remove("hidden");
    }
  }