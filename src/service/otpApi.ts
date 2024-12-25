import axios from "axios";
import { baseUrl } from "./apiConfig"

interface OtpResponse {
  data: any;
}

const SentEmailOtpApi = async (email: string): Promise<OtpResponse> => {
  try {
    const response = await axios.post<OtpResponse>(`${baseUrl}/otp/mail/request?mail=${email}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

const VerifyEmailOtpApi = async (email: string, otp: string): Promise<OtpResponse> => { 
  try {
    const response = await axios.post<OtpResponse>(`${baseUrl}/otp/mail/verify?mail=${email}&otp=${otp}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}


export { SentEmailOtpApi,VerifyEmailOtpApi };
