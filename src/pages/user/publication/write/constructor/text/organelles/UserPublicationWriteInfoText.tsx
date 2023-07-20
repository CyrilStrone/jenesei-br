
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import DeleteIcon from '../../../../../../../assets/icon/publication/write/delete-br-full-black.svg'
import "../styles/UserPublicationWriteInfoText.css";
import { useState } from "react";

export const UserPublicationWriteInfoText = (params: IUserPublicationWriteInfoBlock) => {
  const [value, setValue] = useState<string | null>("");
  return (
    <div className="UserPublicationWriteInfoText UserPublicationWriteInfoGeneralStyle Block__NonActive__NotShadow">
      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Абзац
        <div className="UserPublicationWriteGeneral__DeleteIcon" onClick={() => params.changePublication!({ typeOp: "Delete", id: params?.id })}>
          <img src={DeleteIcon} alt="Delete Icon" />
        </div>
      </div>
      <div className="UserPublicationWriteInfoText__Content">
        <textarea onChange={(event: any) => setValue(event.target.value)} value={value ? value : ""} placeholder="Напишите ваш абзац" className="UserPublicationWriteGeneral__TextArea" />
      </div>
    </div>
  );
};
