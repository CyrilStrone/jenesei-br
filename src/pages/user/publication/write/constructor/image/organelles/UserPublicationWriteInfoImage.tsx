
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import DeleteIcon from '../../../../../../../assets/icon/publication/write/delete-br-full-black.svg'
import "../styles/UserPublicationWriteInfoImage.css";

export const UserPublicationWriteInfoImage = (params: IUserPublicationWriteInfoBlock) => {
  return (
    <div className="UserPublicationWriteInfoImage UserPublicationWriteInfoGeneralStyle Block__NonActive__NotShadow">
      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Изображение
        <div className="UserPublicationWriteGeneral__DeleteIcon" onClick={() => params.changePublication!({ typeOp: "Delete", id: params?.id })}>
          <img src={DeleteIcon} alt="Delete Icon" />
        </div>
      </div>
      <div style={{ height: "100px" }} className="UserPublicationWriteInfoImage__Cover">
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
