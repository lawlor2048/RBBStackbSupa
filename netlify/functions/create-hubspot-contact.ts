import { Handler } from '@netlify/functions';
import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY });

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    
    const properties = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
      eircode: data.eircode,
      customer_type: data.type
    };

    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (error) {
    console.error('HubSpot contact creation failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to create contact',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};