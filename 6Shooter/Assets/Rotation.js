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
	anim = GetComponent("Animator");
}
function Update() {
	
}
function Rotate(direction) {	var waitTime : float = 35/60;	var thudSound : AudioClip = Resources.Load("Thud_Sound");
	switch(direction) {
		case "right":
			rotToPerform = rotateRight;
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);
			GameObject.Find("GameObject").transform.Rotate(0,0,45,Space.World);			GameObject.Find("Player").transform.position += Vector3(-0.5,Mathf.Sqrt(2)/2,0);			yield WaitForSeconds(0.3);			GameObject.Find("GameObject").transform.Rotate(0,0,45,Space.World);			GameObject.Find("Player").transform.position += Vector3(-0.5,-Mathf.Sqrt(2)/2,0);
			break;
		case "left":
			rotToPerform = rotateLeft;
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);
			GameObject.Find("GameObject").transform.Rotate(0,0,-45,Space.World);			GameObject.Find("Player").transform.position += Vector3(0.5,Mathf.Sqrt(2)/2,0);			yield WaitForSeconds(0.3);			GameObject.Find("GameObject").transform.Rotate(0,0,-45,Space.World);			GameObject.Find("Player").transform.position += Vector3(0.5,-Mathf.Sqrt(2)/2,0);
			break;
		case "up":
			rotToPerform = rotateUp;
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);
			GameObject.Find("GameObject").transform.Rotate(-45,0,0,Space.World);			GameObject.Find("Player").transform.position += Vector3(0,Mathf.Sqrt(2)/2,-0.5);			yield WaitForSeconds(0.3);			GameObject.Find("GameObject").transform.Rotate(-45,0,0,Space.World);			GameObject.Find("Player").transform.position += Vector3(0,-Mathf.Sqrt(2)/2,-0.5);
			break;
		case "down":
			rotToPerform = rotateDown;
			currentRotation = VectorMultiplication(currentRotation, rotToPerform);
			GameObject.Find("Player").GetComponent.<Movement>().Ammo = VectorMultiplication(GameObject.Find("Player").GetComponent.<Movement>().Ammo, rotToPerform);
			GameObject.Find("GameObject").transform.Rotate(45,0,0,Space.World);			GameObject.Find("Player").transform.position += Vector3(0,Mathf.Sqrt(2)/2,0.5);			yield WaitForSeconds(0.3);			GameObject.Find("GameObject").transform.Rotate(45,0,0,Space.World);			GameObject.Find("Player").transform.position += Vector3(0,-Mathf.Sqrt(2)/2,0.5);
			break;
		default:
			break;
	}	GameObject.Find("Cube").GetComponent.<AudioSource>().PlayOneShot(thudSound);
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