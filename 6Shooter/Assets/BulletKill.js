#pragma strictvar frames : int = 0;
function Start() {
}function Update() {	frames++;	if(frames > 90){		Destroy(this.gameObject);	}}function OnCollisionEnter(other : Collision){	Destroy(this.gameObject);}