class Dropdown {
    constructor(object){
        this.object = object;
        this.object.style.display = "none";
        this.object.addEventListener("click"), () => {
            if(this.object.style.display === "none"){
            this.object.style.display = "initial";
            }
            else {
                this.object.style.display = "none";
            }
        }
    }
} 

let drop = document.getElementById("Dropdown__content");
drop = new Dropdown(drop);