#pragma strict
var rotateUp : Array = new Array([0,0,0,0,0,1],[0,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,0,0,0,1,0]);
var rotateDown : Array = new Array([0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,1],[1,0,0,0,0,0]);
var rotateRight : Array = new Array([1,0,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,0,1],[0,0,0,0,1,0],[0,1,0,0,0,0]);
var rotateLeft : Array = new Array([1,0,0,0,0,0],[0,0,0,0,0,1],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0]);
var currentRotation : Array;
var rotToPerform : Array;

var anim : Animator;
function Start() {
	currentRotation = Array(1,2,3,4,5,6);
	anim = GetComponent.<Animator>();
}
function Update() {
	
}
function Rotate(direction) {	var waitTime : float = 35/60;
	switch(direction) {
		case "right":
			rotToPerform = rotateLeft;//			anim.animToPlay = 10*currentRotation[2] + currentRotation[3];			Debug.Log("cube_rotate_"+currentRotation[2]+"_"+currentRotation[3]);
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);			yield WaitForSeconds(waitTime);
			GameObject.Find("GameObject").transform.Rotate(0,0,90,Space.World);//			anim.animToPlay = 0;
			break;
		case "left":
			rotToPerform = rotateRight;//			anim.animToPlay = 10*currentRotation[2] + currentRotation[1];			Debug.Log("cube_rotate_"+currentRotation[2]+"_"+currentRotation[1]);
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);
			yield WaitForSeconds(waitTime);
			GameObject.Find("GameObject").transform.Rotate(0,0,-90,Space.World);//			anim.animToPlay = 0;
			break;
		case "up":
			rotToPerform = rotateDown;//			anim.animToPlay = 10*currentRotation[2] + currentRotation[0];			Debug.Log("cube_rotate_"+currentRotation[2]+"_"+currentRotation[0]);
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);
			yield WaitForSeconds(waitTime);
			GameObject.Find("GameObject").transform.Rotate(-90,0,0,Space.World);//			anim.animToPlay = 0;
			break;
		case "down":
			rotToPerform = rotateUp;//			anim.animToPlay = 10*currentRotation[2] + currentRotation[4];			Debug.Log("cube_rotate_"+currentRotation[2]+"_"+currentRotation[4]);
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);
			yield WaitForSeconds(waitTime);
			GameObject.Find("GameObject").transform.Rotate(90,0,0,Space.World);//			anim.animToPlay = 0;
			break;
		default:
			break;
	}
}
function VectorMultiplication(vector : Array, RotToPerform : Array) {
	var newRotation : Array = [0,0,0,0,0,0];	var c : int; 
	for (var i : int in range(0,6)) {		c = 0; 		var row : Array = RotToPerform[i];
		for (var j : int in range(0,6)) {
			var a : int = vector[j];
			var b : int = row[j];
			c += a*b;
		}		newRotation[i] = c;
	}
	return newRotation;
}