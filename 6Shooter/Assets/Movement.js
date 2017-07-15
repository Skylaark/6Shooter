#pragma strictvar Ammo : Array = new Array(0,0,0,0,0,0);var NumberOfReloadMoves = 4;
function Start() {	
}

function Update() {
	if (Input.GetKeyDown("left") && !Physics.Raycast(transform.position,Vector3.left,1.0) && Ammo[1] == 0) {
		transform.position += Vector3(-1,0,0);		gameObject.GetComponent(Shoot).Shoot(2,50,0,0);		Ammo[1] = NumberOfReloadMoves;
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("right");		if(gameObject.Find("Enemy") != null){
			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}
	if (Input.GetKeyDown("right") && !Physics.Raycast(transform.position,Vector3.right,1.0) && Ammo[3] == 0) {
		transform.position += Vector3(1,0,0);		gameObject.GetComponent(Shoot).Shoot(4,-50,0,0);		Ammo[3] = NumberOfReloadMoves;
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("left");
		if(gameObject.Find("Enemy") != null){			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}
	if (Input.GetKeyDown("up") && !Physics.Raycast(transform.position,Vector3.forward,1.0) && Ammo[0] == 0) {
		transform.position += Vector3(0,0,1);		gameObject.GetComponent(Shoot).Shoot(1,0,-50,1);		Ammo[0] = NumberOfReloadMoves;
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("down");
		if(gameObject.Find("Enemy") != null){			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}
	if (Input.GetKeyDown("down") && !Physics.Raycast(transform.position,Vector3.back,1.0) && Ammo[4] == 0) {
		transform.position += Vector3(0,0,-1);		gameObject.GetComponent(Shoot).Shoot(5,0,50,1);		Ammo[4] = NumberOfReloadMoves;
		gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("up");
		if(gameObject.Find("Enemy") != null){			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}}function Reload(){	for(var i : int in range(0,6)){		var a : int = Ammo[i];		if(a > 0){			a -= 1;		}		Ammo[i] = a;	}}