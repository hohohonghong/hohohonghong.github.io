const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "-Maya Angelou-",
    },
    {
        quote: "Life is either a daring adventure or nothing at all",
        author:"-Helen Keller-",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author:"-Lilly Pulitzer-",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author:"-Mark Twain-",
    },
    {
        quote: "There is always some madness in love. But there is also always some reason in madness",
        author:"-Friedrich Nietzsche-",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author:"-Albert Einstein-",
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author:"-Martin Luther King Jr-",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author:"-Thomas Edison-",
    },
    {
        quote: "Some people dream of success, while other people get up every morning and make it happen.",
        author:"-Wayne Huizenga-",
    },
    {
        quote: "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",
        author:"-Jim Rohn-",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQutoes= quotes[Math.floor(Math.random()*quotes.length)];
//floor >내림 math.random (0~1)랜덤 소수 
quote.innerText = todaysQutoes.quote;
author.innerText = todaysQutoes.author;