function testGS(){


    const url = "https://script.google.com/macros/s/AKfycbzTCyElVkxC4nPOAVBjc7MI6sdjc6u5Flp7zu7Rrpijwk7sdFVy7hxC6zD05BYLMSCU8g/exec";


    fetch(url)
        .then(d => d.json())
        .then(d => {
            
            document.getElementById("app").textContent = d[0].status;
        });
    

}

function addGS(){


    const url = "https://script.google.com/macros/s/AKfycbzTCyElVkxC4nPOAVBjc7MI6sdjc6u5Flp7zu7Rrpijwk7sdFVy7hxC6zD05BYLMSCU8g/exec";


    fetch(url,{

        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {'Content-Type': 'application/json'
      
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"Olivia"}) // body data type must match "Content-Type" header

    });
}
    




document.getElementById("btn").addEventListener("click",testGS);
document.getElementById("btn2").addEventListener("click",addGS);




