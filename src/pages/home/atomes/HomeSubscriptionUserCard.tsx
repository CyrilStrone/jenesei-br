import "../styles/HomeSubscriptionUserCard.css";
interface IHomeSubscriptionUserCard {
  id?: number
}
export const HomeSubscriptionUserCard = (params: IHomeSubscriptionUserCard) => {
  return (
    <div className={params.id == 0 ? "HomeSubscriptionUserCardZero Half__Block Block__Active" : "HomeSubscriptionUserCard Half__Block Block__Active"} >
      <div className="HomeSubscriptionUserCard__Header Half__Block__Header" >
        Дядя
      </div>
      <div className="HomeSubscriptionUserCard__Info Half__Block__Footer" >

      </div>
    </div>
  );
};
