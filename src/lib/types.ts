export interface IResponse<T> {
  data: {
    success: boolean;
    statusCode: number;
    data: T | null;
    message: string;
  };
}

export interface IActionResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
}
