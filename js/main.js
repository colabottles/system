document.body.onscroll = () =>
  document.body.style.setProperty('--hue', window.scrollY / 10);