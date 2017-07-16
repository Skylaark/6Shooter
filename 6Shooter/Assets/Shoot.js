#pragma strict

var mesh : Mesh;
var colours : Array = new Array(Vector4(1,0,0,1),Vector4(1,0,1,1),Vector4(0,1,0,1),Vector4(1,1,0,1),Vector4(0,0,1,1),Vector4(0,1,1,1));


function Start () {
	mesh = Resources.Load("Models/bullet",typeof(Mesh));
}

function Update () {

}

function Shoot(i : int,x : float,z : float, direction : int){
	var side : int = GameObject.Find("Cube").GetComponent.<Rotation>().currentRotation[i-1];
	var Laser = new GameObject("Laser",CapsuleCollider,MeshFilter,MeshRenderer,Rigidbody,Light);
	var colour : Vector4 = colours[side-1];

	switch(colour){
		case(Vector4(1,0,0,1)): GameObject.Find("RedSide").GetComponent.<ColourController>().makeDark();
			break;
		case(Vector4(1,0,1,1)): GameObject.Find("PinkSide").GetComponent.<ColourController>().makeDark();
			break;
		case(Vector4(0,1,0,1)): GameObject.Find("GreenSide").GetComponent.<ColourController>().makeDark();
			break;
		case(Vector4(1,1,0,1)): GameObject.Find("YellowSide").GetComponent.<ColourController>().makeDark();
			break;
		case(Vector4(0,0,1,1)): GameObject.Find("BlueSide").GetComponent.<ColourController>().makeDark();
			break;
		case(Vector4(0,1,1,1)): GameObject.Find("CyanSide").GetComponent.<ColourController>().makeDark();
			break;
	}

	Laser.GetComponent.<CapsuleCollider>().height = 1.5;
	Laser.GetComponent.<CapsuleCollider>().radius = 0.05;
	Laser.GetComponent.<CapsuleCollider>().direction = 1;
	Laser.GetComponent.<CapsuleCollider>().isTrigger = false;
	Laser.transform.position = GameObject.Find("Player").transform.position + Vector3(0, 0, 0);
	Laser.GetComponent.<Rigidbody>().useGravity = false;
	Laser.GetComponent.<Light>().color = colour;
	Laser.GetComponent.<Light>().type = 2;
	Laser.GetComponent.<Light>().intensity = 1;
	Laser.GetComponent.<Light>().range = 20;
	Laser.GetComponent.<MeshFilter>().mesh = mesh;
	Laser.GetComponent.<MeshRenderer>().material = Resources.Load("Materials/Laser"+side.ToString());
	Laser.GetComponent.<Rigidbody>().velocity = Vector3(x,0,z);
	Laser.AddComponent(BulletKill);
	Laser.transform.Rotate(0,90*Mathf.Abs(direction),0);
	var shootSound : AudioClip = Resources.Load("Laser_Shoot_Sound");
	GameObject.Find("Player").GetComponent.<AudioSource>().volume = 0.2;
	GameObject.Find("Player").GetComponent.<AudioSource>().PlayOneShot(shootSound);
}

