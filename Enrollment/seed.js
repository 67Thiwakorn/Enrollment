const seedEnrollments = require('./seeders/enrollmentSeeder');

await seedEnrollments();

const db = require('./models');

const seedUsers = require('./seeders/userSeeder');
const seedClasses = require('./seeders/classSeeder');
const seedEnrollments = require('./seeders/enrollmentSeeder');

async function seed(){

 await db.sequelize.sync({force:true});

 await seedUsers();
 await seedClasses();
 await seedEnrollments();

 console.log("Seed complete");
 process.exit();
}

seed();