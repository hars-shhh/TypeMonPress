//  this file connects to the deepstream server
import { deepstreamConfig } from "../../config";
// const debug = require("debug")("odds-provider-client:index.ts");
import { DeepstreamClient } from "@deepstream/client";

const client = new DeepstreamClient(
    `${deepstreamConfig.DEEPSTREAM_BT_HOST}:${deepstreamConfig.DEEPSTREAM_BT_PORT}`
);
// client.getConnectionState() will now return 'AWAITING_AUTHENTICATION'
export const main = async () => {
    return new Promise((resolve, reject) => {
        client.login(
            {
                type: "email",
                email: "user@example.com",
                password: "sesame"
            },
            (success: any, data: any) => {
                if (success) {
                    // data will be an object with {id: 'user-id'} plus
                    // additional data specified in clientData
                    // start application
                    // client.getConnectionState() will now return 'OPEN'
                    console.log("client connected to DS: ", success);
                    return resolve(client);
                } else {
                    // extra data can be returned from the permissionHandler as client data
                    // both successful and unsuccesful logins
                    // client.getConnectionState() will now return
                    // 'AWAITING_AUTHENTICATION' or 'CLOSED'
                    // if the maximum number of authentication
                    // attempts has been exceeded.
                    return reject();
                }
            }
        );
        // client.getConnectionState() will now return 'AUTHENTICATING'
    });
};

client.on("error", (error: any) => {
    console.log("deepstream client error: ", error);
});

export default client;
