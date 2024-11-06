// app.js
const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());

// Routes
app.use('/api/blog', blogRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
