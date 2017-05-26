const Promise = require('bluebird');
const db = require('/Users/ana/LASTSTRETCH/attempt/attempt4/senior-enrichment/db');
const Campus = require('/Users/ana/LASTSTRETCH/attempt/attempt4/senior-enrichment/db/models/campus');
const Student = require('/Users/ana/LASTSTRETCH/attempt/attempt4/senior-enrichment/db/models/student');

const data = {


  student: [
    {name: "Claire", campus: {name: "Sweet Potato Campus", textContent:"Sweetness from the Gods", image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg"}},
    {name: "Kaisin", campus: {name: "Fries Campus", textContent:"Crispy Campus", image: "https://i.ytimg.com/vi/ETTyVQrUZt8/maxresdefault.jpg"}},
    {name: "Julia", campus: {name: "Baked Potato Campus", textContent:"Healthy Campus", image:"http://images.media-allrecipes.com/userphotos/560x315/613276.jpg" }},
    {name: "Allie", campus: {name: "Sweet Fries Campus", textContent:"Sweet Potato-y Crispy Campus"}}
  ]
};

db.sync()
.then(function () {
  console.log("Dropped old data, now inserting data");
  const creatingStudents = data.student.map(function (student) {
    return Student.create(student, { include: [{model: Campus, as: 'campus'} ] });
  });
  return Promise.all(creatingStudents);
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
