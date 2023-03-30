import UserAnotherPicture from "../../../common/assets/User/UserPicture.jpg"

export interface IAnotherUserContentPictureOnly {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentPictureOnly = (params: IAnotherUserContentPictureOnly) => {
  return (
    <div>
      <img src={UserAnotherPicture} alt="Картинка" />
    </div>
  );
};
