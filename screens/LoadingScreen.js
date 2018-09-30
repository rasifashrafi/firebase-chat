function mountLoadingScreen() {
    $('#root').html(LoadingScreen());
  
    setTimeout(() => {
      session();
    }, 2000);
  }
  
  function LoadingScreen() {
    let container = document.createElement('div');
  
    container.id = 'loading-screen';
    container.classList.add('loading-screen');
    container.innerHTML = `
      <div>L</div>
      <div>O</div>
      <div>A</div>
      <div>D</div>
      <div>I</div>
      <div>N</div>
      <div>G</div>
      `;
  
    return container;
  }
// this is the way to write css in java script
// container.style.height = '100vh';
// container.style.display = 'flex';
// container.style.justifyContent ='center';
// container.style.alignItems = 'center';
