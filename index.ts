import { Server } from "./src/server";
import { main as deepstreamMain } from "./src/helpers/deepstream.helper"

const main = async () => {
    await deepstreamMain();
    new Server().init();
}

main();
