import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();
const API_KEY = process.env.VIMAR_API_KEY;

router.get('/check', async (req: Request, res: Response) => {
  const { eircode } = req.query;

  if (!eircode) {
    return res.status(400).json({ 
      error: 'Eircode is required',
      timestamp: new Date().toISOString()
    });
  }

  try {
    const encodedEircode = encodeURIComponent(String(eircode).trim());
    const url = `https://wh.regionalbroadband.ie/vimar/qualify?api_key=${API_KEY}&eircode=${encodedEircode}`;

    console.log('Making API request to:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'X-API-Key': API_KEY,
      },
    });

    const responseHeaders = Object.fromEntries(response.headers.entries());
    const responseText = await response.text();

    // Create debug information
    const debugInfo = {
      requestUrl: url,
      timestamp: new Date().toISOString(),
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
      body: responseText
    };

    if (!response.ok) {
      console.error('API error:', debugInfo);
      return res.status(response.status).json({
        error: `API request failed with status ${response.status}`,
        debug: debugInfo
      });
    }

    try {
      const data = JSON.parse(responseText);
      return res.status(200).json({
        data,
        debug: debugInfo
      });
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return res.status(500).json({
        error: 'Invalid JSON response from API',
        debug: debugInfo
      });
    }

  } catch (error) {
    console.error('Coverage check failed:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to check coverage',
      timestamp: new Date().toISOString()
    });
  }
});

export default router;