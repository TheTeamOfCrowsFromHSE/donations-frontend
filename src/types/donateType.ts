export interface IDonate {
  id: number;
  donatorName: string;
  donatorMessage: string;
  donatorSum: string; 
}

export interface IDonatesSlice { 
  lastCheckedDonateId: number;
  donates: IDonate[];
}
