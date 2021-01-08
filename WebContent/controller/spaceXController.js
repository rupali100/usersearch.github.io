var xmlhttp = new XMLHttpRequest();
var url = "https://api.spaceXdata.com/v3/launches?limit=100";
let spaceXdata;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     spaceXdata = JSON.parse(this.responseText);
    loadSpaceXData(spaceXdata);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function loadSpaceXData(arr,flag) {
	let arrLength = arr.length;
	let i=0;
	let aSpaceX = [];
	for(i; i<=arrLength-1; i++){

	let oSpaceX = {
						space_image: arr[i].links.mission_patch_small,
						mission_name: arr[i].mission_name,
						mission_id:  arr[i].mission_id,
						launch_year:  arr[i].launch_year,
						succ_launch:  arr[i].launch_success,
						succ_landing: arr[i].rocket.first_stage.cores[0].succ_landing,
					}
					aSpaceX.push(oSpaceX);
	}
	
	filterSpaceXData(aSpaceX,flag);
	}


function filterSpaceXData(aSpaceX,filterFlag){
	if(document.getElementsByClassName("cellMain").length){
		let j =0;
		let length = document.getElementsByClassName("cellMain").length
		for(j=0;j<=length-1; j++){
			document.getElementsByClassName("cellMain").item("div").remove()
		}
	}
	let i=0;
	for(i; i<=aSpaceX.length-1; i++){
	let element = document.createElement("div")
	element.setAttribute("class","cellMain")
	element.appendChild(document.createElement("div"));
	element.childNodes[0].setAttribute("class","cell")
    element.childNodes[0].appendChild(document.createElement("img"));
	element.childNodes[0].childNodes[0].setAttribute("src",aSpaceX[i].space_image);
	element.childNodes[0].childNodes[0].setAttribute("alt","image");
	element.childNodes[0].childNodes[0].setAttribute("class","abc");
	
	element.appendChild(document.createElement("div"))
	element.childNodes[1].setAttribute("class","name")
	element.childNodes[1].appendChild(document.createElement("strong"));
	element.childNodes[1].childNodes[0].innerText = aSpaceX[i].mission_name;
		
	element.appendChild(document.createElement("div"))
	element.childNodes[2].setAttribute("class","cellId")
	element.childNodes[2].appendChild(document.createElement("span"));
	element.childNodes[2].childNodes[0].setAttribute("class","spanCell");
	element.childNodes[2].childNodes[0].appendChild(document.createElement("strong"));
	element.childNodes[2].childNodes[0].childNodes[0].innerText = "Mission Ids:"
	element.childNodes[2].appendChild(document.createElement("span"));
	element.childNodes[2].childNodes[1].innerText=aSpaceX[i].mission_id;
	
	element.appendChild(document.createElement("div"))
	element.childNodes[3].setAttribute("class","cellId")
	element.childNodes[3].appendChild(document.createElement("span"));
	element.childNodes[3].childNodes[0].setAttribute("class","spanCell");
	element.childNodes[3].childNodes[0].appendChild(document.createElement("strong"));
	element.childNodes[3].childNodes[0].childNodes[0].innerText = "Launch Year:"
	element.childNodes[3].appendChild(document.createElement("span"));
	element.childNodes[3].childNodes[1].innerText=aSpaceX[i].launch_year;
		
	element.appendChild(document.createElement("div"))
	element.childNodes[4].setAttribute("class","cellId")
	element.childNodes[4].appendChild(document.createElement("span"));
	element.childNodes[4].childNodes[0].setAttribute("class","spanCell");
	element.childNodes[4].childNodes[0].appendChild(document.createElement("strong"));
	element.childNodes[4].childNodes[0].childNodes[0].innerText = "Successful Launch:"
	element.childNodes[4].appendChild(document.createElement("span"));
	element.childNodes[4].childNodes[1].innerText=aSpaceX[i].succ_launch;
		
	element.appendChild(document.createElement("div"))
	element.childNodes[5].setAttribute("class","cellId")
	element.childNodes[5].appendChild(document.createElement("span"));
	element.childNodes[5].childNodes[0].setAttribute("class","spanCell");
	element.childNodes[5].childNodes[0].appendChild(document.createElement("strong"));
	element.childNodes[5].childNodes[0].childNodes[0].innerText = "Successful Landing:"
	element.childNodes[5].appendChild(document.createElement("span"));
	element.childNodes[5].childNodes[1].innerText=aSpaceX[i].succ_landing;
		
	document.getElementsByClassName("spaceX")[0].append(element)
	}
}


