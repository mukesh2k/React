import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function Book() {
  return (
    <section className="bookde">
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
    </section>
  );
}
const Image = () => {
  return (
    <article className="books">
      <img
        src="https://lh3.googleusercontent.com/-NJcoSThdoh8/X2eWKyZRbXI/AAAAAAABWQo/bx-ZuOHAVNELiFpeumxM1Rp6jV79jm_LgCLcBGAsYHQ/5532ee3f3995482396b513c818f5dc75-g.jpg"
        alt="mok"
      ></img>
      <Name></Name>
      <How></How>
    </article>
  );
};
const Name = () => <h2>Life of Monk</h2>;
const How = () => <p>jay</p>;

ReactDom.render(<Book />, document.getElementById("root"));
