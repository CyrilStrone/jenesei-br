import { useState } from "react";
import "../styles/UserPublicationWriteAdd.css";
import { IUserPublicationWriteAddItem, UserPublicationWriteAddItem } from "../atoms/UserPublicationWriteAddItem";
import headline from '../../../../../assets/icon/publication/write/headline.svg'
import imageList from '../../../../../assets/icon/publication/write/image-list.svg'
import image from '../../../../../assets/icon/publication/write/image.svg'
import linkToVideo from '../../../../../assets/icon/publication/write/link-to-video.svg'
import text from '../../../../../assets/icon/publication/write/text.svg'
import { IChangePublication } from "../organelles/UserPublicationWrite";
export interface IUserPublicationWriteAdd {
    changePublication: (params: IChangePublication) => void
}
export const UserPublicationWriteAdd = (params: IUserPublicationWriteAdd) => {
    const [value, setValue] = useState<IUserPublicationWriteAddItem[] | null>(
        [
            { id: 0, icon: headline, title: "Заголовок", type: "headline" },
            { id: 1, icon: text, title: "Абзац", type: "text" },
            { id: 2, icon: image, title: "Изображение", type: "image" },
            { id: 3, icon: imageList, title: "Список изображений", type: "imageList" },
            { id: 4, icon: linkToVideo, title: "Ссылка на видео", type: "linkToVideo" }
        ]
    )
    return (
        <div className="UserPublicationWriteAdd UserPublicationWriteInfoGeneralStyle Block__NonActive">
            <div className="UserPublicationWriteAdd__Title">
                Добавить контент
            </div>
            <div className="UserPublicationWriteAdd__List">
                {value && value.map((e: IUserPublicationWriteAddItem) =>
                    <UserPublicationWriteAddItem onClick={params.changePublication} key={e.id} id={e.id} icon={e.icon} title={e.title} type={e.type} />
                )}
            </div>
        </div>
    );
};
