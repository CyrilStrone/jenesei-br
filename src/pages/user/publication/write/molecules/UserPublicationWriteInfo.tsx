import { UserPublicationWriteInfoHeadline } from "../constructor/headline/organelles/UserPublicationWriteInfoHeadline";
import { UserPublicationWriteInfoImage } from "../constructor/image/organelles/UserPublicationWriteInfoImage";
import { UserPublicationWriteInfoImageList } from "../constructor/imageList/organelles/UserPublicationWriteInfoImageList";
import { UserPublicationWriteInfoLinkToVideo } from "../constructor/linkToVideo/organelles/UserPublicationWriteInfoLinkToVideo";
import { UserPublicationWriteInfoText } from "../constructor/text/organelles/UserPublicationWriteInfoText";
import "../styles/UserPublicationWriteInfo.css";
export interface IUserPublicationWriteInfo {
    publication: any
}
export interface IUserPublicationWriteInfoBlock {
    id?: number
    value?: number
}
export const UserPublicationWriteInfo = (params: IUserPublicationWriteInfo) => {
    return (
        <div className="UserPublicationWriteInfo">
            <UserPublicationWriteInfoHeadline />
            <UserPublicationWriteInfoText />
            <UserPublicationWriteInfoImage />
            <UserPublicationWriteInfoImageList />
            <UserPublicationWriteInfoLinkToVideo />
        </div>
    );
};
