#pragma strict

var currentPosition : Vector3;
var health : int;
var mesh : Mesh;

function Start() {
	health = 1;
	mesh = Resources.Load("Assets/Enemy") as Mesh;
}

function Update() {
	currentPosition = transform.position;
}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.name == "Laser")	{
		health = health - 1;
		Destroy(other.gameObject);
		if (health == 0) {
			Destroy(this.gameObject);
		}
	}
	if(other.gameObject.name == "Player") {
		Destroy(other.gameObject);
	}
}
	
function TakeTurn() {
	var playerPosition : Vector3 = gameObject.Find("Player").transform.position;
	var directionVector : Vector3 = DirectionVector(currentPosition,playerPosition);
	if (Mathf.Abs(directionVector.x) >= Mathf.Abs(directionVector.z)) { //>= forces the enemy to default to moving in the x direction if the components of directionVector are the same sizeeeeeeeee
		if (directionVector.x < 0) {
			transform.position += Vector3.right;
		}
		if (directionVector.x > 0) {
			transform.position += Vector3.left;
		}
	}
	if (Mathf.Abs(directionVector.z) > Mathf.Abs(directionVector.x)) { //>= forces the enemy to default to moving in the x direction if the components of directionVector are the same sizeeeeeeeee
		if (directionVector.z < 0) {
			transform.position += Vector3.forward;
		}
		if (directionVector.z > 0) {
			transform.position += Vector3.back;
		}
	}
}

function DirectionVector(vector1 : Vector3,vector2 : Vector3) {
	var directionVector : Vector3 = vector1 - vector2;
	return(directionVector);
}