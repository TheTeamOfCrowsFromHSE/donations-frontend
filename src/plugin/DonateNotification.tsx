import React from "react";

interface DonateNotificationProps {
  donatorName: string;
  donatorMessage: string | null;
  donatorSum: string | null;
}

export const DonateNotification: React.FC<DonateNotificationProps> = ({ donatorName, donatorMessage, donatorSum }: DonateNotificationProps) => {
  return (
    <div className="Plugin bg-transparent min-h-screen max-w-screen ">
      <iframe title="Donate GIF" className="w-[400px] h-[360px] mx-auto" src="https://giphy.com/embed/0cvMJvDulmuoMF5iIh"  frameBorder="0" ></iframe>
      <h1 className="w-fit mx-auto decoration-4 text-7xl text-sky-400" > { donatorName } </h1>
      <p className="w-fit mx-auto decoration-4 text-7xl text-sky-400">{donatorSum}</p>
      <p className="w-2/3 mx-auto text-3xl decoration-4 text-sky-400"> { donatorMessage } </p>
    </div>
  )
}
