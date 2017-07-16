#pragma strict

public var color : String = "Red";

function Start () {
	
}

function Update () {
	
}

function makeDark() {
	GameObject.Find(color+"1").GetComponent.<MeshRenderer>().materials[0] = Resources.Load("Materials/No Name");
	GameObject.Find(color+"2").GetComponent.<MeshRenderer>().materials[0] = Resources.Load("Materials/No Name");
	GameObject.Find(color+"3").GetComponent.<MeshRenderer>().materials[0] = Resources.Load("Materials/No Name");
	GameObject.Find(color+"4").GetComponent.<MeshRenderer>().materials[0] = Resources.Load("Materials/No Name");
	GameObject.Find(color+"Light").GetComponent.<Light>().intensity = 0;
}