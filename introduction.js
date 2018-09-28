 /*function sayHello(name){
     console.log('hello'+ name) //global
 }
 sayHello('hanane');
 var message='';
 //console.log(global.message);*/
//  const string = "hello world";
//  const histagram={};
//  for(let i=0; i<string.lentgh;i++){
//      const ch=string[i];
//      if(!histagram[ch]){
//          histagram[ch]=0;
//      }
//      histagram[ch]++;
//     }
//      console.log(histagram);

// var express = ('express');
// var app = express();

// console.log('hanane tsa55af!');
// var data = '';
// // // fetch('./cities5000.txt').then((resp) => resp.json() ) .then(function(data){json = data;});

// var csv = require('csv'); 
// // loads the csv module referenced above.

// var obj = csv.parse(); 
// // gets the csv module to access the required functionality
// function MyCSV(Fone, Ftwo, Fthree) {
//     this.FieldOne = Fone;
//     this.FieldTwo = Ftwo;
//     this.FieldThree = Fthree;
// }; 
// // Define the MyCSV object with parameterized constructor, this will be used for storing the data read from the csv into an array of MyCSV. You will need to define each field as shown above.
// var MyData = []; 
// // MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP. 
// obj.from.path('../THEPATHINYOURPROJECT/TOTHE/csv_FILE_YOU_WANT_TO_LOAD.csv').to.array(function (data) {
//     for (var index = 0; index < data.length; index++) {
//         MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2]));
//     }
//     console.log(MyData);
// });

// var csv = require("fast-csv");
 
// csv
//  .fromPath("./cities5000.txt")
//  .on("data", function(data){
//      console.log(data);
//  })
//  .on("end", function(){
//      console.log("done");
//  });

const fs = require('fs'); 
const csv = require('csv-parser'); //if i can use them ( npm  fs csv-parser)

fs.createReadStream('./cities5000.csv')
.pipe(csv({ separator: ',', escape : '"' }))
.on('data', function(data){
    try {
        console.log("gehoas is: "+data.geonameid);
        console.log("I'm hungry is: "+data.name);

        //perform the operation
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    //some final operation
});  
 //charger le fichier qui contient les donnees sur les villes dans une variable d'une maniere structure cherhcer un moyen qui prend les donn/e et les stocke dans un tab de 2 dim 