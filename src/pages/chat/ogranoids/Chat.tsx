import "../styles/Chat.css";

export const Chat = () => {

  return (
    <div className="Chat">
      <div className="Chat__Header Translucent__Block  Block__NonActive">
        <div className="Chat__Title">
          Чат
        </div>
      </div>
      <div className="Chat__General ">
        <div className="Chat__Bar Half__Block Block__NonActive">
          <div className="Chat__Bar__Header Half__Block__Header">
            Даня Булгаков
          </div>
          <div className="Chat__Bar__List Half__Block__Footer">
          </div>
        </div>
        <div className="Chat__Choice Transparent__Block Block__NonActive">
        </div>
      </div>
    </div>
  );
};
