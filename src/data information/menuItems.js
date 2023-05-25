import services from "./services";
import companyProjects from "./companyProjects";
import directorProjects from "./directorProjects";

const subServices = services.map((service) => {
  return { title: service.title, link: `/services/${service.link}` };
});

const subCompanyProjects = companyProjects.map((companyProject) => {
  return {
    title: companyProject.title,
    link: `/projects/company_projects/${companyProject.link}`,
  };
});

const subDirectorProjects = directorProjects.map((directorProject) => {
  return {
    title: directorProject.title,
    link: `/projects/director_projects/${directorProject.link}`,
  };
});

const menuItems = [
  {
    title: "HOME",
    link: "/home",
  },
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "SERVICES",
    subMenu: subServices,
  },
  {
    title: "PROJECTS",
    subMenu: [
      {
        title: "COMPANY PROJECTS",
        subMenu: subCompanyProjects,
      },
      {
        title: "DIRECTOR PROJECTS",
        subMenu: subDirectorProjects,
      },
    ],
  },
  {
    title: "HSE",
    link: "/HSE",
  },
  {
    title: "CONTACT US",
    link: "/contact_us",
  },
];

export default menuItems;
