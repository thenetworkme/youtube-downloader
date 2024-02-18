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
  
    // if(!res.ok){
    //     console.log('Error!!!')
    //     return;
    // } 
    const videoInfo  = await res.json()
    console.log(videoInfo)
        // const videoInfoContainer = document.getElementById('video-info');
        // videoInfoContainer.innerHTML =`<p><strong>Titulo:</strong> pofof</p>`

    

})

