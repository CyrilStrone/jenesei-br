import { IChangePublication } from "../organelles/UserPublicationWrite";
import "../styles/UserPublicationWriteAddItem.css";

export interface IUserPublicationWriteAddItem {
    id: number
    icon: string
    title: string
    type: string
    onClick?: (params: IChangePublication) => void
}
export const UserPublicationWriteAddItem = (params: IUserPublicationWriteAddItem) => {
    return (
        <div className="UserPublicationWriteAddItem" onClick={() => params.onClick!({ typeOp: "Add", typeCons: params.type })}>
            <img src={params.icon} alt="Icon" className="UserPublicationWriteAddItem__Icon" />
            <div className="UserPublicationWriteAddItem__Title">
                {params.title}
            </div>
        </div>
    );
};
