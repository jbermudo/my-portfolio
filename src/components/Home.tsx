import React from "react";
const Home: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-10">
        <div className="w-full">
          <div>img</div>
        </div>
        <div className="w-full uppercase inria-sans-regular text-[30px] tracking-wider h-screen flex justify-start p-10">
          <p>
            "Hello, I'm Jesus Bermudo, a dedicated and versatile Full Stack Web
            Developer with a passion for building dynamic, user-friendly web
            applications from the ground up. With a keen eye for detail and a
            deep understanding of both front-end and back-end technologies, I
            specialize in transforming complex ideas into seamless, functional
            digital experiences. Whether it's developing responsive user
            interfaces, crafting efficient server-side logic, or optimizing
            performance, I strive to deliver innovative solutions that not only
            meet client needs but also push the boundaries of modern web
            development. Let's build something remarkable together."
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
