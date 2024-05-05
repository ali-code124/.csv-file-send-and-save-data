// routes/upload.js

const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const UserModel = require('../routes/userdata');

const router = express.Router();

// Define storage configuration for multer
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    // Preserve the original file name and extension
    cb(null, file.originalname);
  }
});

// Configure multer with the storage settings
const upload = multer({ storage });

router.post('/upload', upload.single('userFile'), (req, res) => {
  // Read the uploaded CSV file
  const filePath = req.file.path;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      // Structure data into objects
      const user = new UserModel({
        username: row.username,
        userid: row.userid,
        password: row.password,
        email: row.email
      });

      // Save data to the database
      user.save()
        .then(() => console.log('User saved to MongoDB'))
        .catch(err => console.error('Error saving user:', err));
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      // Optionally, you can respond with a success message
      res.send('Data saved to the database');
    });
});

module.exports = router;
