const express = require('express');
const router = express.Router();


// @route    Get api/contacts
// @desc     Get all contacts
// @access   Private

router.get('/', (req, res) => {
    res.send('Get all contacts')
});


// @route    Post api/constacts
// @desc     Add new constact
// @access   Private

router.post('/', (req, res) => {
    res.send('Add contact')
});


// @route    Put api/constacts/:id
// @desc     Update contact
// @access   Private

router.put('/:id', (req, res) => {
    res.send('Update contact')
});


// @route    Delete api/contacts/:id
// @desc     Delete contact
// @access   Private

router.delete('/:id', (req, res) => {
    res.send('Delete contact')
});

module.exports = router;
