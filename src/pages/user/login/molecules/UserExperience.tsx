import "../styles/UserExperience.css";

interface IUserExperience {
  workExp: any
}

export const UserExperience = (params: IUserExperience) => {

  return (
    <div className="UserExperience Half__Block Block__Active User__Content__Item">
      <div className="Half__Block__Header">
        Опыт работы
      </div>
      <div className="Half__Block__Footer UserExperience__List" >
        {params.workExp.map((e: any, id: number) =>
          <div key={id} className="UserExperience__Item">
            <div className="UserExperience__Item__name">
              {e.name}
            </div>
            <div className="UserExperience__Item__position">
              {e.position}
            </div>
            <div className="UserExperience__Item__date">
              {new Date(e.workStart).getFullYear()}{e.workEnd ? (" - " + new Date(e.workEnd).getFullYear()) : " - по настоящее время"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
