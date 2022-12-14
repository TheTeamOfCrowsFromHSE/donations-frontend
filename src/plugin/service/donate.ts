import { useEffect } from "react";
import { updateDonates } from "src/common/donatesSlice";
import { useAppDispatch, useAppSelector, useStreamerIdFromUrl } from "src/common/hooks";
import { RootState } from "src/common/store";
import { IDonate, IDonatesSlice } from "src/types/donateType";

const REQ_INTERVAL = 3000
const BACKEND_ENDPOINT = "http://localhost:8080/api";

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
        id: 0,
        code: "106",
        amount: null,
        idTransaction: "",
        message: null,
        name: ""
      },
    ]
  };
}

export function useUpdateDonateFromServer() {
  const { donates } = useAppSelector((state: RootState) => state.donates.value);
  const streamerId = useStreamerIdFromUrl();
  const dispatch = useAppDispatch()

  const lastCheckedDonateId = getLastDonationId(donates)

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!Number.isNaN(streamerId))
        fetch(BACKEND_ENDPOINT + '/donates/' + streamerId + '/' + lastCheckedDonateId)
            .then(res => res.json())
            .then(data => dispatch(updateDonates(data)))
            .catch(e => console.error(e))

    }, REQ_INTERVAL)

    return () => {
      clearInterval(intervalId)
    }
  }, [streamerId, lastCheckedDonateId, dispatch])
}

export const getLastDonationId = (donates: IDonate[]) => {
  return donates.at(donates.length - 1)!.id;
}

export const getNextDonation = (donates: IDonate[], lastId: number) => {
  return donates.filter(x => x.id > lastId).at(0)?.id;
}
