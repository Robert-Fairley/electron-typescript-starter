import { DateString } from "./components/date";

const Main = document.querySelector("main");

window.onload = (event: any): void => {
    (Main as HTMLMainElement).innerText = new Date().toLocaleString();
};
