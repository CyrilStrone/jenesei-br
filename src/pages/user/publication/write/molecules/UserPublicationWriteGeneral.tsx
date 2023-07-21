import { UserPublicationWriteGeneralCover } from "../atoms/UserPublicationWriteGeneralCover";
import { UserPublicationWriteGeneralDescription } from "../atoms/UserPublicationWriteGeneralDescription";
import { UserPublicationWriteGeneralName } from "../atoms/UserPublicationWriteGeneralName";
import "../styles/UserPublicationWriteGeneral.css";

export interface IUserPublicationWriteGeneral {
    publication: any
}
export const UserPublicationWriteGeneral = (params: IUserPublicationWriteGeneral) => {

    return (
        <div className="UserPublicationWriteGeneral UserPublicationWriteInfoGeneralStyle Block__NonActive__NotShadow">
            <div className="UserPublicationWriteGeneral__Title">
                Основная информация
            </div>
            <UserPublicationWriteGeneralCover publication={params.publication} />
            <UserPublicationWriteGeneralName publication={params.publication} />
            <UserPublicationWriteGeneralDescription publication={params.publication} />
        </div>
    );
};
