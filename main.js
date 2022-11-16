import {createListItem,createProjectListTitle,renderProjectList,renderProfLinkList} from "./linkprofile.js";
const link_list = document.getElementById("linklist");
const project_list = document.getElementById('project_list');

const links = [
	//Link                            SVG Class        Title
	['https://github.com/bora-sen','fi-xnsuxl-github',"Github"],
	['https://www.linkedin.com/in/bborasen','fi-xnsuxl-linkedin',"LinkedIn"],
	['https://www.instagram.com/senkisibora','fi-xnsuxl-instagram',"Instagram"]
];
const projects = [
	//Link      Title
	['TodoApp',"TodoApp"]
];

renderProfLinkList(links,link_list);
createProjectListTitle(project_list);
renderProjectList(projects,project_list);

