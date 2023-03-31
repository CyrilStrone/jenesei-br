export const HomeTopVeryDay = () => {
  let dateDay = new Date().getDate();
  let dateMonth = new Date().getMonth();
  let Mount = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Ноября",
    "Декабря",
  ];
  let CoolPrases = [
    "самый стильный",
    "самый модный",
    "самый хороший",
    "самый интересный",
    "самый прекрасный",
    "самый замечательный",
    "самый отличный",
    "самый ядерный",
    "самый забавный",
    "самый крепкий",
    "самый чудный",
  ];
  let getRandomInt = (min: any, max: any) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <div className="HomeTopVeryDay">
      {dateDay + " "}
      {Mount[dateMonth] + " "}
      {CoolPrases[getRandomInt(0, CoolPrases.length - 1)] + " "}
      {"по версии "}
      <div className="HomeTopVeryDay_BR">Business Roulette</div>
    </div>
  );
};
