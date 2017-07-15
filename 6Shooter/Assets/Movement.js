#pragma strict

function Start() {
	
}

function Update() {
	if (Input.GetKeyDown("left") === true) {
		transform.position += Vector3(1,0,0);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("right");
		gameObject.GetComponent(Shoot).Shoot(4,100,0);
		//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
	}
	if (Input.GetKeyDown("right") === true) {
		transform.position += Vector3(-1,0,0);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("left");
		gameObject.GetComponent(Shoot).Shoot(2,-100,0);
		//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
	}
	if (Input.GetKeyDown("up") === true) {
		transform.position += Vector3(0,0,-1);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("down");
		gameObject.GetComponent(Shoot).Shoot(5,0,-100);
		//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
	}
	if (Input.GetKeyDown("down") === true) {
		transform.position += Vector3(0,0,1);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("up");
		gameObject.GetComponent(Shoot).Shoot(1,0,100);
		//gameObject.Find("Enemy").GetComponent.EnemyController.TakeTurn();
	}
}