const express = require('express');
const path = require('path');
const members = require('./Members');
const app = express();



// gets all members
app.get('/api/members', (req, res) => {
    res.json(members);
});

//  set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));