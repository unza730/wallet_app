import axios from "axios";
import { getTokens } from "./../utils/helperFunctions";

// const BASE_URL = 'http://192.168.1.108/api'
const BASE_URL = "https://wallet-backend-lovat.vercel.app/api";
// const config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getTokens()}` } }
// console.log("config:-->> ", config);
// axios.defaults.timeout = 3000000
// axios.defaults.timeoutErrorMessage = 'TIMEOUT_CODE'
const getConfig = async () => {
  try {
    const token = await getTokens();
    console.log("token:--->> ",token);
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  } catch (error) {
    console.error("Error getting token:", error);
    throw error; // Propagate the error up
  }
};

// Call the asynchronous function to get the config
// const config = await getConfig();
// console.log("config:-->> ", config);
export const signup = async (data) => {
  console.log(" data from singup api:-> ", data);
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, data);
    console.log("response: ", res);
    return res.data;
    // resCallback(res)
  } catch (error) {
    console.log(
      "------------------------------------------------------------------------: "
    );
    console.log("err-------------: ", error);
    throw error;
    // errorCallback(error)
  }
};

export const login = async (data) => {
  console.log(" data from singup api:-> ", data);
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, data);
    console.log("response: ", res);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const sendOTP = async (data, resCallback, errorCallback) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/send-otp`, data, config);
    resCallback(res);
  } catch (error) {
    errorCallback(error);
  }
};

export const verifyOTP = async (data, resCallback, errorCallback) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/verify-otp`, data, config);
    resCallback(res);
  } catch (error) {
    errorCallback(error);
  }
};

// export const login = async (data, resCallback, errorCallback) => {
//     try {
//         const res = await axios.post(`${BASE_URL}/auth/login`, data, config)
//         resCallback(res)
//     } catch (error) {
//         errorCallback(error)
//     }
// }

export const forgotPassword = async (data, resCallback, errorCallback) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/forgot-password`,
      data,
      config
    );
    resCallback(res);
  } catch (error) {
    errorCallback(error);
  }
};

export const createWallet = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/wallet/create`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

export const transferFund = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/bank/transfer-fund`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

export const resetPassword = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/reset-password`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

export const recentTransaction = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.get(`${BASE_URL}/transaction/list`, config)
        resCallback(res);
    }
    catch (error) {
        console.log(err)
    }
}

export const getWalletById = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.get(`${BASE_URL}/wallet/${data.id}`, config)
        resCallback(res);
    }
    catch (error) {
        console.log(err)
    }
}

export const getAllBatches = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.get(`${BASE_URL}/batch/list`, config)
        resCallback(res);
    }
    catch (error) {
        console.log(err)
    }
}

export const getBatchById = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.get(`${BASE_URL}/batch/${data.id}`, config)
        resCallback(res);
    }
    catch (error) {
        console.log(err)
    }
}

export const createBatch = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/batch/create`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}
