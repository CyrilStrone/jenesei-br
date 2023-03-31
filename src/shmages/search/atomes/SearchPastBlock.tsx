import { setUserAnotherId, setUserAnotherName } from "../../../scommon/UserAnotherHooks";
import { GetDeleteUser } from "../logics/DeleteUser";


export interface ISearchPastBlock {
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

export const SearchPastBlock = (params: ISearchPastBlock) => {
  let handleClick = () => {
    setUserAnotherId(params.id)
    setUserAnotherName(params.firstName + " " + (params.lastName))
  };
  const requestDeleteUser= async (id:number) => {
    await GetDeleteUser({id:id});
}
  return (
    <div
      className="SearchPastBlock"
    >
      <div className="SearchPastBlock__Name" onClick={() => handleClick()}>
        <div className="SearchPastBlock__Name__firstName">
          {params.firstName}
        </div>
        <div className="SearchPastBlock__Name__lastName">
          {params.lastName}
        </div>
      </div>
      <div className="SearchPastBlock__id">
        id:{params.id}
      </div>
      <div className="SearchPastBlock__id" onClick={()=>requestDeleteUser(params.id)}>
      Удалить
      </div>
    </div>
  );
};
