document.getElementById('downloader-form').addEventListener("submit", async (e)=>{
    e.preventDefault()    

    const res = await fetch("http://localhost:4000/api/downloader", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            link: e.target.children.link.value,
        })
    })
    if(!res.ok){
        return console.log('Error!!!')
    } else {
        console.log('working')
    }
    

})