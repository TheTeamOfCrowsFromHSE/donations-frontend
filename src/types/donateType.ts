export interface IDonate {
  id: number;
  code: string;
  amount: string | null;
  idTransaction: string;
  message: string | null;
  name: string;
}

export interface IDonatesSlice { 
  lastCheckedDonateId: number;
  donates: IDonate[];
}
