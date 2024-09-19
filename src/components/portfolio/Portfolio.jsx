import { useRef } from "react";
import "./portfolio.scss";
import nexgenglam from '../../../public/nexgenglam.png'
import mapImg from '../../../public/map.jpg'
import empImg from '../../../public/Emp.png'
import restaurantImg from '../../../public/restaurantImg.png'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "NexGenGlam E-Commerce",
    img: nexgenglam,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    netlify: "https://nexgenglam.netlify.app",
  },
  {
    id: 2,
    title: "CRUD Operation with Google map",
    img: mapImg,
    desc: "CRUD Operation with Google map integration",
    netlify: "https://bynry.netlify.app",
  },
  {
    id: 3,
    title: "Employee Management System",
    img: empImg,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    netlify: " https://pranay310.github.io/Employee_Management_System/",

  },
  {
    id: 4,
    title: "Restaurant Website",
    img: restaurantImg,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    netlify: "https://pranay310.github.io/Restaurant_HeadsUp_Wesite/",

  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 400]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.netlify} target="_blank">View Project</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
