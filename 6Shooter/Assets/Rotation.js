#pragma strict

var rotateUp = new Array [Array[0,0,0,0,0,1],Array[0,1,0,0,0,0],Array[1,0,0,0,0,0],Array[0,0,0,1,0,0],Array[0,0,1,0,0,0],Array[0,0,0,0,1,0]];
var rotateDown = new Array [Array[0,0,1,0,0,0],Array[0,1,0,0,0,0],Array[0,0,0,0,1,0],Array[0,0,0,1,0,0],Array[0,0,1,0,0,0],Array[1,0,0,0,0,0]];
var rotateRight = new Array [Array[1,0,0,0,0,0],Array[0,0,1,0,0,0],Array[0,0,0,1,0,0],Array[0,0,0,0,0,1],Array[0,0,0,0,1,0],Array[0,1,0,0,0,0]];
var rotateLeft = new Array [Array[1,0,0,0,0,0],Array[0,0,0,0,0,1],Array[0,1,0,0,0,0],Array[0,0,1,0,0,0],Array[0,0,0,0,1,0],Array[0,0,0,1,0,0]];

var currentRotation;
var rotToPerform;

function Start() {
	currentRotation = new Array [1,2,3,4,5,6];
}

function Update() {
	
}

function Rotate(direction) {
	switch(direction) {
		case "right":
			rotToPerform = rotateRight;
			VectorMultiplaction();
			transform.rotation += Quaternion.Euler(90,0,0)
		case "left":
			rotToPerform = rotateLeft;
			VectorMultiplaction();
			transform.rotation += Quaternion.Euler(-90,0,0)
		case "up":
			rotToPerform = rotateUp;
			VectorMultiplaction();
			transform.rotation += Quaternion.Euler(0,0,90)
		case "down":
			rotToPerform = rotateDown;
			VectorMultiplaction();
			transform.rotation += Quaternion.Euler(0,0,-90)
	}
}

function VectorMultiplaction() {
	var newRotation
	for (i : int in range(0,5)) {
		for (j : int in range(0,5)) {
			newRotation[i] += new Array[currentRotation[j]*rotToPerform[i][j]]
		}
	}
	currentRotation = newRotation
}