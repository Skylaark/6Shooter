#pragma strict

var currentPosition : Vector3;
var health : int;
var mesh : Mesh;

function Start() {
	health = 1;
	mesh = Resources.Load("Assets/Enemy") as Mesh;
}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.name == "Laser")	{
		health = health - 1;
		Destroy(other.gameObject);
		if (health == 0) {
			Destroy(this.gameObject);
			var popSound : AudioClip = Resources.Load("Enemy_Pop_Sound");
			GameObject.Find("Cube").GetComponent.<AudioSource>().PlayOneShot(popSound);
		}
	}
	if(other.gameObject.name == "Player") {
		Destroy(other.gameObject);
	}
}