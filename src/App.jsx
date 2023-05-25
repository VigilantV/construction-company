import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/main pages/home page/HomePage";
import AboutUsPage from "./components/main pages/about us/AboutUsPage";
import TemplatePage from "./components/main pages/template page/TemplatePage";
import services from "./data information/services";
import companyProjects from "./data information/companyProjects";
import directorProjects from "./data information/directorProjects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about_us" element={<AboutUsPage />} />

        <Route path="/services">
          {services.map((service) => (
            <Route
              key={service.id}
              path={service.link}
              element={
                <TemplatePage
                  activeId={service.id}
                  directoryName="Services"
                  title={service.title}
                  text={service.text}
                  dataDirectory={services}
                  parentLink="/services"
                />
              }
            />
          ))}
        </Route>

        <Route path="/projects">
          <Route path="company_projects">
            {companyProjects.map((project) => (
              <Route
                key={project.id}
                path={project.link}
                element={
                  <TemplatePage
                    activeId={project.id}
                    directoryName="Company Projects"
                    title={project.title}
                    text={project.text}
                    dataDirectory={companyProjects}
                    parentLink="/projects/company_projects"
                  />
                }
              />
            ))}
          </Route>
          <Route path="director_projects">
            {directorProjects.map((project) => (
              <Route
                key={project.id}
                path={project.link}
                element={
                  <TemplatePage
                    activeId={project.id}
                    directoryName="director Projects"
                    title={project.title}
                    text={project.text}
                    dataDirectory={directorProjects}
                    parentLink="/projects/director_projects"
                  />
                }
              />
            ))}
          </Route>
        </Route>

        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
