// version corta // 
const { spawn } = require("child_process");
const result = spawn("git", ["branch"]); 

const callback = (data) => {
    console.log(`stdout: ${data}`);
};

result.stdout.on("data", callback)

/* // version corta // 
const { spawn } = require("child_process");
const result = spawn("git", ["branch"]); 

result.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`)
})

// otra version para el console.log // 
console.log("Stdout: " + data)*/