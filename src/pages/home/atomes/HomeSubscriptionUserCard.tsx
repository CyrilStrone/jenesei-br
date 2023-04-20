import "../styles/HomeSubscriptionUserCard.css";
interface IHomeSubscriptionUserCard {
  id?: number
}
export const HomeSubscriptionUserCard = (params: IHomeSubscriptionUserCard) => {
  return (
    <div className={params.id == 0 ? "HomeSubscriptionUserCardZero Home__Block__Active" : "HomeSubscriptionUserCard Home__Block__Active"} >
      <div className="HomeSubscriptionUserCard__Header" >
        Дядя
      </div>
      <div className="HomeSubscriptionUserCard__Info" >

      </div>
    </div>
  );
};
