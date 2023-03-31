export interface IUserContentShortDescription {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentShortDescription = (params: IUserContentShortDescription) => {

  return (
    <>
      <div className="UserContent_ShortDescriptionUser_Title"></div>
    </>
  );
};
