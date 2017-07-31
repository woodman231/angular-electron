import { ipcMain } from 'electron';

/*
export default class ipcTest {
    static ipcTest() {
        ipcMain.on("hello-world", (event, args) => {
            console.log("hello-world received")
            event.sender.send( "hello-world-reply" );
        })
    }
}
*/

export default class ipcTest {

    constructor() {
        ipcMain.on("hello-world", (event, args) => {
            console.log("hello-world received");
            event.sender.send("hello-world-reply");
        })
    }

}