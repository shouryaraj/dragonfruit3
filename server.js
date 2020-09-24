const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

var public = path.join(__dirname, 'build');

app.get('/admin/index', function (req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.get('/admin/getting-started', function (req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.get('/ping', function (req, res) {
    return res.send('pong');
});
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// }); app.listen(port);

const Unit = require("./survey")
//Set up default mongoose connection with sample_weatherdata

// var key = require('./secret.js')
console.log(process.env.MONGODB_KEY)
var mongoDB = process.env.MONGODB_KEY;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log('Successfully Established Connection with MongoDB')
        }
        else {
            console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
        }
    });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post('/submitSurvey', function (req, res) {
    let data = req.body;

    console.log("BODY: ", data);

    let newQuestions = data.questions;

    let unitName = "FIT3171";


    Unit.findOne({ 'unit': unitName }, function (err, unit) {
        if (err) {
            // if an error was actually returned
            console.log(err);
        } else if (!unit) {
            // create new unit schema in the database server

            let week = [{
                number: "8",
                count: 1,
                questions: {
                    C1: newQuestions.C1,
                    B1: newQuestions.B1,
                    SR1: newQuestions.SR1,
                    A1: newQuestions.A1,
                    A2: newQuestions.A2,
                    O1: newQuestions.O1,
                    improvements: data.improvements == '' ? [] : [data.improvements]
                }
            }];
            console.log(week)

            // let date = "23/09/2020";

            new Unit({
                unit: unitName,
                week: week
            }).save().then(todo => {

                console.log("Unit was not found and is now being created");
                console.log("Unit", unit);

                return res.status(200).json({ 'Unit': 'New Unit data recorded' });

            })
                .catch(err => {
                    res.status(400).send('Adding new unit failed');
                });
        } else {
            // updates the existing unit data
            console.log("unit was found, and updating the data");

            // current week appends at last
            let fetchedWeek = unit.week[unit.week.length - 1];
            // Fetched questions from the database
            fetchedQuestions = fetchedWeek.questions;
            //Updating the improvement if it is not empty string 
            data.improvements != "" ? fetchedQuestions.improvements.push(data.improvements) : null;

            // Creating the week model according to the schema
            let week = [{
                number: fetchedWeek.number,
                count: parseInt(fetchedWeek.count, 10) + 1,
                questions: {
                    C1: (parseInt(newQuestions.C1, 10) + parseInt(fetchedQuestions.C1, 10)).toString(),
                    B1: (parseInt(newQuestions.B1, 10) + parseInt(fetchedQuestions.B1, 10)).toString(),
                    SR1: (parseInt(newQuestions.SR1, 10) + parseInt(fetchedQuestions.SR1, 10)).toString(),
                    A1: (parseInt(newQuestions.A1, 10) + parseInt(fetchedQuestions.A1, 10)).toString(),
                    A2: (parseInt(newQuestions.A2, 10) + parseInt(fetchedQuestions.A2, 10)).toString(),
                    O1: (parseInt(newQuestions.O1, 10) + parseInt(fetchedQuestions.O1, 10)).toString(),
                    improvements: fetchedQuestions.improvements
                }
            }];

            // Updating database using the query
            console.log(week[0].questions.improvements)
            unit.updateOne({ week: week }).then(() => {
                return res.status(200).json({ 'Unit': 'Unit data  updated' });
            })
                .catch(err => {
                    res.status(400).send('updating new unit failed');
                });
            // res.status(200).json({'user': 'user updated'});
        }



    });


})

// app.get('/value', function(req, res){

//     let unitName = "FIT3171";
//    // Save the new model instance, passing a callback
//    // {unit: ... }
//    // First it will find whether unit exist in the database otherwise create one and insert it
//    Unit.findOne({'unit': unitName}, function(err, user){
//     if(err){
//         // if an error was actually returned
//         console.log(err);
//     } else if ( !user ) {
//         // create new unit schema in the database server
//         new Unit({unit: "FIT3171"}).save().then(todo => {
//             console.log("Unit was not found");
//             console.log("User", user);
//             return res.status(200).json({'user': 'user created'});

//          })
//          .catch(err => {
//              res.status(400).send('Adding new todo failed');
//          });
//     } else {
//         // updates the existing unit data
//         console.log("unit was found, and this is updating the data");
//         console.log(user);
//         res.status(200).json({'user': 'user fetched'});
//     }
// });
// 
//   
// })


app.get('/getUnit', function (req, res) {
    Unit.findOne({ 'unit': "FIT3171" }, function (err, unit) {
        if (err) {
            // if an error was actually returned
            console.log(err);
            res.status(400);
        } else if (!unit) {
            // create new unit schema in the database server
            res.status(200).json({});
        } else {
            // updates the existing unit data
            console.log("request made from frontend")
            res.status(200).json(unit);
        }
    });
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('myapp listening on port ' + port);
});
