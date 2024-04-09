const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in PUT /like', error);
      res.sendStatus(500);
    })
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "gallery" ORDER BY "id" ASC`
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in GET', error);
      res.sendStatus(500);
    })
});

// POST /gallery
router.post('/', (req, res) => {
  const item = req.body;
  const queryText = `INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ($1, $2, $3)`;
  pool.query(queryText, [item.url, item.title, item.description])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in POST', error);
      res.sendStatus(500);
    })
})

module.exports = router;
