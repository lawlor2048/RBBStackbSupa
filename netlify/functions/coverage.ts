import { Handler } from '@netlify/functions';
import { checkCoverage } from '../../src/services/coverage';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
};

export const handler: Handler = async (event) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { 
      statusCode: 204, 
      headers: CORS_HEADERS, 
      body: '' 
    };
  }

  const { eircode } = event.queryStringParameters || {};

  if (!eircode) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: 'Eircode is required',
        timestamp: new Date().toISOString()
      })
    };
  }

  try {
    const data = await checkCoverage(eircode);
    
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        data,
        debug: {
          timestamp: new Date().toISOString(),
          request: {
            eircode,
            url: `${event.path}?${event.rawQuery}`
          }
        }
      })
    };
  } catch (error) {
    console.error('Coverage check failed:', error);
    
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Failed to check coverage',
        debug: {
          timestamp: new Date().toISOString(),
          error: error instanceof Error ? {
            message: error.message,
            stack: error.stack
          } : 'Unknown error'
        }
      })
    };
  }
};