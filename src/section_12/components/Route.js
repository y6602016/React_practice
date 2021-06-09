import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      // set the path for the root component
      setCurrentPath(window.location.pathname);
    };

    // detect the popstate event from the onClick, evoke the call back func
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.addEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
