class Dropdown {
    constructor(element) {
      this.element = element;
  
      this.element.parentNode.addEventListener("click", () => {
        this.element.classList.add("myDropDown");
      });
    }
  }
  
  let dropdowncontent = document.getElementsByClassName("dropdown-content");
  dropdowncontent = Array.from(dropdowncontent).map(content => {
    return new Dropdown(content)
  });