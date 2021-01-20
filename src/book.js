import React from "react";
function Dep(props) {
  return (
    <section className="bookde" onMouseOver={() => {}}>
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
const felixGallardo = () => {
  console.log("ElPadrino");
};

export default Dep;
