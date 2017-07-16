#pragma strict

var pickupSound : AudioClip = Resources.Load("Ammo_Pick_Sound");

function Start() {

}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.name == "Player") {
		GameObject.Find("Player").GetComponent.<AudioSource>().volume = 0.2;
		GameObject.Find("Player").GetComponent.<AudioSource>().PlayOneShot(pickupSound);
		GameObject.Find("Player").GetComponent.<Movement>().Ammo = [0,0,0,0,0,0];
		Destroy(this.gameObject);
	}
}