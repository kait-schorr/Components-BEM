class Dropdown {
    constructor(element) {
      this.element = element;
  
      this.element.parentNode.addEventListener("click", () => {
        this.element.classList.add("dropdown__content--items");
      });
    }
  }
  
  let dropdowncontent = document.getElementsByClassName("dropdown__content");
  dropdowncontent = Array.from(dropdowncontent).map(content => {
    return new Dropdown(content)
  });