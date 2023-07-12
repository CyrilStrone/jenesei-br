import { useState } from "react";
import "../styles/UserPublicationWriteAdd.css";
import { IUserPublicationWriteAddItem, UserPublicationWriteAddItem } from "../atoms/UserPublicationWriteAddItem";
import headline from '../../../../../assets/icon/publication/write/headline.svg'
import imageList from '../../../../../assets/icon/publication/write/image-list.svg'
import image from '../../../../../assets/icon/publication/write/image.svg'
import linkToVideo from '../../../../../assets/icon/publication/write/link-to-video.svg'
import text from '../../../../../assets/icon/publication/write/text.svg'

export const UserPublicationWriteAdd = () => {
    const [value, setValue] = useState<IUserPublicationWriteAddItem[] | null>(
        [
            { id: 0, icon: headline, title: "Заголовок" },
            { id: 1, icon: text, title: "Текст" },
            { id: 2, icon: image, title: "Изображение" },
            { id: 3, icon: imageList, title: "Список изображений" },
            { id: 4, icon: linkToVideo, title: "Ссылка на видео" }
        ]
    )
    return (
        <div className="UserPublicationWriteAdd Block__NonActive">
            <div className="UserPublicationWriteAdd__Title">
                Добавить контент
            </div>
            <div className="UserPublicationWriteAdd__List">
                {value && value.map((e: IUserPublicationWriteAddItem) =>
                    <UserPublicationWriteAddItem id={e.id} icon={e.icon} title={e.title} />
                )}
            </div>
        </div>
    );
};
