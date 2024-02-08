import React from "react";
import { useAppContext } from "../hook/context";

export default function Footertail() {
  const {language} = useAppContext();
  return (
    <div className="flex flex-col gap-12 bg-gray-100 p-4">
      <h3 className="font-inter font-semibold text-5xl leading-14 md:leading-14 text-customb flex w-full max-w-screen-xl mx-auto mt-4 md:mt-16">
        {language === "en" ? (
          <>
            Let's work together on <br />
            your next product.
          </>
        ) : (
          <>
            "Haydi sonraki projenizde <br />
            birlikte çalışalım."
          </>
        )}
      </h3>

      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto mb-12">
        <a className="flex items-center gap-2" href="mailto:eceykilic@gmail.com">
          <img src=".\icons\el.svg" alt="icon" />
          <p className="font-inter font-medium text-lg leading-6 underline text-pink-700">eceykilic@gmail.com</p>
        </a>

        <nav className="flex gap-5">
          <a
            className="text-customb"
            href="https://github.com/eceykilic"
            target="_blank"
            rel="noreferrer"
          >
            Personal Blog
          </a>
          <a
            className="text-customg"
            href="https://github.com/eceykilic"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-custombl"
            href="https://www.linkedin.com/in/ece-yucel-kilic-40b856150/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </div>
  );
}
