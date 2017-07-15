#pragma strict
function Start() {
}

function Update() {
	if (Input.GetKeyDown("left") && !Physics.Raycast(transform.position,Vector3.left,1.1)) {
		transform.position += Vector3(-1,0,0);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("right");
		gameObject.GetComponent(Shoot).Shoot(4,50,0);
		gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();
	}
	if (Input.GetKeyDown("right") && !Physics.Raycast(transform.position,Vector3.right,1.1)) {
		transform.position += Vector3(1,0,0);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("left");
		gameObject.GetComponent(Shoot).Shoot(2,-50,0);
		gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();
	}
	if (Input.GetKeyDown("up") && !Physics.Raycast(transform.position,Vector3.forward,1.1)) {
		transform.position += Vector3(0,0,1);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("down");
		gameObject.GetComponent(Shoot).Shoot(5,0,-50);
		gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();
	}
	if (Input.GetKeyDown("down") && !Physics.Raycast(transform.position,Vector3.back,1.1)) {
		transform.position += Vector3(0,0,-1);
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("up");
		gameObject.GetComponent(Shoot).Shoot(1,0,50);
		gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();
	}}