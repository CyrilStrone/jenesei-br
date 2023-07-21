import "../styles/UserPublicationWriteGeneralCover.css";

export interface IUserPublicationWriteGeneralCover {
    publication: any
}
export const UserPublicationWriteGeneralCover = (params:IUserPublicationWriteGeneralCover) => {

    return (
        <div className="UserPublicationWriteGeneralCover">
            <div className="UserPublicationWriteGeneralCover__Title">
                Перетащите или вставьте обложку
            </div>
        </div>
    );
};