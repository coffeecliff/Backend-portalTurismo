const express = require('express');
const router = express.Router();
const contact = require('../controllers/contactController')

router.post('/', contact.createContact);

router.get('/',contact.listContacts);



module.exports = router;