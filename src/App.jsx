import { useState, useRef } from 'react';
import './App.css';

function App() {
  const onBurgerClick = () => {
    setBurgerFlag(true);
  };

  const nextSlide = () => {
    currentSlide !== 4 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(1);
  };
  const prevSlide = () => {
    currentSlide !== 1 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(4);
  };
  const aboutRef = useRef();
  const hobbyRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const [burgerFlag, setBurgerFlag] = useState(false);
  const menu = [
    { title: 'ПPO ceбe', href: aboutRef },
    { title: 'хоббі', href: hobbyRef },
    { title: 'Портфолiо', href: portfolioRef },
    { title: 'КонTакTи', href: contactRef },
  ];
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <div>
      <div
        className=" h-[100px] fixed w-full px-6  header:px-24  z-20 content-center mb-[106px]
        bg-red">
        <div className="flex flex-row-reverse text-right  header:flex-row  justify-between h-full  items-center">
          <h1 className="text-white text-[20px] hobby:text-h   ">кунтий мар’ян</h1>
          <svg
            onClick={onBurgerClick}
            className="header:hidden block"
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="3" fill="white" />
            <rect y="7" width="28" height="3" fill="white" />
            <rect y="14" width="28" height="3" fill="white" />
          </svg>

          <div className=" hidden  header:flex my-0  gap-20  items-center">
            {menu.map((obj) => (
              <h2
                onClick={() => {
                  setBurgerFlag(false);
                  window.scrollTo(0, obj.href.current.offsetTop - 100);
                }}
                className="uppercase cursor-pointer font-[400] text-p ">
                {obj.title}
              </h2>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-[80%] px-8 py-10 h-full top-0 lef-0 ${
          burgerFlag ? 'fixed' : 'hidden'
        } bg-burger z-20`}>
        <svg
          onClick={() => setBurgerFlag(false)}
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="0.039856"
            y="20.3388"
            width="28"
            height="3"
            transform="rotate(-45 0.039856 20.3388)"
            fill="white"
          />
          <rect
            x="19.8388"
            y="22.4601"
            width="28"
            height="3"
            transform="rotate(-135 19.8388 22.4601)"
            fill="white"
          />
        </svg>
        {menu.map((obj) => (
          <h2
            onClick={() => {
              setBurgerFlag(false);
              window.scrollTo(0, obj.href.current.offsetTop - 100);
            }}
            className="text-white text-[24px] mt-4 cursor-pointer">
            {obj.title}
          </h2>
        ))}
      </div>
      <div className="wrapper mx-auto   flex flex-col items-center justify-center px-10 pt-[200px]">
        <div>
          <div className="flex justify-center  tab:justify-between mb-24     tab:mb-[250px] flex-wrap gap-20 ">
            <img
              className=" min:h-[463px] w-[360px] h-[360px]  min:w-[463px] outline-[20px] outline outline-gray"
              src={'/1.png'}
              alt="1"
            />
            <h1 className="text-h text-center max-h-[625px]">
              добрий день,<br></br> я є Мар’ян, я студент <br></br>
              <a href="https://lnam.edu.ua/uk/" className="text-red">
                ЛНАМ
              </a>
            </h1>
          </div>
        </div>
        <div className="flex flex-col tab:flex-row items-center justify-center  tab:justify-between gap-20 mb-24  tab:mb-[250px]">
          <div>
            <h1 ref={aboutRef} className="text-h ">
              про себе
            </h1>
            <p className="text-p  text-center tab:text-left">
              Мене звати Кунтий Мар’ян, мені 19 років. На даний момент навчаюся в Львівській
              Національній Академії Мистецтв на факультеті дизайну. Творчий шлях почався з навчання
              в художній школі, а дизайном зацікавився дуже спонтанно. За три роки навчання в
              академії, до мене нарешті дійшло, що графічний дизайн то не моє, тож в майбутньому я
              планую зайнятися промисловим дизайном.
            </p>
          </div>
          <img
            className=" min:h-[463px] w-[360px] h-[360px] h min:w-[463px] outline-[20px] outline outline-gray"
            src={'/2.png'}
            alt="1"
          />
        </div>
        <div className="mb-24  tab:mb-[250px]  ">
          <h1 ref={portfolioRef} className="text-h text-center mb-10 ">
            портфолiо{' '}
          </h1>
          <div className="relative hidden tab:block mb-8">
            <img
              className="w-[1059px]  select-none	relative outline-[20px] outline  outline-gray h-[539px]"
              src={`/slides/${currentSlide}.png`}
              alt="d"
            />
            <svg
              onClick={prevSlide}
              className=" hover:scale-125 cursor-pointer text-red absolute top-[250px] left-[-50px]"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.000494484 31.2016L61.3507 0.588694L61.6488 61.2097L0.000494484 31.2016Z"
                fill="#D13D3D"
              />
            </svg>

            <svg
              onClick={nextSlide}
              className="text-red hover:scale-125 cursor-pointer absolute top-[250px] left-[1050px]"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M62 31L0.499997 61.3109L0.5 0.689109L62 31Z" fill="#D13D3D" />
            </svg>
          </div>
          <div className=" hidden tab:flex pt-5 justify-center gap-8 mx-auto">
            {[...new Array(4)].map((_, index) => (
              <div
                onClick={() => setCurrentSlide(index + 1)}
                className={` cursor-pointer  w-8 h-8 rounded-full ${
                  index + 1 === currentSlide ? 'bg-red' : 'bg-gray'
                } `}></div>
            ))}
          </div>
          <div className="tab:hidden block">
            {[...new Array(4)].map((_, index) => (
              <img
                className=" w-[566px] h-[279  px] min:w-[849px] min:h-[417px] ob mb-4 aspect-video"
                src={`/slides/${index + 1}.png`}
                alt="3"
              />
            ))}
          </div>
        </div>
        <div className="mb-24  tab:mb-[250px]">
          <h1 ref={hobbyRef} className="text-h mb-5 ">
            хоббі{' '}
          </h1>
          <div className="flex  items-center justify-center flex-col hobby:flex-row  hobby:justify-between  mb-20     gap-16">
            <img
              className="  min:h-[463px] w-[360px] h-[360px] h min:w-[463px] outline-[20px] outline outline-gray"
              src={`/hobby/1.png`}
              alt="1"
            />
            <p>
              Одним з моїх хобі є скульптура. Переважно кераміка. Дуже багато різних об’ємних форм в
              мене часто на думці, відповідно треба дати їм життя
            </p>
          </div>
          <div className="flex items-center  justify-center flex-col-reverse hobby:flex-row  hobby:justify-between  mb-20     gap-16">
            <p className=" text-center  hobby:text-right h-full my-auto">
              Також я досить давно займаюсь скейтбордингом. Останнім часом це відбувається досить
              рідко, <br /> проте це завжди знімає стрес.
            </p>
            <img
              className="  min:h-[463px] w-[360px] h-[360px] h min:w-[463px] outline-[20px] outline outline-gray"
              src={'/hobby/2.png'}
              alt="1"
            />
          </div>
          <div className="flex items-center  justify-center flex-col hobby:flex-row  hobby:justify-between  gap-16">
            <img
              className="  min:h-[463px] w-[360px] h-[360px] h min:w-[463px] outline-[20px] outline outline-gray"
              src={'/hobby/3.png'}
              alt="1"
            />
            <p className="h-full my-auto">
              Графіті теж займає місце в моєму житті. Можливо багато хто скаже що це вандалізм і це
              нелегально, але набагато більше вандалізіму чиниться до пам’яток архітекури.
              Нелегальна забудова також є серйозною проблемою. Та чомусь людей це турбує набагато
              менше ніж графіті.
            </p>
          </div>
        </div>
      </div>
      {/* contacts */}
      <div
        ref={contactRef}
        className="  min-h-[180px] flex justify-center items-center bg-white tab:bg-bottom  tab:px-[250px]">
        <div className="flex flex-col tab:flex-row justify-center   text-center items-center h-full">
          <h1 className=" tab:text-white my-[40px] text-black tab:mr-[150px] mb-12  ">Контакти:</h1>
          <div className="flex tab:flex-row items-end justify-end tab:gap-[110px] gap-14  flex-col ">
            <a href="https://www.instagram.com/_.xpucmoc._/">
              <svg
                className=" hidden tab:block"
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="3.5"
                  y="3.5"
                  width="87"
                  height="87"
                  rx="26.5"
                  stroke="white"
                  stroke-width="7"
                />
                <path
                  d="M65.5 46.5C65.5 56.9213 56.8425 65.5 46 65.5C35.1575 65.5 26.5 56.9213 26.5 46.5C26.5 36.0787 35.1575 27.5 46 27.5C56.8425 27.5 65.5 36.0787 65.5 46.5Z"
                  stroke="white"
                  stroke-width="7"
                />
                <circle cx="70.5" cy="23.5" r="4.5" fill="white" stroke="white" stroke-width="4" />
              </svg>
              <svg
                className=" block tab:hidden"
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="3.5"
                  y="3.5"
                  width="87"
                  height="87"
                  rx="26.5"
                  stroke="#2A2020"
                  stroke-width="7"
                />
                <path
                  d="M65.5 46.5C65.5 56.9213 56.8425 65.5 46 65.5C35.1575 65.5 26.5 56.9213 26.5 46.5C26.5 36.0787 35.1575 27.5 46 27.5C56.8425 27.5 65.5 36.0787 65.5 46.5Z"
                  stroke="#2A2020"
                  stroke-width="7"
                />
                <circle
                  cx="70.5"
                  cy="23.5"
                  r="4.5"
                  fill="white"
                  stroke="#2A2020"
                  stroke-width="4"
                />
              </svg>
            </a>
            <a href="https://t.me/kvitkapomidora">
              <svg
                className=" hidden tab:block"
                width="100"
                height="83"
                viewBox="0 0 100 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M90.1058 1.35028C57.1608 14.3072 -8.17161 40.0017 0.84573 45.1355L18.0932 51.4597C24.1433 54.1626 28.1239 52.0334 37.508 46.3017C47.8625 39.9772 63.4042 28.3709 70.7386 23.2126C77.0246 18.7916 79.3575 23.519 76.3374 26.9579C70.2973 32.976 56.6638 46.3016 50.4511 51.4597C44.2384 56.6177 46.1367 61.3466 47.8625 63.0663C51.7454 65.6455 62.1 72.6093 72.4545 79.831C82.809 87.0527 88.8491 80.2608 90.5749 75.9622C92.7321 57.0481 97.5642 16.8988 99.6351 7.61373C101.706 -1.67129 94.4578 -0.55365 90.5749 1.1658L90.1058 1.35028Z"
                  fill="white"
                />
              </svg>
              <svg
                className=" block tab:hidden"
                width="100"
                height="83"
                viewBox="0 0 100 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M90.1058 1.35027C57.1608 14.3072 -8.1716 40.0017 0.845743 45.1355L18.0932 51.4597C24.1433 54.1626 28.1239 52.0335 37.508 46.3017C47.8625 39.9772 63.4042 28.3709 70.7386 23.2126C77.0246 18.7916 79.3575 23.519 76.3374 26.9579C70.2973 32.976 56.6638 46.3016 50.4511 51.4597C44.2384 56.6177 46.1367 61.3466 47.8625 63.0663C51.7454 65.6455 62.1 72.6093 72.4545 79.831C82.809 87.0527 88.8491 80.2608 90.5749 75.9622C92.7321 57.0481 97.5642 16.8988 99.6351 7.61373C101.706 -1.67129 94.4578 -0.55365 90.5749 1.1658L90.1058 1.35027Z"
                  fill="#2A2020"
                />
              </svg>
            </a>
            <a href="mailto:konigsegger@gmail.com">
              <svg
                className=" hidden tab:block"
                width="116"
                height="84"
                viewBox="0 0 116 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M109.412 2.30518L57.393 36.0305L5.26324 2.30518C5.26324 2.30518 1.80758 3.94843 0 11.1884V70.9109C0 70.9109 0.840958 81.0846 11.6816 83.2498H102.834C102.834 83.2498 112.708 82.0995 115.008 71.5682V11.1884C115.008 11.1884 112.703 3.7841 109.412 2.30518ZM101.843 74.3666H13.3248V23.363L57.3881 51.1677L101.838 23.363V74.3666H101.843Z"
                  fill="white"
                />
                <path d="M9.37622 0H105.26L92.7954 8.14376H21.9664L9.37622 0Z" fill="white" />
              </svg>
              <svg
                className=" block tab:hidden"
                width="116"
                height="84"
                viewBox="0 0 116 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M109.412 2.30542L57.393 36.0307L5.26324 2.30542C5.26324 2.30542 1.80758 3.94867 0 11.1886V70.9112C0 70.9112 0.840958 81.0848 11.6816 83.25H102.834C102.834 83.25 112.708 82.0998 115.008 71.5685V11.1886C115.008 11.1886 112.703 3.78435 109.412 2.30542ZM101.843 74.3668H13.3248V23.3632L57.3881 51.168L101.838 23.3632V74.3668H101.843Z"
                  fill="#2A2020"
                />
                <path d="M10 0H105.884L93.4192 8.14376H22.5902L10 0Z" fill="#2A2020" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
