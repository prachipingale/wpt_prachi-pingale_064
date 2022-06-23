
const express = require('express');
const app = express();
 const cors= require('cors');
const mysql = require('mysql2');
app.use(express.static('abc'));

 app.use(cors());
 const bodyParser = require('body-parser');

let bookdata={
 host:'localhost',
 user:'root',
 password:'cdac',
 database:'paper',
 port:3306,
};

const con = mysql.createConnection(bookdata);


// app.use(express.static('abc'));
//  app.use(bodyParser.json()); // support json encoded bodies
//  app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



// var result;

// app.post('/poc1', function (req, res) {
	
// 		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
//     	var xyz ={ v1:37, v2:35};
//         res.send(xyz);
//     });


app.get('/mock', function (req, res) {
         
	let x = req.query.bookid;
	let y = req.query.bookname;
	let z = req.query.price;
	
    console.log(x);
    console.log(y);
    console.log(z);		
    
 con.query('insert into book (bookid,bookname,price) values (?,?,?)',[x,y,z],(err,row)=>{
	if(err){
		console.log(' not inserted...');
	}
	else if(row.affectedRows>0){
		console.log(' data inserted..');
	}
 })

		});
 app.get('/show',(req,res)=>{
    showContent();
  con.query('select * from book ',[],(err,row)=>{
	    if(err){
          console.log(' content not loaded '+err);
        }
//    else if(row){}
         res.send(row)
    })
 });



app.listen(900,()=> {
    console.log("server listening at port 8081...");
});