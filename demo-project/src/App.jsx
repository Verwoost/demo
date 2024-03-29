import "./styles.css";
import logoSpace from "./assets/moon.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useLayoutEffect } from "react";
import Posts from "./Posts";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".animatem", {
        scrollTrigger: {
          trigger: ".animatem",
          start: "top 60%",
          end: "top 10%",
          markers: true,
          toggleActions: "restart none none none",
        },
        left: 0,
        // xPercent: -40,
        opacity: 1,
        duration: 1,
      });
    }, app); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={app}>
      <Posts></Posts>
      <div className="section_space">
        <header className="header_space">
          <img src={logoSpace} className="logo"></img>
          <div className="header_links">
            <a className="header_link" href="">
              Go To
            </a>
            <a className="header_link" href="">
              Go To
            </a>
            <a className="header_link" href="">
              Go To
            </a>
            <a className="header_link" href="">
              Go To
            </a>
          </div>
        </header>
        <div className="hero">
          <div className="hero_text-items animate">
            <h2 className="hero_title">Hello World!</h2>
            <p className="hero_txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              aut veniam quasi magnam, excepturi quas minus maiores non
              praesentium aspernatur architecto fugit placeat distinctio
              eligendi quis repudiandae voluptate repellat velit.
            </p>
            <button>Call to Action</button>
          </div>
        </div>
        <div className="hero">
          <div className="hero_text-items animatem">
            <h2 className="hero_title">Hello World!</h2>
            <p className="hero_txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              aut veniam quasi magnam, excepturi quas minus maiores non
              praesentium aspernatur architecto fugit placeat distinctio
              eligendi quis repudiandae voluptate repellat velit.
            </p>
            <button>Call to Action</button>
          </div>
        </div>
        <div className="article_wrapper">
          <article className="article_left article_left_space">
            <ul>
              Lijst
              <li>item 1</li>
              <li>item 1</li>
              <li>item 1</li>
              <li>item 1</li>
            </ul>
          </article>
          <article className="article_right article_right space">
            <img src={logoSpace} alt="" />
          </article>
        </div>
        <div className="hero">
          <div className="hero_text-items animatem">
            <h2 className="hero_title">Hello World!</h2>
            <p className="hero_txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              aut veniam quasi magnam, excepturi quas minus maiores non
              praesentium aspernatur architecto fugit placeat distinctio
              eligendi quis repudiandae voluptate repellat velit.
            </p>
            <button>Call to Action</button>
          </div>
        </div>
        <div className="hero">
          <div className="hero_text-items">
            <h2 className="hero_title">Hello World!</h2>
            <p className="hero_txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              aut veniam quasi magnam, excepturi quas minus maiores non
              praesentium aspernatur architecto fugit placeat distinctio
              eligendi quis repudiandae voluptate repellat velit.
            </p>
            <button>Call to Action</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
