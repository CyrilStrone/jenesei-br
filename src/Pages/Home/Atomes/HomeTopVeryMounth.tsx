import React from "react";

export const HomeTopVeryMounth = () => {
  let dateMonth = new Date().getMonth();
  let Mount = [
    "Январе",
    "Феврале",
    "Марте",
    "Апреле",
    "Мае",
    "Июне",
    "Июле",
    "Августе",
    "Сентябре",
    "Ноябре",
    "Декабре",
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
    <div className="HomeTopVeryMounth">
      {"В "}
      {Mount[dateMonth] + " "}
      {CoolPrases[getRandomInt(0,CoolPrases.length-1)]+" "}
      {"по версии "}
      <div className="HomeTopVeryMounth_BR">Business Roulette</div>
    </div>
  );
};
