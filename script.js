
// // Reaction
// reactionContainer = document.querySelector(".section-container.red .type-score span")
// reactionContainer.textContent = 10;

// // Memory 
// memoryContainer = document.querySelector(".section-container.yellow .type-score span")
// memoryContainer.textContent = 10;

// // Verbal 
// verbalContainer = document.querySelector(".section-container.green .type-score span")
// verbalContainer.textContent = 10;

// // Visual 
// visualContainer = document.querySelector(".section-container.blue .type-score span")
// visualContainer.textContent = 10;

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    const reactionData = data.find(item => item.category === 'Reaction');

    const reactionContainer = document.querySelector('.section-container.red .type-score span');
    if (reactionContainer && reactionData) {
      reactionContainer.textContent = reactionData.score;
    }
    const memoryData = data.find(item => item.category === 'Memory');

    const memoryContainer = document.querySelector('.section-container.yellow .type-score span');
    if (memoryContainer && memoryData) {
      memoryContainer.textContent = memoryData.score;
    }

    const verbalData = data.find(item => item.category === 'Verbal');

    const verbalContainer = document.querySelector('.section-container.green .type-score span');
    if (verbalContainer && verbalData) {
      verbalContainer.textContent = verbalData.score;
    }

    const visualData = data.find(item => item.category === 'Visual');

    const visualContainer = document.querySelector('.section-container.blue .type-score span');
    if (visualContainer && visualData) {
      visualContainer.textContent = visualData.score;
    }
  });