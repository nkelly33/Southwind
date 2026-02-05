
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('discount-row').addEventListener('click', function(e){
    e.preventDefault();
    bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
      document.querySelector('.toast-body').innerHTML = "Discount Code: " + e.target.dataset['discountcode'];
      doucument.getElementById('discount-title').innerHTML = e.target.dataset['title'] || 'Special Discount';
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
      
    }
  });
});
document.addEventListener("keydown", (e)  => {
  if (e.key ===  'Escape') {
    document.getElementById('liveToast').classList.remove('show');
  }
});
