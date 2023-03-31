import "../styles/HomeSubscriptionUserCard.css";
interface IHomeSubscriptionUserCard {
  id?: number
}
export const HomeSubscriptionUserCard = (params: IHomeSubscriptionUserCard) => {
  return (
    <div className={params.id == 0 ? "HomeSubscriptionUserCardZero" : "HomeSubscriptionUserCard"} >

    </div>
  );
};
