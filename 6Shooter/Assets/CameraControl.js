#pragma strict

var navInputAvailable : System.Boolean;
var playInputAvailable : System.Boolean;
var goToNextLevel : System.Boolean;

var cameraPosition;
var currentLevel;

var nextLevelPos;
var prevLevelPos;
var currentLevelPos;

var slerps : Vector3;

var level0Pos : Vector3;
var level1Pos : Vector3;
var level2Pos : Vector3;
var level3Pos : Vector3;
var level4Pos : Vector3;

function Start() {
	goToNextLevel = false;
	navInputAvailable = true;
	playInputAvailable = false;
	currentLevel = 0;
	cameraPosition : Vector3 = transform.position;
	level0Pos = Vector3(-20,215,24),Space.World;
	level1Pos =	Vector3(1,23,-10),Space.World;
	level2Pos = Vector3(100,13,-10),Space.World;
	level3Pos = Vector3(1,123,-10),Space.World;
	level4Pos = Vector3(1,13,-100),Space.World;
}

function Update() {
	MoveCamera()
	ChangeLevel()
}

function ChangeLevel() {
	switch (currentLevel) {
		case: 0
			nextLevelPos = level1Pos;
			currentLevelPos = level0Pos;
			prevLevelPos = level0Pos;
			break;
		case: 1
			nextLevelPos = level2Pos;
			currentLevelPos = level1Pos;
			prevLevelPos = level0Pos;
		case: 2
			nextLevelPos = level3Pos;
			currentLevelPos = level2Pos;
			prevLevelPos = level1Pos;
			break;
		case: 3
			nextLevelPos = level4Pos;
			currentLevelPos = level3Pos;
			prevLevelPos = level2Pos;
		case: 4
			nextLevelPos = level4Pos
			currentLevelPos = level4Pos;
			prevLevelPos = level3Pos
			break;
	}
}

function MoveCamera() {
	var journeyTimeS = 1;
	var journeyTime = 1;
	if (currentLevel === 0 && Input.anyKeyDown === true && navInputAvailable = true) {
		navInputAvailable = false;
		playInputAvailable = false;
		transform.Position = Vector3.Slerp(currentLevelPos,nextLevelPos,journeyTimeS);
		yield WaitForSeconds(journeyTimeS);
		currentLevel = 1;
		navInputAvailable = true;
	}
	if (currentLevel <= 1 && Input.GetKeyDown("left") === true && navInputAvailable = true) {
		navInputAvailable = false;
		playInputAvailable = false;
		transform.Position = Vector3.Lerp(currentLevelPos,prevLevelPos,journeyTime);
		yield WaitForSeconds(journeyTime);
		currentLevel -= 1;
		navInputAvailable = true;
	}
	if (currentLevel <= 1 && Input.GetKeyDown("right") === true && navInputAvailable = true) {
		navInputAvailable = false;
		playInputAvailable = false;
		transform.Position = Vector3.Lerp(currentLevelPos,nextLevelPos,journeyTime);
		yield WaitForSeconds(journeyTime);
		currentLevel += 1;
		navInputAvailable = true;
	}
	if (currentLevel <= 1 && Input.GetKeyDown("return") === true && navInputAvailable = true) {
		navInputAvailable = false;
		transform.Position = Vector3.Lerp(currentLevelPos,currentLevelPos - Vector3(0,-10,0),journeyTime);
		yield WaitForSeconds(journeyTime);
		playInputAvailable = true;
	}
	if (currentLevel <= 1 && Input.GetKeyDown("escape") === true && playInputAvailable = true) {
		cameraPosition = transform.position
		playInputAvailable = false;
		transform.Position = Vector3.Lerp(cameraPosition,currentLevelPos - Vector3(0,10,0),journeyTime);
		yield WaitForSeconds(journeyTime);
		navInputAvailable = true;
	}
	if (LevelComplete() = true) {
		playInputAvailable = false;
		transform.Position = Vector3.Lerp(cameraPosition,currentLevelPos - Vector3(0,10,0),journeyTime);
		yield WaitForSeconds(journeyTime);
		transform.Position = Vector3.Slerp(currentLevelPos,nextLevelPos,journeyTimeS);
		yield WaitForSeconds(journeyTimeS);
		currentLevel += 1;
		navInputAvailable = true;
	}
}

function LevelComplete() {
	return(true);
}
	
	