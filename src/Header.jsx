import React, { useLayoutEffect, useRef, useState, useContext } from "react";
import { AppContext } from "./App";
import logo from "./assets/logo.webp";
import ukraine from "./assets/ukraine.webp";
import germany from "./assets/germany.webp";
import netherlands from "./assets/netherlands.webp";
import poland from "./assets/poland.webp";
import "./styles/header.scss";

export function Header() {
  const { previewURL, openPanel, setOpenPanel } = useContext(AppContext);
  const [language, setLanguage] = useState(false);
  const hero = useRef();
  const avatar = useRef();

  const isOpenLanguage = () => setLanguage(!language);

  const getNameLanguage = (event) => {
    const el = event.target.closest('.language-body-item');
    const img = el.children[0];
    const dataHero = img.dataset.name;

    document.querySelector('.language-body-item.active').classList.remove('active');
    el.classList.add('active');

    avatar.current.src = `/src/assets/${dataHero}.webp`;
    avatar.current.alt = img.alt;
  }

  const toggleBurger = () => setOpenPanel(!openPanel);

  useLayoutEffect(() => {
    if (previewURL === '') return;
    hero.current.src = previewURL;
  });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header-logo">
          <svg
            width="169"
            height="43"
            viewBox="0 0 169 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4_2919)">
              <path
                d="M157.432 17.9161L156.393 21.2458H158.574L157.523 17.9161H157.432Z"
                fill="url(#paint0_linear_4_2919)"
              />
              <path
                d="M150.431 14.1954V26.6301H169V14.1954H150.431ZM159.588 24.4913L159.049 22.8443H155.919L155.393 24.4913H153.2L155.996 16.0984H159.036L161.848 24.4913H159.588ZM165.09 24.4913H162.859V16.0984H165.09V24.4913Z"
                fill="url(#paint1_linear_4_2919)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.3314 12.6086V24.0503L25.1948 19.9386V13.6324L20.6734 11.0255V22.5442L25.1948 25.1511L30.5297 28.2236L32.3314 27.1868L35.0523 25.6191L36.8539 24.5811V10.0065L32.3314 7.39962L25.1948 3.28909L20.6734 0.682243L19.4858 -0.00146484L14.9632 2.60539L20.6734 5.89357L25.1948 8.50042L32.3314 12.6086ZM20.1295 37.7896L10.1995 32.0687L17.3349 27.9582L22.81 31.1113L27.3314 28.5044L21.8575 25.3525L17.3361 22.7457L12.8135 25.3525L7.47862 28.4262V35.7112L15.6081 40.3941L20.1306 43.0009L24.652 40.3941L31.7886 36.2835L36.3112 33.6767L37.4988 32.993V27.7793L31.7886 31.0746L27.2672 33.6814L20.1295 37.7896ZM4.52257 13.8279L14.4537 8.10821V16.3305L8.97981 19.4824V24.6961L14.4537 21.543L18.9763 18.9361V7.57854L17.1746 6.54055L14.4537 4.97407L12.652 3.93607L4.52257 8.61891L0 11.2258V31.2298L4.52257 33.8366V13.8279Z"
                fill="url(#paint2_linear_4_2919)"
              />
              <path
                d="M44.0071 26.6302V14.1979H49.6579C52.3087 14.1979 53.9406 15.7217 53.9406 18.2954C53.9406 20.869 52.3087 22.3929 49.6579 22.3929H46.6567V26.6302H44.0071ZM46.6567 16.544V20.2102H49.3598C50.2719 20.2102 51.3076 19.8547 51.3076 18.389C51.3076 16.9232 50.2719 16.55 49.3598 16.55L46.6567 16.544Z"
                fill="white"
              />
              <path
                d="M60.9965 14.1979C63.7162 14.1979 65.3837 15.7217 65.3837 18.3653C65.3837 20.0467 64.6818 21.2897 63.4181 21.9722L65.8932 26.6302H63.0143L60.9609 22.5161H57.8896V26.6302H55.2388V14.1979H60.9965ZM57.8896 16.5097V20.3086H60.7506C62.0666 20.3086 62.734 19.6782 62.734 18.4127C62.734 17.1472 62.0666 16.5049 60.7506 16.5049L57.8896 16.5097Z"
                fill="white"
              />
              <path
                d="M67.1211 26.6302V14.1979H76.3372V16.5263H69.7707V19.3286H75.3527V21.4994H69.7707V24.3196H76.3883V26.6302H67.1211Z"
                fill="white"
              />
              <path
                d="M78.0902 26.6302V14.1979H82.671C84.5142 14.1979 85.9881 14.7583 87.0653 15.8793C88.1531 16.9825 88.6971 18.5051 88.6971 20.414C88.6971 22.323 88.1531 23.8503 87.0653 24.9665C85.9774 26.0827 84.5201 26.6254 82.671 26.6254L78.0902 26.6302ZM80.7398 16.4919V24.3362H82.5831C84.3206 24.3362 86.0273 23.4261 86.0273 20.414C86.0273 17.4019 84.3242 16.4919 82.5831 16.4919H80.7398Z"
                fill="white"
              />
              <path
                d="M90.4453 26.6302V14.1979H93.0961V26.6302H90.4453Z"
                fill="white"
              />
              <path
                d="M103.837 21.7802H106.523C106.329 23.338 105.714 24.5814 104.679 25.5103C103.644 26.4381 102.346 26.9109 100.818 26.9109C97.3088 26.9631 94.7981 24.214 94.8515 20.4317C94.7981 16.6317 97.3088 13.8648 100.818 13.9146C102.346 13.9146 103.644 14.3886 104.679 15.3164C105.715 16.2442 106.329 17.4872 106.523 19.0454H103.837C103.451 17.031 102.047 16.192 100.766 16.192C99.2043 16.192 97.5012 17.3995 97.5012 20.4116C97.5012 23.4237 99.2043 24.6323 100.766 24.6323C102.082 24.6347 103.451 23.8289 103.837 21.7802Z"
                fill="white"
              />
              <path
                d="M106.435 16.544V14.1979H116.717V16.544H112.893V26.6302H110.261V16.544H106.435Z"
                fill="white"
              />
              <path
                d="M118.246 14.1979H120.897V21.4117C120.897 22.5327 121.037 23.2863 121.529 23.8468C121.985 24.3717 122.616 24.6348 123.442 24.6348C124.267 24.6348 124.898 24.3717 125.355 23.8468C125.83 23.2863 125.987 22.5327 125.987 21.4117V14.1979H128.637V21.4994C128.637 25.0898 126.736 26.911 123.442 26.911C120.147 26.911 118.246 25.0898 118.246 21.4994V14.1979Z"
                fill="white"
              />
              <path
                d="M136.113 26.6302L133.129 17.4718V26.6302H130.55V14.1979H134.147L137.306 23.7958L140.466 14.1979H144.064V26.6302H141.483V17.4849L138.482 26.6254L136.113 26.6302Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_4_2919"
                x1="156.393"
                y1="19.581"
                x2="158.574"
                y2="19.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13957F" />
                <stop offset="0.39" stopColor="#5059F1" />
                <stop offset="0.65" stopColor="#B272D0" />
                <stop offset="1" stopColor="#F3B25A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4_2919"
                x1="148.538"
                y1="14.3542"
                x2="169.554"
                y2="25.7984"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13957F" />
                <stop offset="0.39" stopColor="#5059F1" />
                <stop offset="0.65" stopColor="#B272D0" />
                <stop offset="1" stopColor="#F3B25A" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_4_2919"
                x1="8.76128"
                y1="6.92802"
                x2="30.9651"
                y2="38.5223"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13957F" />
                <stop offset="0.39" stopColor="#5059F1" />
                <stop offset="0.65" stopColor="#B272D0" />
                <stop offset="1" stopColor="#F3B25A" />
              </linearGradient>
              <clipPath id="clip0_4_2919">
                <rect width="169" height="43" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="header-controler">
          <div className="user-content" title="User">
            <div className="user-header">
              <div className="user-header-avatar">
                <img src={logo} alt="Hero" ref={hero} />
              </div>
              <div className="user-header-name">
                <h4>Jordan</h4>
                <span>Verified</span>
              </div>
            </div>
          </div>
          <div className={language ? 'language-content open' : 'language-content'} title="Language" onClick={isOpenLanguage}>
            <div className="language-header">
              <img src={germany} alt="Germany" ref={avatar} />
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00002 8.53328C7.9045 8.53343 7.80989 8.51509 7.72166 8.47931C7.63342 8.44354 7.55331 8.39103 7.48593 8.32483L0.213199 1.21372C0.0825666 1.07928 0.0108152 0.900255 0.0132433 0.714825C0.0156713 0.529394 0.0920865 0.352227 0.226197 0.221097C0.360307 0.0899673 0.541501 0.0152498 0.731146 0.0128757C0.92079 0.0105016 1.10388 0.0806586 1.24138 0.208388L8.00002 6.81683L14.7587 0.208388C14.8962 0.0806586 15.0792 0.0105016 15.2689 0.0128757C15.4585 0.0152498 15.6397 0.0899673 15.7738 0.221097C15.9079 0.352227 15.9844 0.529394 15.9868 0.714825C15.9892 0.900255 15.9175 1.07928 15.7868 1.21372L8.51411 8.32483C8.44673 8.39103 8.36661 8.44354 8.27838 8.47931C8.19014 8.51509 8.09554 8.53343 8.00002 8.53328Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <div className="language-body" >
              <div className="language-body-item" title="Ukraine" onClick={getNameLanguage}>
                <img src={ukraine} alt="Ukraine" data-name="ukraine" />
                <span>Ukraine</span>
              </div>
              <div className="language-body-item active" title="Germany" onClick={getNameLanguage}>
                <img src={germany} alt="Germany" data-name="germany" />
                <span>Germany</span>
              </div>
              <div className="language-body-item" title="Netherlands" onClick={getNameLanguage}>
                <img src={netherlands} alt="Netherlands" data-name="netherlands" />
                <span>Netherlands</span>
              </div>
              <div className="language-body-item" title="Poland" onClick={getNameLanguage}>
                <img src={poland} alt="Poland" data-name="poland" />
                <span>Poland</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`header-burger-menu ${openPanel ? 'active' : ''}`} onClick={toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}