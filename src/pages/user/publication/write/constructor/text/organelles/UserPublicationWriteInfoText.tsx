
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import "../styles/UserPublicationWriteInfoText.css";

export const UserPublicationWriteInfoText = (params: IUserPublicationWriteInfoBlock) => {
  return (
    <div className="UserPublicationWriteInfoText UserPublicationWriteInfoGeneralStyle Block__NonActive">

      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Абзац
      </div>
      <div className="UserPublicationWriteInfoText__Content">
        <textarea placeholder="Напишите ваш абзац" className="UserPublicationWriteGeneral__TextArea" />
      </div>
    </div>
  );
};
