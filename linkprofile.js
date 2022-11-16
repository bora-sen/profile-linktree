function createListItem (anchor_link,logo_class,link_text){
	let a_el = document.createElement('a');
	let i_el = document.createElement('i');
	let p_el = document.createElement('p');
	p_el.innerText = link_text;
	a_el.href = anchor_link;
	i_el.classList.add(logo_class);
	a_el.classList.add("links")
	a_el.appendChild(i_el);
	a_el.appendChild(p_el)
	return a_el;
}
function createProjectListTitle(parent_name){
	const prj_list_title_el = document.createElement('h3');
	const prj_list_title = "These Are Some Of My Projects..";
	prj_list_title_el.classList.add("prj_title");
	prj_list_title_el.innerText = prj_list_title;
	parent_name.appendChild(prj_list_title_el);
	return prj_list_title_el;
}
function renderProfLinkList(lnk_list,parent_name){
	lnk_list.forEach((link)=>{
		let li_item = createListItem(link[0],link[1],link[2]);
		parent_name.appendChild(li_item);
	});
}

function renderProjectList(prj_list,parent_name){
	prj_list.forEach((project) => {
		let project_logo = "fi-xnsuxl-github";
		let list_item = createListItem(`https://bora-sen.github.io/${project[0]}/`,project_logo,project[1]);
		parent_name.appendChild(list_item);	
	});
}

export {createListItem, createProjectListTitle,renderProjectList,renderProfLinkList};
