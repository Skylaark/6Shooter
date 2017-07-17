#pragma strict

var pickupSound : AudioClip;

function Start() {
pickupSound = Resources.Load("Ammo_Pick_Sound");
}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.name == "Player") {
		GameObject.Find("Player").GetComponent.<AudioSource>().volume = 0.2;
		GameObject.Find("Player").GetComponent.<AudioSource>().PlayOneShot(pickupSound);
		GameObject.Find("Player").GetComponent.<Movement>().ReplenishAmmo();
		Destroy(this.gameObject);
	}
}