document.addEventListener("keyup", e=> {

    if (e.target.matches("#buscador")){

        document.querySelectorAll(".card").forEach(cuarto => {

            cuarto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?cuartop.classList.remove("flitro")
                :cuarto.calssList.add("filtro")
        })
    }
})