  function openModal(){ document.getElementById('modalOverlay').classList.add('open'); }
  function closeModal(){ document.getElementById('modalOverlay').classList.remove('open'); }
  document.getElementById('modalOverlay').addEventListener('click', function(e){
    if(e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeModal();
  });
