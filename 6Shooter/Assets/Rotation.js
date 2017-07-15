#pragma strict
var rotateUp : Array = new Array([0,0,0,0,0,1],[0,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,0,0,0,1,0]);
var rotateDown : Array = new Array([0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[1,0,0,0,0,0]);
var rotateRight : Array = new Array([1,0,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,0,1],[0,0,0,0,1,0],[0,1,0,0,0,0]);
var rotateLeft : Array = new Array([1,0,0,0,0,0],[0,0,0,0,0,1],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0]);
var currentRotation : Array;
var rotToPerform : Array;
function Start() {
	currentRotation = new Array(1,2,3,4,5,6);
}
function Update() {
	
}
function Rotate(direction) {
	switch(direction) {
		case "right":
			rotToPerform = rotateRight;
			VectorMultiplaction();
			transform.Rotate(90,0,0);
			break;
		case "left":
			rotToPerform = rotateLeft;
			VectorMultiplaction();
			transform.Rotate(-90,0,0);
			break;
		case "up":
			rotToPerform = rotateUp;
			VectorMultiplaction();
			transform.Rotate(0,0,90);
			break;
		case "down":
			rotToPerform = rotateDown;
			VectorMultiplaction();
			transform.Rotate(0,0,-90);
			break;
		default:
			break;
	}
}
function VectorMultiplaction() {
	var newRotation : Array = [0,0,0,0,0,0];
	var c : int; 
	for (var i : int in range(0,5)) {
		for (var j : int in range(0,5)) {
			var row : Array = rotToPerform[i];
			var a : int = currentRotation[j];
			var b : int = row[j];
			c += a*b;
			newRotation[i] = c;
		}
	}
	currentRotation = newRotation;
}