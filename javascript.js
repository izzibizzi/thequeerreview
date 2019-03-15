function closeAllModals() {
  $('.modal').hide();
}

function openModal(modalClassName) {
  closeAllModals();
  $(modalClassName).show();
}

$('.modal-trigger').click(function() {
  var modalClassName = '.' + $(this).data().for;
  openModal(modalClassName);
})

$('.js-modal-close').click(function() {
  closeAllModals();
})
