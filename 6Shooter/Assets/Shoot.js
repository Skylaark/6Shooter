#pragma strict

var mesh : Mesh;

function Start () {
	mesh = Resources.Load("Assets/Bullet") as Mesh;
}

function Update () {
	if(Vector3(Input.GetAxis("Horizontal"),0,0) == Vector3.right || Vector3.left){
		var Laser = new GameObject("Laser",CapsuleCollider,MeshFilter,MeshRenderer,Rigidbody,Light);
		Laser.GetComponent.<CapsuleCollider>().height = 1.5;
		Laser.GetComponent.<CapsuleCollider>().radius = 0.05;
		Laser.GetComponent.<CapsuleCollider>().direction = 1;
		Laser.transform.position = GameObject.Find("Player").transform.position;
		Laser.GetComponent.<Rigidbody>().useGravity = false;
		Laser.GetComponent.<Light>().color = Vector4(1,0,0,1);
		Laser.GetComponent.<Light>().intensity = 50;
		Laser.GetComponent.<Light>().range = 50;
		Laser.GetComponent.<MeshFilter>().mesh = mesh;
		Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Assets/Laser Material") as Material;
		Laser.GetComponent.<Rigidbody>().velocity = Vector3(100*Input.GetAxis("Horizontal"),0,0);

	}
}
