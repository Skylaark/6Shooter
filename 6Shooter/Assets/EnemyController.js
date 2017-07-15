#pragma strict
/*
var currentPosition : Vector3;
var health : int;
var mesh : Mesh;

function Start() {
	health = 1;
	currentPosition = Vector3(10,0,10);
	mesh = Resources.Load("Assets/Enemy") as Mesh;
}

function Update() {
	
}

function OnCollisionEnter(col : Collision) {	if(col.gameObject.name == "laser")	{
		Destroy(this);
		Destroy(col.gameObject);
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
	if (Mathf.Abs(directionVector.z) >= Mathf.Abs(directionVector.z)) { //>= forces the enemy to default to moving in the x direction if the components of directionVector are the same sizeeeeeeeee
		if (directionVector.z < 0) {
			transform.position += Vector3.forward;
		}
		if (directionVector.z > 0) {
			transform.position += Vector3.back;
		}
	}
}

function DirectionVector(vector1,vector2) {
	var directionVector : Vector3 = vector2 - vector1;
	return(directionVector);
}
*/