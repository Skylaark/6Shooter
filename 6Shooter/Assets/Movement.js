#pragma strictvar Ammo : Array = new Array(0,0,0,0,0,0);var NumberOfReloadMoves = 4;var shootSpeed = 20;
function Start() {	
}

function Update() {
	if (Input.GetKeyDown("left") && Ammo[1] == 0/* && GameObject.Find("Main Camera").GetComponent.<CameraControl>().playInputAvailable*/) {		gameObject.GetComponent(Shoot).Shoot(2,shootSpeed,0,0);		Ammo[1] = NumberOfReloadMoves;		if(!Physics.Raycast(transform.position,Vector3.left,1.0)){
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("right");		}		if(gameObject.Find("Enemy") != null){
			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}
	if (Input.GetKeyDown("right")  && Ammo[3] == 0 /*&& GameObject.Find("Main Camera").GetComponent.<CameraControl>().playInputAvailable*/) {		gameObject.GetComponent(Shoot).Shoot(4,-shootSpeed,0,0);		Ammo[3] = NumberOfReloadMoves;		if(!Physics.Raycast(transform.position,Vector3.right,1.0)){
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("left");		}
		if(gameObject.Find("Enemy") != null){			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}
	if (Input.GetKeyDown("up") && Ammo[0] == 0 /*&& GameObject.Find("Main Camera").GetComponent.<CameraControl>().playInputAvailable*/) {		gameObject.GetComponent(Shoot).Shoot(1,0,-shootSpeed,1);		Ammo[0] = NumberOfReloadMoves;		if(!Physics.Raycast(transform.position,Vector3.forward,1.0)){
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("down");		}
		if(gameObject.Find("Enemy") != null){			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}
	if (Input.GetKeyDown("down") && Ammo[4] == 0 /*&& GameObject.Find("Main Camera").GetComponent.<CameraControl>().playInputAvailable*/) {		gameObject.GetComponent(Shoot).Shoot(5,0,shootSpeed,1);		Ammo[4] = NumberOfReloadMoves;		if(!Physics.Raycast(transform.position,Vector3.back,1.0)){
			gameObject.Find("Cube").GetComponent.<Rotation>().Rotate("up");		}
		if(gameObject.Find("Enemy") != null){			gameObject.Find("Enemy").GetComponent.<EnemyController>().TakeTurn();		}		Reload();
	}}function Reload(){	for(var i : int in range(0,6)){		var a : int = Ammo[i];		if(a > 0){			a -= 1;		}		Ammo[i] = a;		if(a == 0){					}	}}