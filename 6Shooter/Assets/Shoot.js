#pragma strict

function Start () {
//	var mesh : Mesh = 
}

function Update () {
	if(Input.GetKeyDown("d")){
		var Laser = new GameObject("Laser",CapsuleCollider,MeshFilter,MeshRenderer,Rigidbody,Light);
		Laser.GetComponent.<CapsuleCollider>().height = 1.5;
		Laser.GetComponent.<CapsuleCollider>().radius = 0.05;
		Laser.GetComponent.<CapsuleCollider>().direction = 1;
		Laser.transform.position = GameObject.Find("Player").transform.position;
		Laser.GetComponent.<Rigidbody>().velocity = Vector3(100,0,0);
		Laser.GetComponent.<Rigidbody>().useGravity = false;
		Laser.GetComponent.<Light>().color = Vector4(1,0,0,1);
		Laser.GetComponent.<Light>().intensity = 100;
		Laser.GetComponent.<Light>().range = 100;
		Laser.GetComponent.<MeshFilter>().mesh = Capsule;
	}
}
