import { useState } from "react";
import { UserPublicationWriteAdd } from "../molecules/UserPublicationWriteAdd";
import { UserPublicationWriteDrafts } from "../molecules/UserPublicationWriteDrafts";
import { UserPublicationWriteGeneral } from "../molecules/UserPublicationWriteGeneral";
import { UserPublicationWriteInfo } from "../molecules/UserPublicationWriteInfo";
import { UserPublicationWriteTitle } from "../molecules/UserPublicationWriteTitle";
import "../styles/UserPublicationWrite.css";

export const UserPublicationWrite = () => {
  const [publication, setPublication] = useState<any | null>(null)
  return (
    <div className="UserPublicationWrite UserSetting__Blocks">
      <UserPublicationWriteTitle />
      <UserPublicationWriteDrafts />
      <UserPublicationWriteGeneral publication={publication}/>
      <UserPublicationWriteInfo publication={publication}/>
      <UserPublicationWriteAdd />
    </div>
  );
};
