const { exec } = require("child_process")

exec("git branch", (err, stdout, stderr) => {
	console.log(stdout)
}); 

// otra opcion // 
 const { exec } = require("child_process")

const callback = (err, stdout, stderr) => {
	console.log(stdout)
}

exec("git branch", callback ); 

// tercera opcion // 
const { exec } = require("child_process")

exec("git branch", function (err, stdout, stderr) {
	console.log(stdout)
});