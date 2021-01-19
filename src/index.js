import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function Dep(props) {
  return (
    <section className="bookde">
      {props.booz.map((boo) => {
        const { linkk, tit, aut, id } = boo;
        return (
          <div key={id} className="books">
            <img src={linkk} alt="name"></img>
            <h1>{tit}</h1>
            <h4>{aut}</h4>
            <button type="button" onClick={() => felixGallardo()}>
              {/*  ideal format */}
              heyyyyyy
            </button>
            ;
          </div>
        );
      })}
    </section>
  );
}

const fbook = [
  {
    id: 1,
    linkk:
      "https://lh3.googleusercontent.com/-NJcoSThdoh8/X2eWKyZRbXI/AAAAAAABWQo/bx-ZuOHAVNELiFpeumxM1Rp6jV79jm_LgCLcBGAsYHQ/5532ee3f3995482396b513c818f5dc75-g.jpg",
    tit: "Think Like a Monk",
    aut: "Jay Shetty",
  },
  {
    id: 2,
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/510dqZ+GPqL._SY344_BO1,204,203,200_.jpg",
    tit: "The Pursuit of Happiness: A Book of Studies and Strowings",
    aut: "Daniel G. Brinton",
  },
  {
    id: 4,
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
    tit: "Ikigai: The Japanese secret to a long and happy life",
    aut: "Héctor García and Francesc Miralles ",
  },
  {
    id: 3,
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg",
    tit: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
    aut: " Jeff Keller  ",
  },
  {
    id: 5,
    linkk:
      "https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg",
    tit: "Sapiens: A Brief History of Humankind ",
    aut: "Yuval Noah Harari ",
  },
];
const felixGallardo = () => {
  console.log("ElPadrino");
};

function Book() {
  return (
    <div className="bookde">
      <Dep booz={fbook}></Dep>
    </div>
  );
}

ReactDom.render(<Book />, document.getElementById("root"));
