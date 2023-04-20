import "../styles/HomeSubscriptionUserCard.css";
interface IHomeSubscriptionUserCard {
  id?: number
}
export const HomeSubscriptionUserCard = (params: IHomeSubscriptionUserCard) => {
  return (
    <div className={params.id == 0 ? "HomeSubscriptionUserCardZero Block__Active" : "HomeSubscriptionUserCard Block__Active"} >
      <div className="HomeSubscriptionUserCard__Header" >
        Дядя
      </div>
      <div className="HomeSubscriptionUserCard__Info" >

      </div>
    </div>
  );
};
