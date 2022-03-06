export const applyBlur = () => {
  document.querySelector('*').style.overflow = 'hidden';
  document.querySelector('nav').style.filter = 'blur(3px)';
  const nodes = document.querySelectorAll('main > div:not(.fixed-modal-container), main > section');
  for (let i = 0; i < nodes.length; i += 1) {
    nodes[i].style.filter = 'blur(3px)';
    nodes[i].style.pointerEvents = 'none';
  }
};

export const restorBlur = () => {
  document.querySelector('*').style.overflow = 'auto';
  document.querySelector('nav').style.filter = 'blur(0)';
  const nodes = document.querySelectorAll('main > div:not(.fixed-modal-container), main > section');
  for (let i = 0; i < nodes.length; i += 1) {
    nodes[i].style.filter = 'blur(0)';
    nodes[i].style.pointerEvents = 'auto';
  }
};
