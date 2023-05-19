
// to see databases
//show dbs

// create or use a database
// use <databasename>

// to see collections
//show collections

// empty collectiosn
db.createCollection("students")



// inserting students and mentors
db.students.insertMany([
  {
    "name":"prasanth",
    "batch":"B45WD",
    "qualification":"B.E",
    "experience" : 2,
    "taskCompletion":75,
    "gender":"male"
  },
  {
    "name":"Ajay",
    "batch":"B42WD",
    "qualification":"BCA",
    "experience" : 5,
    "taskCompletion":80,
    "gender":"male"
  },
  {
    "name":"Abdur",
    "batch":"B43WD",
    "qualification":"BCA",
    "experience" : 3,
    "taskCompletion":55,
    "gender":"male"
  },
  {
    "name":"Anitha",
    "batch":"B40WD",
    "qualification":"B.COM",
    "experience" : 1,
    "taskCompletion":45,
    "gender":"female"
  },
  {
    "name":"Anirutha",
    "batch":"B41WD",
    "qualification":"BSC",
    "experience" : 4,
    "taskCompletion":90,
    "gender":"female"
  },
  {
    "name":"sivakumar",
    "batch":"B45WD",
    "qualification":"B.E",
    "experience" : 2,
    "taskCompletion":65,
    "gender":"male"
  },
  {
    "name":"Aswin",
    "batch":"B42WD",
    "qualification":"BCA",
    "experience" : 5,
    "taskCompletion":80,
    "gender":"male"
  },
  {
    "name":"Balaji",
    "batch":"B43WD",
    "qualification":"BCA",
    "experience" : 3,
    "taskCompletion":55,
    "gender":"male"
  },
  {
    "name":"Vijipriya",
    "batch":"B40WD",
    "qualification":"B.COM",
    "experience" : 1,
    "taskCompletion":45,
    "gender":"female"
  },
  {
    "name":"Sharmila",
    "batch":"B41WD",
    "qualification":"BSC",
    "experience" : 4,
    "taskCompletion":90,
    "gender":"female"
  },
  {
    "name":"Venkat",
    "batch":"B45WD",
    "qualification":"B.E",
    "experience" : 2,
    "taskCompletion":55,
    "gender":"male"
  },
  {
    "name":"Jeeva",
    "batch":"B42WD",
    "qualification":"BCA",
    "experience" : 5,
    "taskCompletion":60,
    "gender":"male"
  },
  {
    "name":"Sathya",
    "batch":"B43WD",
    "qualification":"BCA",
    "experience" : 4,
    "taskCompletion":55,
    "gender":"male"
  },
  {
    "name":"Anitha",
    "batch":"B40WD",
    "qualification":"B.COM",
    "experience" : 1,
    "taskCompletion":45,
    "gender":"female"
  },
  {
    "name":"Anirutha",
    "batch":"B41WD",
    "qualification":"BSC",
    "experience" : 4,
    "taskCompletion":90,
    "gender":"female"
  },
  {
    "name":"Vimal",
    "batch":"B45WD",
    "qualification":"B.E",
    "experience" : 2,
    "taskCompletion":75,
    "gender":"male"
  },
  {
    "name":"Nalin",
    "batch":"B42WD",
    "qualification":"BCA",
    "experience" : 5,
    "taskCompletion":80,
    "gender":"male"
  },
  {
    "name":"Navin",
    "batch":"B43WD",
    "qualification":"BCA",
    "experience" : 3,
    "taskCompletion":55,
    "gender":"male"
  },
  {
    "name":"Radhika",
    "batch":"B40WD",
    "qualification":"B.COM",
    "experience" : 1,
    "taskCompletion":45,
    "gender":"female"
  },
  {
    "name":"Ramya",
    "batch":"B41WD",
    "qualification":"BSC",
    "experience" : 4,
    "taskCompletion":90,
    "gender":"female"
  },
  {
    "name":"Jeeva",
    "batch":"B45WD",
    "qualification":"B.E",
    "experience" : 2,
    "taskCompletion":75,
    "gender":"male"
  },
  {
    "name":"srider",
    "batch":"B42WD",
    "qualification":"BCA",
    "experience" : 5,
    "taskCompletion":80,
    "gender":"male"
  },
  {
    "name":"Sathya",
    "batch":"B43WD",
    "qualification":"BCA",
    "experience" : 3,
    "taskCompletion":55,
    "gender":"male"
  },
  {
    "name":"Anitha Kaladharan",
    "batch":"B40WD",
    "qualification":"B.COM",
    "experience" : 1,
    "taskCompletion":45,
    "gender":"female"
  },
  {
    "name":"Aswini",
    "batch":"B41WD",
    "qualification":"BSC",
    "experience" : 4,
    "taskCompletion":90,
    "gender":"female"
  },
  ])

db.mentors.insertMany([
  {
    "name":"sanjay",
    "batch":"B41WD"
  },
  {
    "name":"Ragav",
    "batch":"B42WD"
  },
  {
    "name":"Sangeetha",
    "batch":"B43WD"
  },
  {
    "name":"Chandran",
    "batch":"B44WD"
  },
  {
    "name":"Suraj",
    "batch":"B45WD"
  }
])
//crursor pointer
db.students.find({}).toArray()

db.students.find().forEach(function(stud){print(stud.name)})

db.students.updateOne(
  {_id:ObjectId("6466e88a6d834415347f67a4")},
  {"$set":{
    "taskCompletion":75
  }
}
)

//aggregation methods
 db.mentors.aggregate([
  {
    $lookup:{
      from:"students",
      localField:"batch",
      foreignField:"batch",
      as:"Bacth_students"
    }
  }
 ]);

 db.students.aggregate([
  {$match:{qualification:'B.COM'}},
  {$group :{
    _id:'$name',
    totalExperience:{$sum:'$experience'}
  }}
 ])


// plcements
db.students.find({gender:"female"})
db.students.find({experience:{$gt:3}})
db.students.find({experience:{$gte:3}})
db.students.find({experience:{$lt:3}})
db.students.find({experience:{$lte:3}})
db.students.find({experience:{$gt:2, $lt:5}})
db.students.find({experience:{$not:{$gte:2, $lte:4}}})
db.students.find(
  {
    $or:
    [
      {
        qualification:'B.E'
      },
      {
        experience:1
      }
    ]
  }
  )

// sortings
db.students.find({taskCompletion:{$gte:70}}).sort({name:1})
db.students.find({taskCompletion:{$gte:80}}).sort({experience:-1, name:1})
db.students.find({taskCompletion:{$gte:80}}).sort({experience:-1, name:1}).limit(5)
db.students.find({taskCompletion:{$gte:80}}).sort({experience:-1, name:1}).limit(5).skip(2)
  //getting all data(equivalent to select * from tablename)
  db.students.find({});

  //database for mentros
  //find query to get the mentors
//   {
//     "name":"mentor Name"
//     "batch": "b45WD" 
//     "role":"mentor"
//   }
db.students.find({name:"malik"})
db.students.updateOne({name:"malik"},{"$set":{"name":"malik kappor"}})
db.students.deleteOne({name:"joel"})
// db.students.deleteMany({batch:"B45WD"})
db.students.drop()
db.mentors.drop()
