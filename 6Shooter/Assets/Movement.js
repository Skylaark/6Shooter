#pragma strict

var xMovement;
var zMovement;

function Start() {
	
}

function Update() {
	if (Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.right || Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.left) {
		transform.position += Vector3(Input.GetAxis("Horizontal"),0,0);
		if (Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.right && ) {
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("right");
			gameObject.GetComponent(Shoot).Shoot(4,100,0);
			//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
		}
		if (Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.left) {
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("left");
			gameObject.GetComponent(Shoot).Shoot(2,-100,0);
			//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
		}
	}
	if (Vector3(0,0,Input.GetAxis("Vertical")) == Vector3.forward || Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.back) {
		transform.position += Vector3(0,0,Input.GetAxis("Vertical"));
		if (Vector3(0,0,Input.GetAxis("Vertical")) == Vector3.back) {
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("up");
			gameObject.GetComponent(Shoot).Shoot(5,0,-100);
			//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
		}
		if (Vector3(0,0,Input.GetAxis("Vertical")) == Vector3.forward)	 {
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("down");
			gameObject.GetComponent(Shoot).Shoot(1,0,100);
			//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
		}
	}
}
