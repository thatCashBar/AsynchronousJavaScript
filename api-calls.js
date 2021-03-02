const url = "https://cat-fact.herokuapp.com/facts/random";
// PROMISES
function getPromisedCatFacts ()
{
    return new Promise((resolve,reject) => {
        setTimeout(() =>
        {
            if (1 == 0)
            {
                reject("Reject");
            }            
            let result = fetch (url, {       
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).then((res) => res.json());      
            resolve(result);
        });
    })
}
// ASYNC/AWAIT
async function getAsyncCatFact() {
    const data = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    const dataRevised = await data.json();
    SetPageText(dataRevised.text);
}
// -Button Function(s)
function button_promise_CatJoke()
{
    getPromisedCatFacts().then( (res) => {
        SetPageText(res.text);
    }).catch( (error) => {
        console.log(error);
    });
}
function button_async_CatJoke()
{
    getAsyncCatFact();
}
// -Helper Function(s)
function SetPageText(incomingString)
{
    let catFactTextElement = document.getElementById("catFactText");
    catFactTextElement.innerHTML = incomingString;
}