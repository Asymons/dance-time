const express = require('express')
const app = express()
const port = 3000
//const blob = require('blob')
app.post('/', (req,res) => res.send("get a post"))

app.get('/single', (req, res) => {
	var fs = require('fs')
	var fetch = require ('node-fetch');
	
	// get video from the frontend
	fetch (
	   videoUrl,
	   {
	      method: 'GET',
	      headers: { 'Accept': '*/*' }
	   }
	)
	.then ((req) => req.blob())
	.then (req => req.buffer())
	.then ((blob) => {
	    console.log ('Blob size: ', blob.size);
	    fs.writeFile (
	        `player1.mp4`,
	        blob, 
	        (err) => {
	            if (err) {
	                console.log (`Error writing video ${audioIdx}`, err);
	            }
	        }
	    );
	})
	
	//const userVideo = "test.mp4"; 
	//python call
	var exec = require('child_process').exec;

	function puts(error, stdout, stderr) { sys.puts(stdout) }
	exec("python  player1.mp4 > output.mp4", function(error, stdout, stderr) {
	  if (!error) {
	  	//const output = fs.
	  	//res.send(output.mp4)
	    console.log("Python code ternimated successfully")
	  } else {
	  	console.log("Python code faield to terminate");
	  }
	});
	//wait
	//res.send()
})

app.get('/double', (req, res) => {
	var fs = require('fs')
	var fetch = require ('node-fetch');
	
	// get video from the frontend
	fetch (
	   videoUrl,
	   {
	      method: 'GET',
	      headers: { 'Accept': '*/*' }
	   }
	)
	.then ((req) => req.blob())
	.then (req => req.buffer())
	.then ((blob) => {
	    console.log ('Blob size: ', blob.size);
	    fs.writeFile (
	        `player2.mp4`,
	        blob, 
	        (err) => {
	            if (err) {
	                console.log (`Error writing video ${audioIdx}`, err);
	            }
	        }
	    );
	})
	
	//const userVideo = "test.mp4"; 
	//python call
	var exec = require('child_process').exec;

	function puts(error, stdout, stderr) { sys.puts(stdout) }
	exec("python  player2.mp4 > output.mp4", function(error, stdout, stderr) {
	  if (!error) {
	  	//const output = fs.
	  	//res.send(output.mp4)
	    console.log("Python code ternimated successfully")
	  } else {
	  	console.log("Python code faield to terminate");
	  }
	});
	//wait
	//res.send()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))