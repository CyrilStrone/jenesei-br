import "../styles/UserPublicationWriteGeneralName.css";
export interface IUserPublicationWriteGeneralName {
    publication: any
}
export const UserPublicationWriteGeneralName = (params:IUserPublicationWriteGeneralName) => {

    return (
        <div className="UserPublicationWriteGeneralName">
            <div className="UserPublicationWriteGeneralName__Title">
                Название публикации
            </div>
            <input type="text" className="UserPublicationWriteGeneral__Input" />
        </div>
    );
};
