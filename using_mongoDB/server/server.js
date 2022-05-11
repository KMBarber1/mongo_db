// Create a database called 'my_first_db'.
use my_first_db


// Create students collection.
db.createCollection('students')


// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}).
db.students.insert({name: 'Maggie', home_state: 'Chicago', lucky_number: 17, birthday: {month: 01, day: 05, year: 1983}})


// Create 5 students with the appropriate info.
db.students.insert({name: 'Matthew', home_state: 'Arizona', lucky_number: 69, birthday: {month: 11, day: 20, year: 1979}})

db.students.insert({name: 'Judy', home_state: 'Washington', lucky_number: 41, birthday: {month: 04, day: 04, year: 1952}})

db.students.insert({name: 'George', home_state: 'Washington', lucky_number: 84, birthday: {month: 04, day: 14, year: 1951}})

db.students.insert({name: 'April', home_state: 'California', lucky_number: 7, birthday: {month: 05, day: 16, year: 1982}})

db.students.insert({name: 'James', home_state: 'California', lucky_number: 10, birthday: {month: 11, day: 18, year: 1980}})


// Get all students.
db.students.find().pretty()


// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({home_state: {$in: ['California', 'Washington']}})


// Get all students whose lucky number is greater than 3.
db.students.find({lucky_number: {$gt: 3}})


// Get all students whose lucky number is less than or equal to 10. lte = less than equal.
db.students.find({lucky_number: {$lte: 10}})


// Get all students whose lucky number is between 1 and 9 (inclusive). gte = greater than equal and lte = less than equal.
db.students.find({$and: [{lucky_number: {$gte:1}}, {lucky_number: {$lte:9}}]})


// Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.updateMany({}, {$addToSet: {interests: ['coding', 'brunch', 'MongoDB']}}


// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name: 'Maggie'}, {$push: {interests: 'massage'}})

db.students.update({name: 'Matthew'}, {$push: {interests: 'cooking'}})

db.students.update({name: 'Judy'}, {$push: {interests: 'jewelry'}})

db.students.update({name: 'George'}, {$push: {interests: 'reading'}})

db.students.update({name: 'April'}, {$push: {interests: 'baking'}})

db.students.update({name: 'James'}, {$push: {interests: 'collecting coins'}})


// Add the interest 'taxes' into someone's interest array.
db.students.update({name: 'Matthew'}, {$push: {interests: 'taxes'}})


// Remove the 'taxes' interest you just added.
db.students.update({name: 'Matthew'}, {$pull: {interests: 'taxes'}})


// Remove all students who are from California.
db.students.deleteMany({home_state: 'California'})


// Remove a student by name.
db.students.delete({name: 'Maggie'})


// 16. Remove a student whose lucky number is greater than 5 (JUST ONE).
db.students.delete({lucky_number: {$gt: 5}})


// Add a field to each student collection called 'number_of_belts' and set it to 0. Used $set and not $addToSet as it is not an array.
db.students.updateMany({}, {$set: {number_of_belts: 0}})


// Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({home_state: 'Washington'}, {$inc: {number_of_belts: 1}})


// Rename the 'number_of_belts' field to 'belts_earned'.
db.students.updateMany({}, {$rename: {'number_of_belts': 'belts_earned'}})


// Remove the 'lucky_number' field.
db.students.updateMany({}, [{$unset: ['lucky_number']}])


// Add an 'updated_on' field, and set the value as the current date. Used $set and not $addToSet as it is not an array.
db.students.updateMany({}, {$set: {updated_on: {$currentDate: Date()}}})