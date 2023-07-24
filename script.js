//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
function hideall() { //function to hide all pages
	for (let onepage of allpages) { //go through all subtopic pages
		onepage.style.display = "none"; //hide it
	}
}
hideall();
function show(pgno) { //function to show selected page no
	hideall();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#page" + pgno);
	//show the page
	onepage.style.display = "block";
}
show(1);
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
	show(1);
});
page2btn.addEventListener("click", function () {
	show(2);
});
page3btn.addEventListener("click", function () {
	show(3);
});

/*for menu */
const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
const menuShow = document.querySelector("#menuList.menuShow");
function toggleMenus() { /*open and close menu*/
	menuItemsList.classList.toggle("menuShow");
	//if (menuItemsList.style.display == "block")
	//	menuItemsList.style.display = "none";
	//else menuItemsList.style.display = "block";
}//can optimize using toggle class with css transitions

console.log(window.innerWidth);

/*If screen width <= 800px, hide the menu item list on page load*/
if (window.innerWidth <= 800) {
	document.addEventListener("DOMContentLoaded", toggleMenus);
}

/*For page 1*/
/*Get all the buttons*/
const leafButton = document.getElementById("leafButton");
const branchButton = document.getElementById("branchButton");
const trunkButton = document.getElementById("trunkButton");
const rootButton = document.getElementById("rootButton");

/*For showing the information when the player clicks on the buttons*/
function toggleInfo(infoClass) {
	/*Get the containers to toggle*/
	var info = document.getElementsByClassName(infoClass);
	/*loop twice because words and image are separate*/
	for (var i = 0; i < 2; i++) {
		if (info[i].style.display == "none") {
			info[i].style.display = "block";
		}
		else {
			info[i].style.display = "none";
		}
	}
}

leafButton.addEventListener("click", function () { toggleInfo("leaves"); });
branchButton.addEventListener("click", function () { toggleInfo("branch"); });
trunkButton.addEventListener("click", function () { toggleInfo("trunk"); });
rootButton.addEventListener("click", function () { toggleInfo("roots"); });