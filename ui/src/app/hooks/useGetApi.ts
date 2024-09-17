import { useEffect, useState } from "react";

export enum API_STATUS {
  LOADING = "LOADING",
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
}

interface GetApiReturnValues<T> {
  status: API_STATUS;
  data?: T;
  error?: Error;
}

interface useGetApiParams {
  url: string;
  config?: {};
}

const INITIAL_STATE: GetApiReturnValues<any> = {
  status: API_STATUS.LOADING,
  data: undefined,
  error: undefined,
};
export const useGetApi = <T>({ url, config }: useGetApiParams) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  useEffect(() => {}, [url]);
  return { ...state };
};
