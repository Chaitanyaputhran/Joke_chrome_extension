fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
    const jokeText=joke.attachments[0].text;

})