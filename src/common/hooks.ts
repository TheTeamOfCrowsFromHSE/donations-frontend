import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "./store";


export const useAppDispatch: () => AppDispatch  = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useStreamerIdFromUrl = (): number => {
  const { streamerId } = useParams()
  
  if (streamerId !== 'undefined') {
    return +(streamerId as string)
  }
  throw new Error("Where is my streamerId in url params???")
}
