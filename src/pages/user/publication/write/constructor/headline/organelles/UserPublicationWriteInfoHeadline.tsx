
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import "../styles/UserPublicationWriteInfoHeadline.css";

export const UserPublicationWriteInfoHeadline = (params:IUserPublicationWriteInfoBlock) => {
  return (
    <div className="UserPublicationWriteInfoHeadline UserPublicationWriteInfoGeneralStyle Block__NonActive">
      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Заголовок
      </div>
      <div className="UserPublicationWriteInfoHeadline__Content">
        <input type="text" placeholder="Напишите ваш заголовок" className="UserPublicationWriteGeneral__Input" />
      </div>
    </div>
  );
};
