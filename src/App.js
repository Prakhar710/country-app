import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from "./components/header";
import Main from "./components/main";
import './App.css';
import Country from './components/CountryCard/Country';
import NotFound from './components/NotFoundPage';
import { ThemeProvider } from "styled-components";


const LightTheme = {
  pageBackground: "#FFFFFF",
  titleColor: "#111517",
  tagLineColor: "black",
  toggleColor : "black",
  shadowColor : "#858585"
};

const DarkTheme = {
  pageBackground: "#2B3945",
  mainColor: "#202C37",
  shadowColor : "#1C262E",
  titleColor: "#FFFFFF",
  tagLineColor: "lavender",
  toggleColor : "white"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}



function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]} >
      <Router>
      <div className="app">
        <Header theme={theme} setTheme={setTheme}/>
        <Switch>
          <Route path="/country-app" exact component={Main} />
          <Route path="/countries/:id"  children={<Country />} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/country-app" />
          <Redirect from="/" to="/not-found" />
        </Switch>
      </div>
      </Router>
    </ThemeProvider>
  );
}

export default App
