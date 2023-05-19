const speakerWrapper = document.getElementById('speaker-wrapper');
const hambarButton = document.querySelector('.hambar');
const closeButton = document.querySelector('.cross-btn');
const hambarSection = document.querySelector('.ham-popup');

function showMenu() {
  hambarSection.style.display = 'block';
}

function hideMenu() {
  hambarSection.style.display = 'none';
}

hambarButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);
const featuredSpeakers = [
  {
    speakerImg: './properties/speaker_1.svg',
    speakerName: 'Yochai Benkler',
    designition: 'Professor',
    achievement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    speakerImg: './properties/speaker_2.svg',
    speakerName: 'SohYeong Noh',
    designition: 'CEO Mtech',
    achievement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    speakerImg: './properties/speaker_3.svg',
    speakerName: 'Lila tretikov',
    designition: 'Director Oslo Int.',
    achievement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    speakerImg: './properties/speaker_4.svg',
    speakerName: 'Kilnam Chon',
    designition: 'Researcher',
    achievement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    speakerImg: './properties/speaker_5.svg',
    speakerName: 'Julia Leda',
    designition: 'Developer',
    achievement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    speakerImg: './properties/speaker_6.svg',
    speakerName: 'Ryan Merkley',
    designition: 'Student',
    achievement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
];

featuredSpeakers.forEach((speaker) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('speaker', 'col-md-5');
  newDiv.innerHTML = `
          <img src="${speaker.speakerImg}" alt="">
          <div class="speaker-details">
            <h3>${speaker.speakerName}</h3>
            <p class="designition">${speaker.designition}</p>
            <div class="speaker-border"></div>
            <p class="speaker-work">${speaker.achievement}</p>
          </div>`;
  speakerWrapper.append(newDiv);
});