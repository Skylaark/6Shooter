#pragma strict

private var Laser : GameObject;


function Start () {
	var collider : CapsuleCollider = Laser.AddComponent.<CapsuleCollider>();
	var mesh : MeshRenderer = Laser.AddComponent.<MeshRenderer>();
	var body : Rigidbody = Laser.AddComponent.<Rigidbody>();
	var light : Light = Laser.AddComponent.<Light>();
}

function Update () {
	if(Input.GetAxis("horizontal")){
			Instantiate(Laser);
			Laser.GetComponent

	}
}
