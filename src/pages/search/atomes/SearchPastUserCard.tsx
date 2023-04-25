import { setUserAnotherId, setUserAnotherName } from "../../../ui/functions/UserAnotherHooks";
import '../styles/SearchPastUserCard.css'
import DefaultAva from "../../../assets/search/DefaultAva.png"
export interface ISearchPastUserCard {
  Name?: string;
  Job?: string;
  Link?: string;
  Picture?: string;
  Stackes?: any;
  onClick?: () => void;

  id: number;
  firstName: string
  lastName: string
  email: string
}

export const SearchPastUserCard = (params: ISearchPastUserCard) => {
  let handleClick = () => {
    setUserAnotherId(params.id)
    setUserAnotherName(params.firstName + " " + (params.lastName))
  };

  return (
    <div
      className="SearchPastUserCard"
    >
      <div className="SearchPastUserCard__PictureBlock">
        <img src={DefaultAva} alt="DefaultAva" />
      </div>
      <div className="SearchPastUserCard__InfoBlock">
        <div className="SearchPastUserCard__Name__firstName" onClick={() => handleClick()}>
          {params.firstName}
        </div>
        <div className="SearchPastUserCard__Name__lastName">
          {params.lastName}
        </div>
        <div className="SearchPastUserCard__id">
          id:{params.id}
        </div>
        <div className="SearchPastUserCard__id">
          Удалить
        </div>
      </div>
    </div>
  );
};
