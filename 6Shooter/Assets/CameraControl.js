#pragma strict

var navInputAvailable : System.Boolean;
var playInputAvailable : System.Boolean;
var goToNextLevel : System.Boolean;

var cameraPosition : Vector3;
var currentLevel : int;

var nextLevelPos : Vector3;
var prevLevelPos : Vector3;
var currentLevelPos : Vector3;

var slerps : Vector3;

var level0Pos : Vector3;
var level1Pos : Vector3;
var level2Pos : Vector3;
var level3Pos : Vector3;
var level4Pos : Vector3;

var prefab : GameObject;

function Start() {
	goToNextLevel = false;
	navInputAvailable = true;
	playInputAvailable = false;
	currentLevel = 0;
	cameraPosition = transform.position;
	level0Pos = Vector3(75,150,26);
	level1Pos =	Vector3(1,22,-10);
	level2Pos = Vector3(-101,22,-10);
	level3Pos = Vector3(-165,22,-10);
	level4Pos = Vector3(-300,100,24);
}

function Update() {
	MoveCamera();
	ChangeLevel();		
}

function ChangeLevel() {
	switch (currentLevel) {
		case(0):
			nextLevelPos = level1Pos;
			currentLevelPos = level0Pos;
			prevLevelPos = level0Pos;
			break;
		case(1):
			nextLevelPos = level2Pos;
			currentLevelPos = level1Pos;
			prevLevelPos = level0Pos;
			break;
		case(2):
			nextLevelPos = level3Pos;
			currentLevelPos = level2Pos;
			prevLevelPos = level1Pos;
			break;
		case(3):
			nextLevelPos = level4Pos;
			currentLevelPos = level3Pos;
			prevLevelPos = level2Pos;
			break;
		case(4):
			nextLevelPos = level0Pos;
			currentLevelPos = level4Pos;
			prevLevelPos = level3Pos;
			break;
		default:
			break;
	}
}

function MoveCamera() {
	if (currentLevel >= 1 && Input.GetKeyDown("left") == true && navInputAvailable == true) {
		navInputAvailable = false;
		playInputAvailable = false;
		transform.position = prevLevelPos;
		currentLevel -= 1;
		navInputAvailable = true;
	}
	if (currentLevel >= 1 && Input.GetKeyDown("right") == true && navInputAvailable == true) {
		navInputAvailable = false;
		playInputAvailable = false;
		transform.position = nextLevelPos;
		currentLevel += 1;
		navInputAvailable = true;
	}
	if (currentLevel >= 1 && Input.GetKeyDown("return") == true && navInputAvailable == true) {
		navInputAvailable = false;
		LevelLoader();
		transform.position = currentLevelPos + Vector3(0,-10,0);
		playInputAvailable = true;
	}
	if (currentLevel >= 1 && Input.GetKeyDown("escape") == true && playInputAvailable == true) {
		cameraPosition = transform.position;
		playInputAvailable = false;
		LevelLoader();
		transform.position = currentLevelPos + Vector3(0,10,0);
		navInputAvailable = true;
	}
	if (goToNextLevel == true) {
		goToNextLevel = false;
		playInputAvailable = false;
		LevelLoader();
		transform.position = nextLevelPos;
		currentLevel += 1;
		navInputAvailable = true;
	}
	if (currentLevel == 0 && Input.anyKeyDown == true && navInputAvailable == true) {
		navInputAvailable = false;
		playInputAvailable = false;
		transform.position = nextLevelPos;
		currentLevel = 1;
		navInputAvailable = true;
	}
}

function LevelComplete() {
	goToNextLevel = true;	
}

function LevelLoader() {
	var clone;
	switch(currentLevel){
		case(1):
			Destroy(gameObject.Find("Level1"));
			clone = Instantiate(Resources.Load("Level1"));
			GameObject.Find("Level1(Clone)").name = "Level1";
			GameObject.Find("Player").transform.position = Vector3(2,1,-10);
			break;
		case(2):
			Destroy(gameObject.Find("Level2"));
			clone = Instantiate(Resources.Load("Level2"));
			GameObject.Find("Level2(Clone)").name = "Level2";
			GameObject.Find("Player").transform.position = Vector3(-101,1,-10);
			break;
		case(3):
			Destroy(gameObject.Find("Level3"));
			clone = Instantiate(Resources.Load("Level3"));
			GameObject.Find("Level3(Clone)").name = "Level3";
			GameObject.Find("Player").transform.position = Vector3(-166,1,-10);
			break;
		case(4):
			break;
		default:
			break;
	}
}
