import "../styles/UserPublicationWriteGeneralDescription.css";
export interface IUserPublicationWriteGeneralDescription {
    publication: any
}
export const UserPublicationWriteGeneralDescription = (params:IUserPublicationWriteGeneralDescription) => {

    return (
        <div className="UserPublicationWriteGeneralDescription">
            <div className="UserPublicationWriteGeneralDescription__Title">
                Описание публикации
            </div>
            <textarea className="UserPublicationWriteGeneral__TextArea" />
        </div>
    );
};
