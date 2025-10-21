import React from "react";
import DivHome from "../Components/DivHome";

export default function Home() {
  const data = [
    {
      head: "Section1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet est et debitis repellendus, dolores minima tempore at saepe iure temporibus officia quidem voluptate deserunt ducimus eius? Corrupti,  a! Dolores, ab?",
    },
    {
      head: "Section2",
      content: "Lorem ipsum dolor sit amet consectetur,  ",
    },
    {
      head: "Section3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet est et debitis repellendus, ",
    },
    {
      head: "Section4",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet est et debitis repellendus, dolores minima tempore at saepe iure temporibus officia quidem voluptate deserunt ducimus eius? Corrupti",
    },
  ];
  return (
    <>
      {data.map((d) => {
        return <DivHome head={d.head} content={d.content} key={d.head} />;
      })}
    </>
  );
}
