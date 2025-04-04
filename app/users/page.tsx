"use client";
import React, { useEffect, useState } from "react";
interface Users {
  id: number;
  name: string;
}
const Userspage = () => {
  const queryString = window.location.search;
  console.log(queryString);
  //using useState just to refresh the page because the window.location.search was not mounted on the initial render we had to refresh the page.
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(state + 1);
  }, []);
  const urlParams = new URLSearchParams(queryString);
  const stackTraces = urlParams.getAll("stackTrace");
  console.log(stackTraces);
  const highlightNumbers = (text: string) => {
    return text.split(/(\d+\))/).map((part, index) =>
      /\d+\)/.test(part) ? (
        <span key={index} className="text-green-400">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  const atlasErrors = stackTraces.filter((trace) =>
    trace.startsWith("com.atlas")
  );
  const otherErrors = stackTraces.filter(
    (trace) => !trace.startsWith("com.atlas")
  );
  return (
    <div className="min-h-screen px-2 bg-slate-800 text-white font-serif">
      <h1 className="py-3">Error StackTrace</h1>
      <ol className="list-decimal list-inside">
        {atlasErrors.map((atlasError, index) => (
          <li className="py-1 marker:text-gray-400" key={index}>
            {highlightNumbers(atlasError)}
          </li>
        ))}
        {otherErrors.map((otherError, index) => (
          <li className="py-1 marker:text-gray-400" key={index}>
            <span className="ml-6">{highlightNumbers(otherError)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Userspage;
