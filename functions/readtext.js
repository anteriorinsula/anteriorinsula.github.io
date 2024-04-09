"use strict";



fetch("tracklists/240402-kiosk.txt")
	.then((res) => res.text())
	.then((text) => {
		const allLines = text.split(/\r\n|\n/); //split lines with regex
		for (const line of allLines) { //loop through lines
            const tracklist = document.getElementById("latestTracklist")
            const li = document.createElement("li")
            li.innerText = line
            tracklist.appendChild(li)
		}
	})
	.catch((e) => console.error(e));
