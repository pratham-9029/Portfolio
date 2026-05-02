const path = require('path');
const portfolioModel = require('../models/portfolioModel');

const getHomePage = (req, res) => {
  const contactStatus = req.query.contact === 'success' ? 'success' : null;

  res.render('index', {
    title: `${portfolioModel.profile.name} | ${portfolioModel.profile.role}`,
    profile: portfolioModel.profile,
    stats: portfolioModel.stats,
    techStack: portfolioModel.techStack,
    projects: portfolioModel.projects,
    contactStatus,
  });
};

const downloadResume = (req, res) => {
  const resumePath = path.join(
    __dirname,
    '..',
    'public',
    'resume',
    'Pratham-Prajapati-Resume.pdf'
  );

  res.download(resumePath, 'Pratham-Prajapati-Resume.pdf', (error) => {
    if (!res.headersSent && error) {
      res.status(404).send('Resume file not found.');
    }
  });
};

const submitContactForm = (req, res) => {
  const { name, email, subject, message } = req.body;

  const contactSubmission = {
    name,
    email,
    subject,
    message,
    receivedAt: new Date().toISOString(),
  };

  console.log('New portfolio contact submission:', contactSubmission);

  res.redirect('/?contact=success#contact');
};

module.exports = {
  getHomePage,
  downloadResume,
  submitContactForm,
};
