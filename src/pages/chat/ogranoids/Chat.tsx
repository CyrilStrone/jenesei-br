import "../styles/Chat.css";

export const Chat = () => {

  return (
    <div className="Chat">
      <div className="Chat__Header Block__NonActive">
        <div className="Chat__Title">
          Чат
        </div>
      </div>
      <div className="Chat__General">
        <div className="Chat__Bar Block__NonActive">
          <div className="Chat__Bar__Header">
            Даня Булгаков
          </div>
          <div className="Chat__Bar__List">
          </div>
        </div>
        <div className="Chat__Choice Block__NonActive">
        </div>
      </div>
    </div>
  );
};
