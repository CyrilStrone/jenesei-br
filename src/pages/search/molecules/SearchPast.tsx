import { SearchPastUserCard } from "../atomes/SearchPastUserCard";

interface ISearchPast {
  userList: any
}

export const SearchPast = (params: ISearchPast) => {

  return (
    <div className="SearchPast">
      {params.userList &&
        params.userList.map((e: any, i: any) => (
          <SearchPastUserCard firstName={e.firstName} lastName={e.lastName} email={e.email} id={e.id} />
        ))
      }
    </div>
  );
};
