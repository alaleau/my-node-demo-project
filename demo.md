# STEPS
```
  cache: 'npm'
```

```
- uses: ./.github/actions/cleanup-cache-action
with:
  package_manager: "npm"

```

```
- uses: alaleau/my-composites-actions/actions/cleanup-cache-action@main
  with:
    package_manager: "npm"
```


###


```
name: 'Send notification'
description: 'Send notification'
inputs:
  webhook:
    description: 'url of api to call'
    required: false
  message:
    description: 'message details'
    required: false
outputs:
  id:
    description: 'Notification id'
runs:
  using: 'node20'
  main: './src/notify.js'
  
```

### Call my custom action on CI
```
- name: Send notification
  id: send-notification
  uses: ./notify
```


### Create send notification fonction
```
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
    const webhook = "https://mock.codes"
    const message = "My message"
    await sendNotification(webhook, message);
})();

```

```
- name: Send notification
  id: send-notification
  uses: ./notify
```


### ACT 

## INPUTS
```
with:
  webhook: "https://mock.codes"
  message: "My message"
```

```
- name: Send notification
  id: send-notification
  uses: ./notify
  with:
    webhook: ${{ secrets.NOTIFY_WEBHOOK }}
    message: "My message"
```

```
const message = core.getInput("message");
const webhook =  core.getInput("webhook");
```

## context
```
const { sha, actor } = github.context;
logger.info("sha " + sha);
logger.info("actor " + actor);
```


## ADD output

```

const core = require("@actions/core")

try {
    await sendNotification(webhook, message);
    core.setOutput("id", Math.random());
  } catch (e) {
     core.setFailed(e)
  }
 
 
 - name: Display send notification output
   run: echo "${{steps.send-notification.outputs.id}}"
```


## context
```
    const { sha, actor } = github.context;
    logger.info("sha " + sha);
    logger.info("actor " + actor);
```

```
on:
  workflow_dispatch:
    inputs:
      channel:
        type: choice
        description: channel
        options:
          - PUBLIC
          - PRIVATE
      message:
        required: true

```

### partage

```
  - name: Send notification
    id: send-notification
    uses: alaleau/my-node-demo-project@main
    with:
      webhook: ${{ secrets.NOTIFY_WEBHOOK }}
      message: "My message"
```