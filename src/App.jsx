import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DeviceProvider } from "./components/common/use contexts/DeviceContext";
import { MenuItemsListProvider } from "./components/common/use contexts/MenuItemsListContext";
import UseScrollToTop from "./components/common/useScrollToTop";
import AnimatedNavbarInterface from "./components/common/AnimatedNavbarInterface";
import HomePage from "./components/main pages/home page/HomePage";
import AboutUsPage from "./components/main pages/about us/AboutUsPage";
import TemplatePage from "./components/main pages/template page/TemplatePage";
import HSE_Page from "./components/main pages/HSE/HSE_Page";
import services from "./data information/services";
import companyProjects from "./data information/companyProjects";
import directorProjects from "./data information/directorProjects";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter basename={"/construction-company"}>
        <UseScrollToTop>
          <DeviceProvider>
            <MenuItemsListProvider>
              <Routes>
                <Route
                  exact
                  path="/home"
                  element={<AnimatedNavbarInterface children={<HomePage />} />}
                />
                <Route
                  exact
                  path="/about_us"
                  element={
                    <AnimatedNavbarInterface children={<AboutUsPage />} />
                  }
                />

                <Route path="/services">
                  {services.map((service) => (
                    <Route
                      key={service.id}
                      path={service.link}
                      element={
                        <AnimatedNavbarInterface
                          children={
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
                          <AnimatedNavbarInterface
                            children={
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
                          <AnimatedNavbarInterface
                            children={
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
                        }
                      />
                    ))}
                  </Route>
                </Route>

                <Route
                  exact
                  path="/HSE"
                  element={<AnimatedNavbarInterface children={<HSE_Page />} />}
                />

                <Route path="/" element={<Navigate replace to="/home" />} />
              </Routes>
            </MenuItemsListProvider>
          </DeviceProvider>
        </UseScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
