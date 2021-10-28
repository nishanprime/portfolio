import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Quick Info",
      desc: "Slide next for more info",
      img: "https://www.freepnglogos.com/uploads/minions-png/minions-shoeps-19.png",
    },
    {
      id: "2",
      title: "",
      desc: "I am an international student, currently a sophomore at Drexel University. I am pursuing my undergrad degree, majoring in Computer Science and minoring in Finance. I am also one of the 14 students across the globe to receive prestigious 'Drexel Global Scholarship', which is a full ride scholarship to attend Drexel University",
      img: "https://thumbs.dreamstime.com/b/international-student-sketch-23077326.jpg",
    },
    {
      id: "3",
      title: "",
      desc: "I consider myself a tireless seeker of knowledge and am extremely passionate about CS and finance. I enjoy developing websites and facing the challenges while building them. I am also a very good team player, and all these years of working in a team while developing websites can confirm that as well.",
      img: "https://st.depositphotos.com/1994497/4415/v/600/depositphotos_44151989-stock-illustration-perseverance.jpg",
    },
    {
      id: "4",
      title: "",
      desc: "If you think, I might be any use for you, please let me know through the contact form below. Or, you can shoot me an email at nt554@drexel.edu",
      img: "https://static.vecteezy.com/system/resources/previews/003/241/821/non_2x/query-and-ask-question-vector.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h1>{d.title}</h1>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
