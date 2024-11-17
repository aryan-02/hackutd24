const express = require('express');
const dotenv = require('dotenv');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const {PinataSDK} = require('pinata');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const upload = multer({ dest: 'uploads/' });
const pinata = new PinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY);

app.use(express.json());

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    const readableStreamForFile = fs.createReadStream(filePath);

    const result = await pinata.pinFileToIPFS(readableStreamForFile);
    fs.unlinkSync(filePath); // Remove the file after upload

    res.json({ ipfsHash: result.IpfsHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/analyze', async (req, res) => {
  try {
    const { message } = req.body;

    // Replace with your RAG agent API call
    const response = await axios.post('https://your-rag-agent-api/analyze', { message });

    res.json({ response: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});