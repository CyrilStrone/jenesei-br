import { UserPublicationWriteDrafts } from "../molecules/UserPublicationWriteDrafts";
import { UserPublicationWriteGeneral } from "../molecules/UserPublicationWriteGeneral";
import { UserPublicationWriteTitle } from "../molecules/UserPublicationWriteTitle";
import "../styles/UserPublicationWrite.css";

export const UserPublicationWrite = () => {

  return (
    <div className="UserPublicationWrite UserSetting__Blocks">
      <UserPublicationWriteTitle />
      <UserPublicationWriteDrafts/>
      <UserPublicationWriteGeneral/>
    </div>
  );
};
