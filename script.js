fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
            const animename = quote.quote;
            const animeElement = document.getElementById('animeElement');

            animeElement.innerHTML = animename;
        })
        