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
      
      
      state.value.donates.push(action.payload)
    },
    increaseLastCheckedDonateId : (state) => {
      state.value.lastCheckedDonateId += 1
    }
  }
})

export const { updateDonates, increaseLastCheckedDonateId } = donatesSlice.actions;

export const donatesReducer = donatesSlice.reducer
