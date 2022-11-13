import { createSlice } from "@reduxjs/toolkit";
import { getInitialDonates } from "src/plugin/service/donate";


export const donatesSlice = createSlice({
  name: 'donates',
  initialState: {
    value: getInitialDonates(),
  },
  reducers: {
    updateDonates: (state, action) => {
      console.log("PUSHING TO STORE DONATE");
      console.log(action.payload);
      
     	const payload = JSON.parse(action.payload.payload); 
      state.value.donates.push(...payload)
    },
    increaseLastCheckedDonateId : (state) => {
      state.value.lastCheckedDonateId += 1
    }
  }
})

export const { updateDonates, increaseLastCheckedDonateId } = donatesSlice.actions;

export const donatesReducer = donatesSlice.reducer
