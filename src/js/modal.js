(() => {
    
    const modalBtn = document.querySelector('[data-menu-btn]');
    const mobMenu = document.querySelector('[data-menu]');

    modalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
      modalBtn.classList.toggle('active'); 
      mobMenu.classList.toggle('is-closed'); 
    }

  })();



