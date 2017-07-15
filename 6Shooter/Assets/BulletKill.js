#pragma strictvar insidePlayer : System.Boolean = true;
function Start() {
}function OnTriggerEnter(other : Collider){	if(!insidePlayer){		Destroy(this.gameObject);	}}function OnTriggerExit(other : Collider){	insidePlayer = false;}