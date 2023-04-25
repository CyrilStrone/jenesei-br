import UserAnotherPicture from "../../../assets/user/UserPicture.jpg"

export interface IAnotherUserContentPicture {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentPicture = (params: IAnotherUserContentPicture) => {

  return (
    <div className="AnotherUserContentPicture_Picture">
      <img src={UserAnotherPicture} alt="Картинка" />
    </div>
  );
};
