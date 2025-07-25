<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXDK249K');
        </script>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: #F0F0F0;
            }

            html.dark {
                background-color: #F0F0F0;
            }
        </style>

        <title inertia>{{ config('app.name', 'Minecrafter Bersatu') }}</title>

        <meta name="description" content="Minecrafter Bersatu adalah acara kolaborasi antar komunitas Minecraft se-Indonesia!
        Acara ini diselenggarakan untuk merayakan hari kemerdekaan Republik Indonesia.">

        <meta property="og:url" content="https://mcbersatu.com">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Minecrafter Bersatu">
        <meta property="og:description" content="Minecrafter Bersatu adalah acara kolaborasi antar komunitas Minecraft se-Indonesia!
        Acara ini diselenggarakan untuk merayakan hari kemerdekaan Republik Indonesia.">
        <meta property="og:image" content="https://mcbersatu.com/mcb-cover.png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">

        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="mcbersatu.com">
        <meta property="twitter:url" content="https://mcbersatu.com">
        <meta name="twitter:title" content="Minecrafter Bersatu">
        <meta name="twitter:description" content="Minecrafter Bersatu adalah acara kolaborasi antar komunitas Minecraft se-Indonesia!
        Acara ini diselenggarakan untuk merayakan hari kemerdekaan Republik Indonesia.">
        <meta name="twitter:image" content="https://mcbersatu.com/mcb-cover.png">


        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">


        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXDK249K"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        @inertia
    </body>
</html>
