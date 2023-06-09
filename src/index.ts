import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.html(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tone.</title>
    <link rel="stylesheet" href="https://use.typekit.net/dve7mwf.css">
    <style>
        * {
            box-sizing: border-box; 
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        html {
            height: 100%;
            width: 100%;
        }

        body {
            background-color: white;
            align-items: center;
            display: flex;
            font-family: "lores-12", sans-serif;
            font-weight: 400;
            font-style: normal;
            height: 100%;
            justify-content: center;
            padding: 2em;
            width: 100%;
        }

        .container {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            max-width: 1024px;
        }

        .container p {
            font-size: 2em;
            line-height: 1.6;
            padding: 1em;
        }

        .container p span {
            color: white;
            background-color: black;
            display: inline;
            padding: 0 0.25em;
        }

        .container ul {
            display: flex;
            list-style-type: none;
            width: 100%;
        }

        .container ul li {
            align-items: center;
            display: flex;
            font-size: 8em;
            justify-content: center;
            width: 50%;
        }

        .container ul li a {
            color: inherit;
            font-style: inherit;
        }

        .container ul li a:hover {
            position: absolute;
            top: -4
        }

        .container ul li a:active {
            position: absolute;
            top: 4;
        }

        @media screen and (max-width: 500px) {
            .container {
                font-size: 12px;
            }

            .container ul li {
                font-size: 6em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <p><span>tone</span> is an artist and listener owned music listening service. We're building it out right now, help us decide what an equitable music marketplace looks like.</p>
        <ul>
            <li><a href="https://discord.gg/mxFhn3kQjR"><i class="fa-brands fa-discord"></i></a></li>
            <li><a href="https://github.com/sone-dao"><i class="fa-brands fa-github"></i></a></li>
        </ul>
    </div>
    <script src="https://kit.fontawesome.com/db877d7948.js" crossorigin="anonymous"></script>
</body>
</html>`))

export default app
