import "../styles/UserStack.css";
import background from '../../../assets/user/background.png'
interface IUserStack {
  stack: any
}
export const UserStack = (params: IUserStack) => {

  return (
    <div className="UserStack Half__Block Block__Active">
      <div className="Half__Block__Header">
        Навыки
      </div>
      <div className="Half__Block__Footer UserStack__Footer">
        
        {(params.stack).sort((a:any, b:any) => (a.level > b.level ? 1 : -1)).map((e: any) =>
          e.level == 1 ?
            <div className="UserStack__Footer__Item UserStack__Footer__Item__1"><img className="UserStack__Footer__Item__Background" src={background} alt="background" /><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
            e.level == 2 ?
              <div className="UserStack__Footer__Item UserStack__Footer__Item__2"><img className="UserStack__Footer__Item__Background" src={background} alt="background" /><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
              e.level == 3 ?
                <div className="UserStack__Footer__Item UserStack__Footer__Item__3"><img className="UserStack__Footer__Item__Background" src={background} alt="background" /><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
                e.level == 4 ?
                  <div className="UserStack__Footer__Item UserStack__Footer__Item__4"><img className="UserStack__Footer__Item__Background" src={background} alt="background" /><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
                  e.level == 5 ?
                    <div className="UserStack__Footer__Item UserStack__Footer__Item__5"><img className="UserStack__Footer__Item__Background" src={background} alt="background" /><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
                    e.level == 6 ?
                      <div className="UserStack__Footer__Item UserStack__Footer__Item__6"><img className="UserStack__Footer__Item__Background" src={background} alt="background" /><div className="UserStack__Footer__Item__Title">{e.name}</div></div> : null
        )}
      </div>
    </div>
  );
};
