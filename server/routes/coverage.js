import express from 'express';
import { checkCoverage } from '../services/coverage.js';

const router = express.Router();

router.get('/check', async (req, res) => {
  const { eircode } = req.query;

  if (!eircode) {
    return res.status(400).json({
      error: 'Eircode is required',
      timestamp: new Date().toISOString()
    });
  }

  try {
    const result = await checkCoverage(eircode);
    res.json(result);
  } catch (error) {
    console.error('Coverage check failed:', error);
    res.status(500).json({
      error: error.message || 'Failed to check coverage',
      timestamp: new Date().toISOString()
    });
  }
});

export default router;