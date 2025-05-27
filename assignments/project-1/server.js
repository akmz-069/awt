const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET /api/quotes - Get all quotes
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    res.json({ message: 'Quotes fetched successfully', quotes });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

// POST /api/quotes - Create a new quote
app.post('/api/quotes', async (req, res) => {
    console.log(req.body);
  const { author, content } = req.body;
  if (!content || !author) {
    return res.status(400).json({ error: 'Content and author are required' });
  }

  try {
    const newQuote = await prisma.quote.create({
      data: { author, content },
    });
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create quote' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});