import { useEffect } from "react";
import { useAppSelector, useStreamerIdFromUrl } from "src/common/hooks";
import { socket } from "src/common/socketSlice";
import { RootState } from "src/common/store";
import { IDonate, IDonatesSlice } from "src/types/donateType";

const REQ_INTERVAL = 3000

export function getNewDonate(donates: IDonate[], lastCheckedDonateId : number): IDonate | null {
  console.log("NEW DONATE FROM THIS VARS = ");
  console.log(donates);
  console.log(lastCheckedDonateId);
  
  if (!donates || donates.length === 0) {
    return null
  }
  return (donates!.at(donates.length - 1)!.id > lastCheckedDonateId ?
          donates.filter(x => x.id > lastCheckedDonateId).sort((a, b) => a.id - b.id).at(0) :
          donates.at(donates.length - 1)) || null
}

export function getInitialDonates(): IDonatesSlice {
  return {
    lastCheckedDonateId: 1,
    donates: [
      {
        id: 1,
        donatorName: "Новый донат!",
        donatorMessage: "Haha, loh",
        donatorSum: "10 rub"
      },
    ]
  };
}

export function useUpdateDonateFromServer() {
  const { donates } = useAppSelector((state: RootState) => state.donates.value)
  const streamerId = useStreamerIdFromUrl();
  const lastId = getLastDonationId(donates);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      socket.send({ lastId, streamerId })
      console.log('is it send?');
    }, REQ_INTERVAL)
    return () => {
      clearInterval(intervalId)
    }
  })
}

export const getLastDonationId = (donates: IDonate[]) => {
  return donates.at(donates.length - 1)!.id;
}

export const getNextDonation = (donates: IDonate[], lastId: number) => {
  return donates.filter(x => x.id > lastId).at(0)?.id;
}
