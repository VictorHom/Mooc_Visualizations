'use strict';
//helper to go through the csv file to get the unique course codes
function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
    let courses = {};
    rl.on('line', function (line) {
        let courseCode = line.split(",")[1].trim();
        if (courses[courseCode] === undefined){
        	courses[courseCode] = true;
		      fs.appendFile('courseCodes.txt', courseCode+"\n", (err) => { 
						if (err) throw err;
					});
        }

    });
    
    rl.on('close', function (line) {
        console.log('done reading file.');
    });
}
processFile('./dataverse_files/HMXPC13_DI_v2_5-14-14.csv');