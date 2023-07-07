import "../styles/UserStack.css";

interface IUserStack {
  stack: any
}

export const UserStack = (params: IUserStack) => {

  return (
    <div className="UserStack Transparent__Block  Block__Active">
      <div className="User__Content__Item__List">
        {(params.stack).sort((a: any, b: any) => (a.level > b.level ? 1 : -1)).map((e: any, id: number) =>
          e.level === 1 ?
            <div key={id} className="UserStack__Footer__Item UserStack__Footer__Item__1"><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
            e.level === 2 ?
              <div key={id} className="UserStack__Footer__Item UserStack__Footer__Item__2"><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
              e.level === 3 ?
                <div key={id} className="UserStack__Footer__Item UserStack__Footer__Item__3"><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
                e.level === 4 ?
                  <div key={id} className="UserStack__Footer__Item UserStack__Footer__Item__4"><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
                  e.level === 5 ?
                    <div key={id} className="UserStack__Footer__Item UserStack__Footer__Item__5"><div className="UserStack__Footer__Item__Title">{e.name}</div></div> :
                    e.level === 6 ?
                      <div key={id} className="UserStack__Footer__Item UserStack__Footer__Item__6"><div className="UserStack__Footer__Item__Title">{e.name}</div></div> : null
        )}
      </div>

    </div>
  );
};
