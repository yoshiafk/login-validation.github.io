const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function validate() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if (email != "" && password != "") {
		return true;
	} else {
		alert('Please input your login correctly!');
	}
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});