#pragma strict

var mesh : Mesh;

function Start () {
	mesh = Resources.Load("Assets/Bullet") as Mesh;
}

function Update () {

}

function Shoot(i,x,z){
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
	switch(GameObject.Find("Cube").GetComponent.<Rotation>().currentRotation[i]){
		case(1):
			Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Laser Red") as Material;
			break;
		case(2):
			Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Laser Blue") as Material;
			break;
		case(3):
			Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Laser Green") as Material;
			break;
		case(4):
			Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Laser Yellow") as Material;
			break;
		case(5):
			Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Laser Orange") as Material;
			break;
		case(6):
			Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Laser Purple") as Material;
			break;
		default:break;
	}
	Laser.GetComponent.<Rigidbody>().velocity = Vector3(x,0,z);
}