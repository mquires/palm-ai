export interface ImageProcessingRequest {
  image: string;
}

export interface ImageProcessingResponse {
  success: boolean;
  predictions: number[][];
  remainingCalls: number;
}

export interface ImageProcessingErrorResponse {
  error?: string;
  details?: string;
}
