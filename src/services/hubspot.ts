import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({ accessToken: process.env.VITE_HUBSPOT_API_KEY });

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eircode: string;
  type: 'residential' | 'business';
}

export async function createHubSpotContact(data: ContactFormData) {
  try {
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

    return response;
  } catch (error) {
    console.error('HubSpot contact creation failed:', error);
    throw error;
  }
}