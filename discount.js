
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('discount-row').addEventListener('click', function(e){
    e.preventDefault();
    bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  });
});