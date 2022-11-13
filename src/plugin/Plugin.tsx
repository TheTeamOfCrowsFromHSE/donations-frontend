import React, { useEffect, useState } from "react";
import { DonateNotification } from "./DonateNotification";
import alphaLogo from "../assets/alfa-main-logo_red-bg-1.png";
import { RootState } from "src/common/store";
import { useAppSelector } from "src/common/hooks";
// import { IDonate } from "src/types/donateType";
import { getLastDonationId, getNextDonation, useUpdateDonateFromServer } from "./service/donate";
// import { increaseLastCheckedDonateId } from "src/common/donatesSlice";
// import { updateDonates } from "src/common/donatesSlice";

const DONATE_LIFE_TIME = 8000

// const sleep = (ms: number) => new Promise(
//   resolve => setTimeout(resolve, ms)
// );

export const Plugin = () => {
  const { donates } = useAppSelector((state: RootState) => state.donates.value);
  // const dispatch = useAppDispatch()

  const [currentDonationId, setCurrentDonationId] = useState(getLastDonationId(donates))
  console.log("FOR DONATES");
  console.log(donates);
  console.log("CURRENT DONATION ID");
  console.log(currentDonationId);
  
  
  
  
  const currentDonate = donates.filter(x => x.id === currentDonationId).at(0);

  console.log("CURRENT SHOWING DONATION ");
  console.log(currentDonate);
  
  

  const [show, setShow] = useState(true);
  let show2 = true;

  // if (!currentDonate) {
  //   // setShow(false)
  //   show2 = false;
  // }

  useEffect(() => {
    setTimeout(() => {
      // setShow(false);
      const nextId = getNextDonation(donates, currentDonationId)
      setCurrentDonationId( nextId ? nextId : currentDonationId );
    }, DONATE_LIFE_TIME)
  }, [setShow, currentDonationId, donates])


  useUpdateDonateFromServer()
   
  return (
    <> 
      <div className="fixed right-1 top-1 w-1/6">
        <span className="font-extrabold text-white bg-[#ef3022] my-0 py-0">powered by</span>
        <img src={alphaLogo} className="my-0 py-0" alt="alphaLogo"/>
      </div>
        { show2 && show && !!currentDonate && <DonateNotification donatorName={currentDonate.donatorName} donatorMessage={currentDonate.donatorMessage} donatorSum={currentDonate.donatorSum}  />}
      
    </>
  )
}

