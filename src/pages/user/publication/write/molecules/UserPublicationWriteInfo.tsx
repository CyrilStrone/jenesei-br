import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { UserPublicationWriteInfoHeadline } from "../constructor/headline/organelles/UserPublicationWriteInfoHeadline";
import { UserPublicationWriteInfoImage } from "../constructor/image/organelles/UserPublicationWriteInfoImage";
import { UserPublicationWriteInfoImageList } from "../constructor/imageList/organelles/UserPublicationWriteInfoImageList";
import { UserPublicationWriteInfoLinkToVideo } from "../constructor/linkToVideo/organelles/UserPublicationWriteInfoLinkToVideo";
import { UserPublicationWriteInfoText } from "../constructor/text/organelles/UserPublicationWriteInfoText";
import { IChangePublication } from "../organelles/UserPublicationWrite";
import { setCheckPublicationWriteOnDrag } from "../../../../../ui/functions/hooks";
import "../styles/UserPublicationWriteInfo.css";

export interface IUserPublicationWriteInfo {
    publication: any
    setPublication: any
    changePublication: (params: IChangePublication) => void
}
export interface IUserPublicationWriteInfoBlock {
    id?: number
    value?: number
    changePublication?: (params: IChangePublication) => void
}
export const UserPublicationWriteInfo = (params: IUserPublicationWriteInfo) => {
    const handleOnDragEnd = (result: any) => {
        setCheckPublicationWriteOnDrag(false)
        if (!result.destination) return;
        const items = Array.from(params.publication);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        params.setPublication(items);
    }
    const handleOnDragStart = () => {
        setCheckPublicationWriteOnDrag(true)
    }
    return (
        params.publication && <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
            <Droppable droppableId="UserPublicationWriteInfo">
                {(provided) => (
                    <ul className="UserPublicationWriteInfo__UL" {...provided.droppableProps} ref={provided.innerRef}>
                        {params.publication.map((e: any, id: number) =>
                            e.type === "headline" ?
                                <Draggable key={e.id} draggableId={e.id} index={id}>
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <UserPublicationWriteInfoHeadline key={e.id} id={id} changePublication={params.changePublication} />
                                        </li>
                                    )}
                                </Draggable> :
                                e.type === "text" ?
                                    <Draggable key={e.id} draggableId={e.id} index={id}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <UserPublicationWriteInfoText key={id} id={id} changePublication={params.changePublication} />
                                            </li>
                                        )}
                                    </Draggable> :
                                    e.type === "image" ?
                                        <Draggable key={e.id} draggableId={e.id} index={id}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <UserPublicationWriteInfoImage key={id} id={id} changePublication={params.changePublication} />
                                                </li>
                                            )}
                                        </Draggable> :
                                        e.type === "imageList" ?
                                            <Draggable key={e.id} draggableId={e.id} index={id}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <UserPublicationWriteInfoImageList key={id} id={id} changePublication={params.changePublication} />
                                                    </li>
                                                )}
                                            </Draggable> :
                                            e.type === "linkToVideo" ? <Draggable key={e.id} draggableId={e.id} index={id}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <UserPublicationWriteInfoLinkToVideo key={id} id={id} changePublication={params.changePublication} />
                                                    </li>
                                                )}
                                            </Draggable> : null
                        )}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};
