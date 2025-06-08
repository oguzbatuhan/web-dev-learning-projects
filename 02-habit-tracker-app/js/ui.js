// dom
const buttonNewMission = document.getElementById("button-new-mission");
const inputNewMission = document.getElementById("input-new-mission");
const buttonDropdownColor = document.getElementById("button-dropdown-color");
const dropdownColorAdd = document.getElementById("dropdown-color-add");
const dropdownColorAddItems = document.querySelectorAll(
  "#dropdown-color-add-items .dropdown-item"
);
const dropdownDayAdd = document.getElementById("dropdown-day-add");
const dropdownDayAddItems = document.querySelectorAll(
  "#dropdown-day-add-items .dropdown-item"
);

export {
  buttonNewMission,
  inputNewMission,
  buttonDropdownColor,
  dropdownColorAdd,
  dropdownColorAddItems,
  dropdownDayAdd,
  dropdownDayAddItems,
};
