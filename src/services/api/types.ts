export interface ApiResponse<T> {
  data: T;
  debug?: {
    timestamp: string;
    request: {
      url: string;
      params: Record<string, string>;
    };
  };
}

export interface ApiError extends Error {
  status?: number;
  debug?: any;
}