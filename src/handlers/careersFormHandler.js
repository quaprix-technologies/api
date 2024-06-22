const { sendMail } = require('../utils');

const careersFormHandler = async(req, res) => {
  try {
    const { to, subject, text } = req.body;
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const mailOptions = {
      to,
      subject,
      text,
      attachments: [{
        filename: file.originalname,
        content: file.buffer
      }],
    };
    await sendMail(mailOptions, res);
  } catch (error) {
    console.error('Error handling careers form:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = careersFormHandler;
