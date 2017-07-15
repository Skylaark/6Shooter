#pragma strict

var xMovement;
var zMovement;

function Start() {
	
}

function Update() {
	if (Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.right || Vector3.left) {
		transform.position += Vector3(Input.GetAxis("Horizontal"),0,0);
		if (Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.right) {
			gameObject.Find("Cube").GetComponent.Rotation.Rotate("right");
			gameObject.GetComponent(Shoot).Shoot("left");
			//Force enemies to take turn
		}
		if (Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.left) {
			gameObject.Find("Cube").GetComponent.Rotation.Rotate("left");
			gameObject.GetComponent(Shoot).Shoot("right");
			// Force enemies to take turn
		}
	}
	if (Vector3(0,0,Input.GetAxis("Vertical")) == Vector3.forward || Vector3.back) {
		transform.position += Vector3(0,0,Input.GetAxis("Vertical"));
		if (Vector3(0,0,Input.GetAxis("Vertical")) == Vector3.back) {
			gameObject.Find("Cube").GetComponent.Rotation.Rotate("up");
			gameObject.GetComponent(Shoot).Shoot("down");
			//Force enemies to take turn
		}
		if (Vector3(0,0,Input.GetAxis("Vertical")) == Vector3.forward)	 {
			gameObject.Find("Cube").GetComponent.Rotation.Rotate("down");
			gameObject.GetComponent(Shoot).Shoot("up");
			//Force enemies to take turn
		}
	}
}
