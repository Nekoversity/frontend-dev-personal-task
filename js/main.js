function buildComponent(title, imageSrc, description, githubLink, demoLink, elapsedTime) {
    return `<div class="col d-flex">
    <div class="card shadow-sm">
        <img src="${imageSrc}">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <a href="${githubLink}" class="btn btn-sm btn-outline-secondary" target="_blank">GitHub</a>
                    <a href="${demoLink}" class="btn btn-sm btn-outline-secondary" target="_blank">Demo</a></a>
                </div>
                <small class="text-muted">${elapsedTime}</small>
            </div>
        </div>
    </div>
    </div>`;
}

const labsData = [
    {
        title: 'Lab7 - Magic Ball',
        image: 'img/lab7.png',
        description: 'You can ask it anything and it\'ll answer you back. Ball applied with a memory object that allow it to answer exact' +
            ' questions with the same answer.',
        github: 'https://github.com/Nekoversity/frontend-dev-lab7',
        demo: 'https://nekoversity.github.io/frontend-dev-lab7/',
        elapsed: '80 mins'
    },
    {
        title: 'Lab8 - Random Game',
        image: 'img/lab8.png',
        description: 'You and computer generate random numbers, who got bigger - wins a round. You should 3 times to win a battle.',
        github: 'https://github.com/Nekoversity/frontend-dev-lab8',
        demo: 'https://nekoversity.github.io/frontend-dev-lab8/',
        elapsed: '40 mins'
    },
    {
        title: 'Lab9 - Random Card Game',
        image: 'img/lab9.png',
        description: 'Similiar to lab 8 but with cards instead of numbers.',
        github: 'https://github.com/Nekoversity/frontend-dev-lab9',
        demo: 'https://nekoversity.github.io/frontend-dev-lab9/',
        elapsed: '40 mins'
    },
    {
        title: 'Lab10 - Slot Machine',
        image: 'img/lab10.png',
        description: 'You should get 3 same emojis in a row to win a battle. There is only 3 turns available, so win rate is very low.',
        github: 'https://github.com/Nekoversity/frontend-dev-lab10',
        demo: 'https://nekoversity.github.io/frontend-dev-lab10/',
        elapsed: '100 mins'
    },
    {
        title: 'Lab11 - Language Cards',
        image: 'img/lab11.png',
        description: 'Try to guess translation of 10 words. You can move around cards while playing. Statistics included.',
        github: 'https://github.com/Nekoversity/frontend-dev-lab11',
        demo: 'https://nekoversity.github.io/frontend-dev-lab11/',
        elapsed: '130 mins'
    },
];

labsData.forEach(l => $('#labs').append(buildComponent(l.title, l.image, l.description, l.github, l.demo, l.elapsed)));
