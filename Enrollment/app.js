const enrollmentRoutes = require('./routes/enrollmentRoutes');

app.use("/", enrollmentRoutes);

app.use('/enrollments', enrollmentRoutes);
app.use('/reports', enrollmentRoutes);

const express = require('express');
const app = express();
const db = require('./models');

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

const enrollmentRoutes = require('./routes/enrollmentRoutes');

app.use('/enrollments', enrollmentRoutes);
app.use('/reports', enrollmentRoutes);

db.sequelize.sync().then(()=>{
  app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
  });
});