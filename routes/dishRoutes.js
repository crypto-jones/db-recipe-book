const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

// Get All Dishes
router.get('/', (req, res) => {
  db('dishes')
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get Dish By ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('dishes')
    .where({ id })
    .first()
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({ message: 'Dish not found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Create New Dish
router.post('/', (req, res) => {
  const name = req.body;

  db.insert(name)
    .into('dishes')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Update Dish
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('dishes')
    .where({ id })
    .update(changes)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to update' });
      }
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err.message));
});

// Delete Dish
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('dishes')
    .where({ id })
    .del(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
