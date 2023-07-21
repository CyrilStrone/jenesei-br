
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import DeleteIcon from '../../../../../../../assets/icon/publication/write/delete-br-full-black.svg'
import "../styles/UserPublicationWriteInfoImageList.css";

export const UserPublicationWriteInfoImageList = (params: IUserPublicationWriteInfoBlock) => {
  return (
    <div className="UserPublicationWriteInfoImageList UserPublicationWriteInfoGeneralStyle Block__NonActive__NotShadow">
      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Список изображений
        <div className="UserPublicationWriteGeneral__DeleteIcon" onClick={() => params.changePublication!({ typeOp: "Delete", id: params?.id })}>
          <img src={DeleteIcon} alt="Delete Icon" />
        </div>
      </div>
      <div className="UserPublicationWriteInfoImageList__Cover__Bar">
        <div className="UserPublicationWriteInfoImageList__Cover">
          <div className="UserPublicationWriteInfoImageList__Cover__Title">
            Перетащите или вставьте изображение
          </div>
        </div>
        <div className="UserPublicationWriteInfoImageList__Cover__Bar__Add">
          <div className="UserPublicationWriteInfoImageList__Cover__Bar__Add__Icon" />
        </div>
      </div>
      <div className="UserPublicationWriteInfoImageList__Content">
        <input type="text" placeholder="Напишите описание списка изображений" className="UserPublicationWriteInfoImageList__Content__Input UserPublicationWriteGeneral__Input" />
      </div>
    </div>
  );
};
