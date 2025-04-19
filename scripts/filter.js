const list = document.querySelector(".filter")
    items = document.querySelectorAll(".card_holder")

function filter(){
    list.addEventListener("click", Event => {
        const targetId = Event.target.dataset.id
        console.log(targetId);

        switch(targetId){
            case "miniature":
                getItems(targetId)
                break
            case "plastic":
                getItems(targetId)
                break
            case "workpiece":
                getItems(targetId)
                break
            case "all":
                getItems('card_holder')
                break
            case "painting":
                getItems(targetId)
                break
            case "modeling":
                getItems(targetId)
                break
            case "tools":
                getItems(targetId)
                break
            case "decor":
                getItems(targetId)
                break
        }
    })
}
filter()
function getItems(className) {
    items.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    })
}