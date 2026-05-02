const express = require('express');
const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.get('/', portfolioController.getHomePage);
router.get('/download-resume', portfolioController.downloadResume);
router.post('/contact', portfolioController.submitContactForm);

module.exports = router;
