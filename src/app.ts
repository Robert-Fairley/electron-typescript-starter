import { DateString } from "./components/date";

const Main = document.querySelector("main");

window.onload = (event: any): void => {
    setInterval(() => {    
        (Main as HTMLMainElement).innerText = DateString();
    }, 1000);
};
