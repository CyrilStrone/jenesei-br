import "../styles/UserPublicationWriteAddItem.css";

export interface IUserPublicationWriteAddItem {
    id: number
    icon: string
    title: string
}
export const UserPublicationWriteAddItem = (params: IUserPublicationWriteAddItem) => {
    return (
        <div className="UserPublicationWriteAddItem ">
            <img src={params.icon} alt="Icon" className="UserPublicationWriteAddItem__Icon" />
            <div className="UserPublicationWriteAddItem__Title">
                {params.title}
            </div>
        </div>
    );
};
