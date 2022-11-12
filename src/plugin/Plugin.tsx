import React, { useEffect, useState } from "react";
import { DonateNotification } from "./DonateNotification";
import alphaLogo from "../assets/alfa-main-logo_red-bg-1.png";
import { RootState, store } from "src/common/store";
import { useAppDispatch, useAppSelector } from "src/common/hooks";
import { IDonate } from "src/types/donateType";
import { getNewDonate, useUpdateDonateFromServer } from "./service/donate";
// import { increaseLastCheckedDonateId } from "src/common/donatesSlice";
// import { updateDonates } from "src/common/donatesSlice";

// const DONATE_LIFE_TIME = 4000

// const sleep = (ms: number) => new Promise(
//   resolve => setTimeout(resolve, ms)
// );

export const Plugin = () => {
  const { donates } = useAppSelector((state: RootState) => state.donates.value);
  // const dispatch = useAppDispatch()

  const [currentDonationId, setcurrentDonationId] = useState(0)

 

  useEffect(() => {
    
  }, [])


  useUpdateDonateFromServer()
   
  return (
    <> 
      <div className="fixed right-1 top-1 w-1/6">
        <span className="font-extrabold text-white bg-[#ef3022] my-0 py-0">powered by</span>
        <img src={alphaLogo} className="my-0 py-0" alt="alphaLogo"/>
      </div>
        { !!currentDonate && <DonateNotification donatorName={currentDonate.donatorName} donatorMessage={currentDonate.donatorMessage} donatorSum={currentDonate.donatorSum}  />}
      
    </>
  )
}

