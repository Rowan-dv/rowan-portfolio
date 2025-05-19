// Project data structure
const projects = [
    {
        title: "프로젝트 1",
        description: "첫 번째 프로젝트에 대한 설명입니다. 사용된 기술과 주요 기능을 간단히 설명합니다.",
        link: "#"
    },
    {
        title: "프로젝트 2",
        description: "두 번째 프로젝트에 대한 설명입니다. 프로젝트의 목표와 성과를 설명합니다.",
        link: "#"
    },
    {
        title: "프로젝트 3",
        description: "세 번째 프로젝트에 대한 설명입니다. 프로젝트에서의 역할과 기여도를 설명합니다.",
        link: "#"
    }
];

// DOM Elements
const projectList = document.querySelector('.project-list');

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">자세히 보기</a>
    `;
    
    return card;
}

// Render all project cards
function renderProjects() {
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectList.appendChild(card);
    });
}

// Smooth scroll functionality
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website initialized');
    renderProjects();
    initSmoothScroll();
}); 