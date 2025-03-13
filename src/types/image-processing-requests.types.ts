export interface ImageProcessingRequest {
  image: string;
}

export interface ImageProcessingResponse {
  success: boolean;
  predictions: number[][];
  remainingCalls: number;
}

export interface ImageProcessingErrorResponse {
  details?: string;
}
