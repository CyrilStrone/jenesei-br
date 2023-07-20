import { useCallback, useState } from "react";
import { UserPublicationWriteInfoHeadline } from "../constructor/headline/organelles/UserPublicationWriteInfoHeadline";
import { UserPublicationWriteInfoImage } from "../constructor/image/organelles/UserPublicationWriteInfoImage";
import { UserPublicationWriteInfoImageList } from "../constructor/imageList/organelles/UserPublicationWriteInfoImageList";
import { UserPublicationWriteInfoLinkToVideo } from "../constructor/linkToVideo/organelles/UserPublicationWriteInfoLinkToVideo";
import { UserPublicationWriteInfoText } from "../constructor/text/organelles/UserPublicationWriteInfoText";
import { IChangePublication } from "../organelles/UserPublicationWrite";
import update from 'immutability-helper'
import { useDrop } from "react-dnd";
import "../styles/UserPublicationWriteInfo.css";

export interface IUserPublicationWriteInfo {
    publication: any
    changePublication: (params: IChangePublication) => void
}
export interface IUserPublicationWriteInfoBlock {
    id?: number
    value?: number
    changePublication?: (params: IChangePublication) => void
    moveCard?: (id: string, to: number) => void
    findCard?: (id: string) => { index: number }
}
export const ItemTypes = {
    CARD: 'card',
}
export const UserPublicationWriteInfo = (params: IUserPublicationWriteInfo) => {
    const [cards, setCards] = useState(params.publication)

    const findCard = useCallback(
        (id: string) => {
            const card = cards.filter((c: any, ind: number) => `${ind}` === id)[0] as {
                type: string
                value: any
            }
            return {
                card,
                index: cards.indexOf(card),
            }
        },
        [cards],
    )

    const moveCard = useCallback(
        (id: string, atIndex: number) => {
            const { card, index } = findCard(id)
            setCards(
                update(cards, {
                    $splice: [
                        [index, 1],
                        [atIndex, 0, card],
                    ],
                }),
            )
        },
        [findCard, cards, setCards],
    )

    const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }))
    return (
        params.publication && <div ref={drop} className="UserPublicationWriteInfo">
            {
                params.publication.map((e: any, id: any) =>
                    e.type === "headline" ?
                        <UserPublicationWriteInfoHeadline moveCard={moveCard} findCard={findCard} key={id} id={id} changePublication={params.changePublication} /> :
                        e.type === "text" ?
                            <UserPublicationWriteInfoText moveCard={moveCard} findCard={findCard} key={id} id={id} changePublication={params.changePublication} /> :
                            e.type === "image" ?
                                <UserPublicationWriteInfoImage moveCard={moveCard} findCard={findCard} key={id} id={id} changePublication={params.changePublication} /> :
                                e.type === "imageList" ?
                                    <UserPublicationWriteInfoImageList moveCard={moveCard} findCard={findCard} key={id} id={id} changePublication={params.changePublication} /> :
                                    e.type === "linkToVideo" ?
                                        <UserPublicationWriteInfoLinkToVideo moveCard={moveCard} findCard={findCard} key={id} id={id} changePublication={params.changePublication} /> :
                                        null
                )
            }
        </div>
    );
};
