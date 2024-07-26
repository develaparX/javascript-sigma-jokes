const loadJoke = async () => {
    try {
        const sigmaFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        });

        const jokeData = await sigmaFetch.json();
        document.getElementById('loadingJoke').innerHTML = jokeData.value;
    } catch (error) {
        console.log(error)
    }
}

document.getElementById('loadJokeButton').addEventListener("click", loadJoke)