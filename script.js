(function(){
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(nav.style.display === 'flex' || nav.style.display === 'block'){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
      }
    });
  }
  const year = new Date().getFullYear();
  ['year','year2','year3','year4','year5'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });
  const photo = document.getElementById('profile-photo');
  const fallback = document.getElementById('photo-fallback');
  if(photo){
    photo.addEventListener('error', ()=>{
      photo.style.display = 'none';
      if(fallback) fallback.style.display = 'inline-block';
    });
    photo.addEventListener('load', ()=>{
      if(fallback) fallback.style.display = 'none';
    });
    if(!photo.complete || photo.naturalWidth === 0){
    }
  }

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const result = document.getElementById('form-result');
      if(!name || !email || !message){
        result.textContent = 'Please fill all fields.';
        result.style.color = 'crimson';
        return;
      }
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        result.textContent = 'Please enter a valid email.';
        result.style.color = 'crimson';
        return;
      }

      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(message + '\n\n— ' + name + '\n' + email);
      window.location.href = `mailto:gollapallysupreeth@gmail.com?subject=${subject}&body=${body}`;
      result.textContent = 'Opening mail client...';
      result.style.color = 'green';
    });
  }
})();