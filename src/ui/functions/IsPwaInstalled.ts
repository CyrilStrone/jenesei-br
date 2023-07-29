const isPwaInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches;
};

export default isPwaInstalled;