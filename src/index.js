import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function Dep(props) {
  return (
    <section className="bookde">
      {props.booz.map((boo) => {
        const { linkk, tit, aut } = boo;
        return (
          <div className="books">
            <img src={linkk} alt="name"></img>
            <h1>{tit}</h1>
            <h4>{aut}</h4>
          </div>
        );
      })}
    </section>
  );
}

const fbook = [
  {
    linkk:
      "https://lh3.googleusercontent.com/-NJcoSThdoh8/X2eWKyZRbXI/AAAAAAABWQo/bx-ZuOHAVNELiFpeumxM1Rp6jV79jm_LgCLcBGAsYHQ/5532ee3f3995482396b513c818f5dc75-g.jpg",
    tit: "Think Like a Monk",
    aut: "Jay Shetty",
  },
  {
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/510dqZ+GPqL._SY344_BO1,204,203,200_.jpg",
    tit: "The Pursuit of Happiness: A Book of Studies and Strowings",
    aut: "Daniel G. Brinton",
  },
  {
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
    tit: "Ikigai: The Japanese secret to a long and happy life",
    aut: "Héctor García and Francesc Miralles ",
  },
  {
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg",
    tit: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
    aut: " Jeff Keller  ",
  },
  {
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg",
    tit: "Sapiens: A Brief History of Humankind ",
    aut: "Yuval Noah Harari ",
  },
];

function Book() {
  return (
    <div className="bookde">
      <Dep booz={fbook}></Dep>
    </div>
  );
}

ReactDom.render(<Book />, document.getElementById("root"));
