"use strict";

console.log("hello jqueryStarter Script");

$(document).ready(function () {

//vanilla javascript example: 
var topArticle = document.getElementById("top-article");

//jquery sytnax below: 
var article = $("#top-article");

console.log("topArticle", topArticle);
console.log("article", article[0]);

		/////select by tag name/////

//vanilla javascript example:
var allButtons = document.getElementsByTagName("button");

//jquery syntax below:
var button = $("button");
console.log("button", button, button.html());

		/////select by class/////

//vanilla javascript example:
var mainArticles = document.getElementsByClassName("article--main");
console.log("mainArticles", mainArticles);

//jquery syntax below:
$(".article--main").each(function(arrayIndex, currentElement) {
	console.log(arrayIndex, $(currentElement).html());
	});

		//////Select by Attribute/////
var umbrellaElement = $("h1[umbrella='open']");
console.log("umbrella text: ", umbrellaElement.html());

//Select children
"use strict";

console.log("all children: ", $(".container").children()); //There are two children elements

//Select specific children
console.log("the h1: ", $(".container").children("h1"));
console.log("the section: ", $(".container").children("section"));

//Select specific child index (useful for ul/ol)
//Example of chaining selectors
console.log("third li: ", $("#letters").children(".letter").eq(2).html());

//Finding parent DOM elements
console.log($(".album").parents(".song-container").attr("index"));

		/////Finding an element////
var album = $(".container").find(".album");
console.log("album", album.html());

//jquery get my list of songs
function functionIWantjQueryToExecute(songList) {
      console.log(songList.songs);

      for (var i = 0; i < songList.songs.length; i++) {
        var currentSong = songList.songs[i];
        $("#list-of-songs").append("<h1>"+ currentSong.title +"</h1>");
        $("#list-of-songs").append("<div>Performed by " + currentSong.artist + "</div>");
        $("#list-of-songs").append("<div>On the album " + currentSong.album + "</div>");
      }
    }

//ajax call
$.ajax({
	url:"javascripts/songs.json"
}).done(functionIWantjQueryToExecute);





});