// ==UserScript==
// @name         quality stream
// @namespace
// @version      2.0
// @description
// @author     DEV314R
// @match     *.streaminghd-serie.com/*
// @match     *.streaming-planet.com/*
// @match     *.streaming-planet.net/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
// document.querySelector ou getElementById ou getElementsByClassName ou getElementsByTagName('p');

/*
var s = ['COMPLETE'];
var clc = document.querySelectorAll(".quality-container > div > span > strong > a");
for(var i=0;i<clc.length;i++)for(var m=0;m<s.length;m++)if(clc[i].innerHTML!==s[m]){var up=clc[i].parentNode.parentNode.parentNode.parentNode.parentNode;up.parentNode.removeChild(up)}
*/
//filtre qualité et épisode
var retire=['Episode: 2','Episode : 2 VOSTFR','Episode: 2 VF','Episode : 2','Episode : 2 VF','Episode : 4 VOSTFR','Episode : 3','Episode: 3','Episode : 7 VOSTFR+VF','Episode : 4+5+6+7','Episode : 5','Episode: 5','Episode : 3+4 VF','Episode : 3+4 VF+VOSTFR','Episode : 4+5+6 VF','Episode: 14 VOSTFR',
            'Episode: 7+8','Episode : 4','Episode: 3+4 VF+VOSTFR','Episode: 3+4','Episode: 2+3 VF','Episode: 5 VF','Episode : 4 VF','Episode: 3 VF','Episode : 2 VOSTFR+VF','Episode: 4','Episode: 13+14 VOSTFR','Episode : 3 VF+VOSTFR','Episode : 6 VF+VOSTFR','Episode : 2 VF+VOSTFR','Episode : 5+6 VF','Episode : 5 VF','Episode: 11','Episode : 5+6','Episode : 9 VOSTFR','Episode : 5+6 VF+VOSTFR',
            'Episode: 6 VF','Episode: 3+4 VF','Episode: 2 VF+VOSTFR','Episode : 17 VOSTFR','Episode :11 VF','Episode: 13','Episode : 7+8 VF+VOSTFR','Episode : 9 VF+VOSTFR','Episode : 7+8','Episode : 10 VOSTFR','Episode : 7 VF+VOSTFR','Episode: 7','Episode : 8 VF+VOSTFR','Episode : 6','Episode : 7','Episode : 7 VF','Episode : 7 VOSTFR','Episode : 5 VOSTFR+VF',
            'Episode: 5+6 VF','Episode: 10-12 VF','Episode : 7+8 VF','Episode : 11 PROPER','Episode: 8','Episode: 14','Episode : 19 VOSTFR +2 VF','Episode: 16 VOSTFR','Episode : 9 VF','Episode : 4 VF+VOSTFR','Episode : 5 VF+VOSTFR','Episode: 6','Episode : 8 VF','Episode : 6 VF','Episode : 6 VOSTFR','Episode: 19','Episode : 3 VF','Episode : 3+4',
            'Episode: 6+7','Episode : 11 VF','Episode : 12 VOSTFR','Episode : 12 PROPER','Episode: 5+6','Episode : 11 VOSTFR SD','Episode: 5-9 VF','Episode : 3 VOSTFR+VF','Episode : 17+18 VF','Episode : 15 VOSTFR+VF','Episode : 10 VF','Episode: 21','Episode: 4 VF','Episode: 12','Episode : 9','Episode : 13','Episode: 15','Episode: 11 VOSTFR','Episode : 15+16 VF','Episode : 14 VOSTFR+VF','Episode: 15 VOSTFR','Episode : 7+8+9 VF','Episode : 14 VF','Episode : 4+5+6+7 VF','Episode : 15 VOSTFR','Episode : 8 VOSTFR','Episode : 8',
            'Episode: 16','Episode : 16 VF','Episode: 23','Episode : 20 VOSTFR+4 VF','Episode : 20 VOSTFR','Episode : 12','Episode: 17 VOSTFR+4 VF','Episode: 17 VOSTFR+3 VF','Episode: 18 VOSTFR','Episode: 3 VF+VOSTFR','Episode : 16 VF+VOSTFR','Episode : 18 VOSTFR','Episode: 17 VOSTFR','Episode: 9 VF','Episode: 13+14+15 VF','Episode : 4 VOSTFR+VF','Episode: 12 VOSTFR','Episode: 22','Episode : 9+10 VF','Episode: 10 VF+VOSTFR','Episode: 10','Episode : 16 VOSTFR','Episode : 13 VOSTFR','Episode : 13 VF+VOSTFR','Episode : 14 VOSTFR','Episode: 9+10 VF','Episode : 12+14 VF','Episode: 20',
            'Episode: 18','Episode : 11','Episode: 11+12',
            'R5','R6','VFQ','DVDSCR','HDCAM','HDTS','VOSTFR','TS','TSv2'];

var clc2 = document.querySelectorAll(".quality-container > div > span > strong > a");
for (var a=0;a<clc2.length;a++){
for (var j=0;j<retire.length;j++){
if (clc2[a].innerHTML==retire[j]){
var sup2=clc2[a].parentNode.parentNode.parentNode.parentNode.parentNode; //parentNode est le nombre de parent au dessu du child
sup2.parentNode.removeChild(sup2);}}}
//filtre saison
var retire1=['Arrow - Saison 8'];
var clc1 =document.querySelectorAll("#dle-content > div:nth-child(n) > h3 > a");
for (var k=0;k<clc1.length;k++) {
for (var l=0;l<retire1.length;l++){
if (clc1[k].innerHTML==retire1[l]){
var sup1=clc1[k].parentNode.parentNode;
sup1.parentNode.removeChild(sup1);}}}
//Raccourcis
document.onkeydown=function(e){
if(e.key=='ArrowLeft'){
document.querySelector("#dle-content > div:nth-child(n) > div > a:nth-child(1)").click();
}else if(e.key=='ArrowRight'){
document.querySelector("#dle-content > div:nth-child(n) > div > a:nth-child(14)").click();
}}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle("button1 {cursor:pointer;position:fixed;top:0.8vh;left:27vw; width:auto;height:auto; color:black;background-color:yellow; white-space:nowrap;text-align: center; z-index:1000; "+
               "border-radius:100px;border-width:5px;padding:3px 10px 2px;font-size:15px;font:bold Pretendo;font-weight:200;font-style:normal;letter-spacing:1px}"+
               "button1 > button1{display:none}");

//inter-link
document.body.innerHTML += ('<button1 onclick=window.open("https://www.tvtime.com/fr/to-watch")>TV Time<button1>')
                                            //window.location

//debug pour trouver le nom de la touche
/*
document.onkeydown = function(elem){
console.clear();
console.log(elem.key)}
*/

var show = false;
var style = "<style>\
	#noteTab {\
		width: 60px;\
		height: 30px;\
		background: yellow;\
		position: fixed;\
		top: 0px;\
		right:0;\
		border-radius: 0px 0px 0px 10px;\
		text-align: center;\
        font:bold Pretendo;\
		color: black;\
		cursor: pointer;\
		line-height: 30px;\
		z-index: 1000;\
	}\
	\
	#noteBox {\
		display: none;\
		width: 400px;\
		height: 430px;\
		position: fixed;\
		top: 0px;\
		right: 0px;\
		background-color: #0000;\
		z-index: 49;\
	}\
	\
	#noteInput {\
	width: 350px;\
	height: 400px;\
    color: black;\
    background-color: white;\
	margin: auto;\
	display: block;\
    position: relative;\
    top: 30px;\
	resize: both;\
    overflow: auto;\
	}\
</style>";

$("head").append(style);
$("body").append("<div id='noteTab'>Note</div>");
$("body").append("<div id='noteBox'><textarea id='noteInput'></textarea></div>");
var notes = GM_getValue("Note");
$("#noteInput").val(notes);

$("#noteTab").click(function() {
	toggleNotes();
});

$("#noteInput").keydown(function() {
    GM_setValue("Note", $(this).val());
});

$("#container").click(function() {
    GM_setValue("Note", $("#noteInput").val());
    $("#noteBox").slideUp(250);
	show = false;
});

function toggleNotes() {
	if (show) {
        GM_setValue("Note", $("#noteInput").val());
		show = false;
		$("#noteBox").slideUp(250);
	}
	else {
		show = true;
		$("#noteBox").slideDown(250);
	}
}



/*
var resulte = document.getElementById('dle-content');
var xhr = new XMLHttpRequest();

xhr.onreadystatechage = function(){
 if (xhr.readyState === 4 ){
                     //changer .responseText en .response 'element de la page 2'
resulte.innerHTML = xhr.getElementById('dle-content')
}
}
xhr.open('GET','/regarder-series/vf-hd/page/2/', true);// true=async / false=sync
xhr.send();
*/
