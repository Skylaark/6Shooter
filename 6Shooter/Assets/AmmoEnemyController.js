#pragma strict

var currentPosition : Vector3;
var health : int;
var mesh : Mesh;

function Start() {
	health = 1;
	mesh = Resources.Load("Models/bullet",typeof(Mesh));
}

function Update() {
	currentPosition = transform.position;
}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.name == "Laser")	{
		health = health - 1;
		Destroy(other.gameObject);
		if (health == 0) {
			var ammoPack = new GameObject("AmmoPack",SphereCollider,MeshFilter,MeshRenderer,Rigidbody,Light,Ammo);
			ammoPack.GetComponent.<SphereCollider>().radius = 0.25;
			ammoPack.transform.position = GameObject.Find("AmmoEnemy").transform.position;
			ammoPack.GetComponent.<SphereCollider>().isTrigger = true;
			ammoPack.GetComponent.<Rigidbody>().useGravity = false;
			ammoPack.GetComponent.<Light>().color = Vector4(1,1,1,0.5);
			ammoPack.GetComponent.<Light>().type = 1;
			ammoPack.GetComponent.<Light>().intensity = 2;
			ammoPack.GetComponent.<Light>().range = 1;
			ammoPack.GetComponent.<Light>().transform.rotation = Quaternion.Euler(Vector3(90,0,0));
			ammoPack.GetComponent.<MeshFilter>().mesh = mesh;
			ammoPack.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Ammo");
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