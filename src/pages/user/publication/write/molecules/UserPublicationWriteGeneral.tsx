import { UserPublicationWriteGeneralCover } from "../atoms/UserPublicationWriteGeneralCover";
import { UserPublicationWriteGeneralDescription } from "../atoms/UserPublicationWriteGeneralDescription";
import { UserPublicationWriteGeneralName } from "../atoms/UserPublicationWriteGeneralName";
import "../styles/UserPublicationWriteGeneral.css";

export const UserPublicationWriteGeneral = () => {

    return (
        <div className="UserPublicationWriteGeneral Block__NonActive">
            <div className="UserPublicationWriteGeneral__Title">
                Основная информация
            </div>
            <UserPublicationWriteGeneralCover />
            <UserPublicationWriteGeneralName />
            <UserPublicationWriteGeneralDescription />
        </div>
    );
};
