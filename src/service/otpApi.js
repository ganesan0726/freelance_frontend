import axios from "axios";
import {baseUrl} from "./apiConfig"

const SentEmailOtpApi = async (email) => {
    try {
      const response = await axios.post(`${baseUrl}/otp/mail/request?mail=${email}`);
      return response.data;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };


  export {SentEmailOtpApi };
