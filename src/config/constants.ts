export const API_CONFIG = {
  BASE_URL: 'https://wh.regionalbroadband.ie/vimar',
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
    'User-Agent': 'Regional Broadband Web'
  }
} as const;

export const HTTP_STATUS = {
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
} as const;