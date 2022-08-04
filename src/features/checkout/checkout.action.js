import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDistrict, getProvince, getWard } from "../../api/provinceApi";

export const fetchProvinceAction = createAsyncThunk(
    '/province',
    async (body,{rejectWithValue})=>{
        try {
            const res = await getProvince(body)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);
export const getWardAction = createAsyncThunk(
    '/ward',
    async (params,{rejectWithValue})=>{
        try {
            const res = await getWard(params)
            return res
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getDistrictAction = createAsyncThunk(
    '/district',
    async(params,{rejectWithValue})=>{
        try {
            const res = await getDistrict(params)
            return res;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)