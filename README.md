# adonis-pusher

Pusher provider for AdonisJS

## Install

```bash
adonis install adonis-pusher
```

You need to add the provider to AdonisJS at `start/app.js`:

```javascript
const providers = [
   ...
   'adonis-pusher/providers/Pusher'
];
```

And in your `.env` file

```
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_SECRET_KEY=
```

then you can simply call it from within controllers etc:

```javascript
const Pusher = use('Pusher');
`````

