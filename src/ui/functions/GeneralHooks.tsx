import { createEvent, createStore } from "effector";

export const $generalSkill = createStore<any[]>([
  { name: "CSharp", check: false },
  { name: "TypeScript", check: false },
  { name: "JavaScript", check: false }
]);
export const setGeneralSkill = createEvent<any[]>();
$generalSkill.on(setGeneralSkill, (_, val) => val);

export const $generalCountry = createStore<any[]>([
  { name: "Russia", check: false },
  { name: "USA", check: false },
  { name: "Ukraine", check: false }
]);
export const setGeneralCountry = createEvent<any[]>();
$generalCountry.on(setGeneralCountry, (_, val) => val);

export const $generalSpeciality = createStore<any[]>([
  { name: "Business Analyst", check: false },
  { name: "Database Analyst", check: false },
  { name: "Data Analyst", check: false }
]);
export const setgeneralSpeciality = createEvent<any[]>();
$generalSpeciality.on(setgeneralSpeciality, (_, val) => val);

export const $generalSpecialityTime = createStore<string[]>(["Все время", "Месяц", "Неделю"]);
export const setgeneralSpecialityTime = createEvent<string[]>();
$generalSpecialityTime.on(setgeneralSpecialityTime, (_, val) => val);

export const $generalPrograms = createStore<any[]>([
  { name: "Tomcat", check: false },
  { name: "Nodal", check: false },
  { name: "Gunicorn", check: false }
]);
export const setGeneralPrograms = createEvent<any[]>();
$generalPrograms.on(setGeneralPrograms, (_, val) => val);

export const $menuBurger = createStore<boolean>(false)
export const setMenuBurger = createEvent<boolean>()
$menuBurger.on(setMenuBurger, (_, val) => val);