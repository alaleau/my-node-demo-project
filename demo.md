# STEPS

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
    description: 'Notification Id'
runs:
  using: 'node20'
  main: './src/notify.js'
  
```
### Call my custom action on CY
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
    await sendNotification(url, message);
})();

```

## INPUTS
```
with:
  url: "https://mock.codes"
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

### Use secret
```
token:
  description: 'identification token'
  required: false
```


### Use @actions library
```
const core = require("@actions/core")
```

```
core.setFailed(e)
```

## ADD output

```

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
logger.info("sha" + sha);
logger.info("actor" + actor);
```
