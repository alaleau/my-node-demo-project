import * as core from "@actions/core";
import {logger} from "../../src/logger.js";
import * as github from "@actions/github";

function sendNotification(webhook, message) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            message
        }
    };
    return fetch(webhook, options)
        .then(response => response.json())
};

(async () => {
    const message = core.getInput("message");
    const webhook =  core.getInput("webhook");

    const { sha, actor } = github.context;
    logger.info("sha " + sha);
    logger.info("actor " + actor);

    try {
        await sendNotification(webhook, message);
        core.setOutput("id", Math.random());
    } catch (e) {
        core.setFailed(e)
    }
})();