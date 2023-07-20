
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import "../styles/UserPublicationWriteInfoImage.css";

export const UserPublicationWriteInfoImage = (params: IUserPublicationWriteInfoBlock) => {
  return (
    <div className="UserPublicationWriteInfoImage UserPublicationWriteInfoGeneralStyle Block__NonActive">
      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Изображение
      </div>
      <div className="UserPublicationWriteInfoImage__Cover">
        <div className="UserPublicationWriteInfoImage__Cover__Title">
          Перетащите или вставьте изображение
        </div>
      </div>
      <div className="UserPublicationWriteInfoImage__Content">
        <input type="text" placeholder="Напишите описание изображения" className="UserPublicationWriteInfoImage__Content__Input UserPublicationWriteGeneral__Input" />
      </div>
    </div>
  );
};
