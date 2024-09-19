import { useRef, useState } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const services = [
    'Building Dynamic UIs',
    'Component-Based Architecture',
    'State Management Expertise',
    'Optimized Performance',
    'Seamless API Integration',
  ]

  let toggleVar = false;

  const toggle = () => {
    console.log('hee')
    toggleVar = !toggleVar;
    console.log(toggleVar)
  }

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className=" services-container">
      <section className=" service-stars"></section>
      <header className=" services-heading">
        <h1>Techanics</h1>
      </header>
      {
        services.map((service, index) => {
          toggleVar = !toggleVar
          console.log(toggleVar)
          return (
            <section key={index} className=" comment-section">
              <article className=" left-article">
                {
                  toggleVar
                    ? <>
                      <h1 className=" contribution">{service}</h1>
                      <div className=" midLines"></div>
                    </>
                    : null
                }

              </article>
              <article className=" right-article">
                {
                  toggleVar ? null : <>
                    <div className=" midLinesLeft"></div>
                    <h1 className=" contribution">{service}</h1>
                  </>
                }
              </article>
            </section>
          )
        })
      }
    </div>
  );
};

export default Services;
