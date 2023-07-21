var chubLocation = "html"
var chubDev = true

/** file,/,,/,C,/,User,/,use,/,my-ap,/,sr,/,index.html/ 
	
	{
    "0": "file:",
    "1": "",
    "2": "",
    "3": "C:",
    "4": "Users",
    "5": "user",
    "6": "my-app",
    "7": "src",
    "8": "index.html",
	
	len is 9
	}

*/


var __loc = `${window.location.href}`
	.split("/"),
	
	__locsrc = __loc.length - 1
	
;	
	
__loc = __loc.join("/").replace(__loc[__locsrc], "")	

		
console.log(`${window.location}`, __loc)

var __router = {
	'pages': __loc + "/pages",
}

/** 
  On document load after Chub is done loading.
  Done to prevent load issues like P5.JS just in case.
*/

var chubstart = () => {

  /** 
  "Beam" a chub file into a location
  will use chub location if param 2 is undefined 
  */
  
  beamChub(__router['pages'] + "/home.chub", "html")
}

// On injectChub finished.
var chubinjected = async (locationGot) => {

}