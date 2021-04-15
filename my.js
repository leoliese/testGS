function testGS(){


    const url = "https://script.google.com/macros/s/AKfycbwObAldH_BH-Nx6nSydyy3NEgj7kvkeeoBDapvqCDqKPVL4O3Jp/exec";

    fetch(url).then(response => response.json()).then(data => console.log(data));

    fetch(url)
        .then(d => d.json())
        .then(d => {
            
            document.getElementById("app").textContent = d[0].status;
        });
    

}

document.getElementById("btn").addEventListener("click",testGS);



