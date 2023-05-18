import "../styles/UserEducation.css";
interface IUserEducation {
  education: any
}
export const UserEducation = (params: IUserEducation) => {

  return (
    <div className="UserEducation Half__Block Block__Active User__Content__Item">
      <div className="Half__Block__Header">
        Образование
      </div>
      <div className="Half__Block__Footer UserEducation__List" >
        {params.education.map((e: any) =>
          <div className="UserEducation__Item">
            <div className="UserEducation__Item__name">
              {e.name}
            </div>
            <div className="UserEducation__Item__position">
              {e.specialization}
            </div>
            <div className="UserEducation__Item__date">
              {new Date(e.studyStart).getFullYear()}{e.studyEnd && (" - " + new Date(e.studyEnd).getFullYear())}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
