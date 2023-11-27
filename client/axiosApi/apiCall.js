import axios from 'axios';
import { getTokens } from './../utils/helperFunctions';

// const BASE_URL = 'http://192.168.1.108/api'
const BASE_URL = 'https://wallet-backend-lovat.vercel.app/api'
const config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getTokens()}` } }

axios.defaults.timeout = 3000000
axios.defaults.timeoutErrorMessage = 'TIMEOUT_CODE'

export const signup = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/signup`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

export const sendOTP = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/send-otp`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

export const verifyOTP = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/verify-otp`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

export const login = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

export const forgotPassword = async (data, resCallback, errorCallback) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/forgot-password`, data, config)
        resCallback(res)
    } catch (error) {
        errorCallback(error)
    }
}

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