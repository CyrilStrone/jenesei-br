import "../styles/UserGeneralInfo.css";
import { ApiImage } from "../../../ui/functions/AxiosInstance";

interface IUserGeneralInfo {
  avatarPath: string
  login: string
  firstName: string
  lastName: string
}

export const UserGeneralInfo = (params: IUserGeneralInfo) => {

  return (
    <div className="UserGeneralInfo Translucent__Block Block__Active User__Content__Item">
      <img className="UserGeneralInfo__Avatar" src={ApiImage + params.avatarPath} alt={params.avatarPath} />
      <div className="UserGeneralInfo__FirstName">
        {params.firstName} {params.lastName}
      </div>
      <div className="UserGeneralInfo__login">
        {params.login}
      </div>
      <div className="UserGeneralInfo__JeneseiID">
        Jenesei ID
      </div>
    </div>
  );
};
