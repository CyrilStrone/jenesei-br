
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import DeleteIcon from '../../../../../../../assets/icon/publication/write/delete-br-full-black.svg'

import "../styles/UserPublicationWriteInfoHeadline.css";
export const UserPublicationWriteInfoHeadline = (params: IUserPublicationWriteInfoBlock) => {
  return (
    <div className="UserPublicationWriteInfoHeadline UserPublicationWriteInfoGeneralStyle Block__NonActive__NotShadow">
      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Заголовок
        <div className="UserPublicationWriteGeneral__DeleteIcon" onClick={() => params.changePublication!({ typeOp: "Delete", id: params?.id })}>
          <img src={DeleteIcon} alt="Delete Icon" />
        </div>
      </div>
      <div className="UserPublicationWriteInfoHeadline__Content">
        <input type="text" placeholder="Напишите ваш заголовок" className="UserPublicationWriteGeneral__Input" />
      </div>
    </div>
  );
};
