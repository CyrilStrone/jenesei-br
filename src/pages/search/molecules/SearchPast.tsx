import { SearchPastItem } from "../atoms/SearchPastItem";

interface ISearchPast {
  userList: any
}

export const SearchPast = (params: ISearchPast) => {
  return (
    <div className="SearchPast">
      {params?.userList?.map((e: any) =>
        <SearchPastItem login={e?.login} firstName={e?.firstName} lastName={e?.lastName} aboutShort={e?.aboutShort} currentPosition={e?.currentPosition} avatarPath={e?.avatarPath} />
      )}
    </div>
  );
};
