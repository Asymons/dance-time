const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const exec = require('child_process').exec;
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const type = upload.single('upl');
const save = require('save-file');

app.use(cors());
// parse application/json
app.use(bodyParser.json());

//const blob = require('blob')
app.post('/', (req,res) => res.send("get a post"));

app.post('/single', type, async (req, res) => {
	// get video from the frontend
	const file = req.file;
	await save(file, file.originalname);

	//const userVideo = "test.mp4";
	//python call
	/*
	exec("python player1.mp4 > output.mp4", (error, stdout, stderr) => {
	  if (!error) {
	  	//const output = fs.
	  	//res.send(output.mp4)
	    console.log("Python code terminated successfully")
	  } else {
	  	console.log("Python code failed to terminate");
	  }
	});
	*/
	fs.readFile('new-dance.mp4', (err, data) => {
		res.send(data);
	});
});

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


app.get('/video/:id', function(req, res) {
	const path = req.params.id
	const stat = fs.statSync(path)
	const fileSize = stat.size
	const range = req.headers.range
	if (range) {
	  const parts = range.replace(/bytes=/, "").split("-")
	  const start = parseInt(parts[0], 10)
	  const end = parts[1] 
		? parseInt(parts[1], 10)
		: fileSize-1
	  const chunksize = (end-start)+1
	  const file = fs.createReadStream(path, {start, end})
	  const head = {
		'Content-Range': `bytes ${start}-${end}/${fileSize}`,
		'Accept-Ranges': 'bytes',
		'Content-Length': chunksize,
		'Content-Type': 'video/mp4',
	  }
	  res.writeHead(206, head);
	  file.pipe(res);
	} else {
	  const head = {
		'Content-Length': fileSize,
		'Content-Type': 'video/mp4',
	  }
	  res.writeHead(200, head)
	  fs.createReadStream(path).pipe(res)
	}
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
