import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const [progress, setProgress] = useState(0);

  // This stuff is for Dark mode
  const [darkmode, setDarkmode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [btnColor, setBtnColor] = useState("danger");
  const darkmodeToggle = () => {
    if (darkmode === "light") {
      document.body.style.backgroundColor = "black";
      setDarkmode("dark");
      setTextColor("light");
      setBtnColor("info");
    } else {
      setTextColor("dark");
      setDarkmode("light");
      setBtnColor("danger");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <BrowserRouter>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Nav
          darkmodeToggle={darkmodeToggle}
          darkmode={darkmode}
          textColor={textColor}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                title="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                title="Business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                title="Entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                title="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                title="Health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                title="Science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                title="Sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                darkmode={darkmode}
                textColor={textColor}
                btnColor={btnColor}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                title="Technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
