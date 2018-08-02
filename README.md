## send email with nodemailer

- **mail server config**
```
vi son/conf.json
write your mail server config.

{
"HOST": "myhost.com",
"USR": "info@myhost.com",
"PSS": "mypss"
}

```
- **mail subject and message**
```
vi son/ema.json
{
"sub":"subject",
"mes":"body"
}

```

- **required modules**
```
nodemailer
snd-ema: nodemailer wrapper

```

