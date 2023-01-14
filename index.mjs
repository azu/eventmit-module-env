import { eventmit } from "eventmit";

const event = eventmit();
event.on((message) => {
    console.log(message);
});

event.emit("Hello world!");
