"use client";
import * as React from "react";

// Hàm lấy src cho Storybook dựa vào môi trường
const getStorybookSrc = (): string => {
  // Nếu chạy trên browser và là localhost thì trả về local storybook
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return "http://localhost:6006";
  }
  // Ngược lại trả về static storybook trên production
  return "/storybook/index.html";
};

const Home = () => {
  // State để lưu src của iframe
  const [src, setSrc] = React.useState("/storybook/index.html");

  // Cập nhật src khi component mount
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
