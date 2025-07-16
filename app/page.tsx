"use client";
import * as React from "react";

const getStorybookSrc = (): string => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:6006"
    : "/storybook/index.html";
};

const Home = () => {
  const [src, setSrc] = React.useState("/storybook/index.html");

  React.useEffect(() => {
    setSrc(getStorybookSrc());
  }, []);

  return (
    <iframe
      src={src}
      className="w-full h-screen"
      title="Storybook"
      tabIndex={0}
      aria-label="Storybook Preview"
    />
  );
};

export default Home;
