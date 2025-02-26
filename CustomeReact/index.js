let MainContainer = document.getElementById("root");

let Element = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  value: "Visit Google",
};

function CustomRender(Element, MainContainer) {
  let El = document.createElement(Element.type);
  for (const prop in Element.props) {
    El.setAttribute(prop, Element.props[prop]);
  }
  El.innerHTML = Element.value;
  MainContainer.appendChild(El);
}

CustomRender(Element, MainContainer);
