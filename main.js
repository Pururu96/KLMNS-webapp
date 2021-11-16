/**
* Template Name: Medilab - v4.6.0
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  let btnName = document.getElementById('btnId');
  btnName.addEventListener('click', ()=>{
    let element = document.getElementById('elementId');
    if (element.style.display != 'inline'){
        element.style.display = 'inline';
      }
    else{
      element.style.display = 'none'
    }
  })
  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Gallery Lightbox 
   */
  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

})()

/**
   * Symptoms
   */

 const today = new Date()

 const weekday = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(today)
 const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(today)
 const date = today.getDate()
 const year = today.getFullYear()
 
 const dayLabel = document.getElementById('day')
 dayLabel.textContent = weekday
 
 const dateLabel = document.getElementById('date')
 dateLabel.textContent = `${month} ${date}, ${year}`
 
/**
   * make appointment
   */

 let DB;

 let form = document.querySelector('form');
 let patientName = document.querySelector('#patient-name');
 let contact = document.querySelector('#contact');
 let date = document.querySelector('#date');
 let time = document.querySelector('#time');
 let symptoms = document.querySelector('#symptoms');
 let consultations = document.querySelector('#consultations');
 let services = document.querySelector('#services');
 
 document.addEventListener('DOMContentLoaded', () => {
      // create the database
      let ScheduleDB = window.indexedDB.open('consultations', 1);
 
      // if there's an error
      ScheduleDB.onerror = function() {
           console.log('you have an error');
      }
      // if everything is fine, assign the result is to the (letDB) instance 
      ScheduleDB.onsuccess = function() {
           console.log('your appointment has been booked successfully');
 
           
           DB = ScheduleDB.result;
 
           showConsultations();
      }
 
    
      ScheduleDB.onupgradeneeded = function(e) {
           
           let db = e.target.result;
           
           let objectStore = db.createObjectStore('consultations', { keyPath: 'key', autoIncrement: true } );
 
         
           objectStore.createIndex('patientname', 'patientname', { unique: false } );
           objectStore.createIndex('contact', 'contact', { unique: false } );
           objectStore.createIndex('date', 'date', { unique: false } );
           objectStore.createIndex('time', 'time', { unique: false } );
           objectStore.createIndex('symptoms', 'symptoms', { unique: false } );
 
           console.log('Database ready and fields created!');
      }
 
      form.addEventListener('submit', addConsultations);
 
      function addConsultations(e) {
           e.preventDefault();
           let newConsultation = {
                patientname : patientName.value,
                
              contact : contact.value,
                date : date.value,
             time : time.value,
                symptoms : symptoms.value
           }
           
           let transaction = DB.transaction(['consultations'], 'readwrite');
           let objectStore = transaction.objectStore('consultations');
 
           let request = objectStore.add(newConsultation);
                     request.onsuccess = () => {
                form.reset();
           }
           transaction.oncomplete = () => {
                //console.log('New schedule added');
 
                showConsultations();
           }
           transaction.onerror = () => {
               //console.log();
           }
 
      }
      function showConsultations() {
        
           while(consultations.firstChild) {
             consultations.removeChild(consultations.firstChild);
           }
          
           let objectStore = DB.transaction('consultations').objectStore('consultations');
 
           objectStore.openCursor().onsuccess = function(e) {
                
                let cursor = e.target.result;
                if(cursor) {
                     let ConsultationHTML = document.createElement('li');
                     ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
                     ConsultationHTML.classList.add('list-group-item');
                     
                  
                     ConsultationHTML.innerHTML = `  
                          <p class="font-weight-bold">Patient Name:  <span class="font-weight-normal">${cursor.value.patientname}<span></p>
                           <p class="font-weight-bold">Contact:  <span class="font-weight-normal">${cursor.value.contact}<span></p>
                          <p class="font-weight-bold">Date:  <span class="font-weight-normal">${cursor.value.date}<span></p>
                          <p class="font-weight-bold">Time:  <span class="font-weight-normal">${cursor.value.time}<span></p>
                          <p class="font-weight-bold">Symptoms:  <span class="font-weight-normal">${cursor.value.symptoms}<span></p>
                     `;
 
                     
                     const cancelBtn = document.createElement('button');
                     cancelBtn.classList.add('btn', 'btn-danger');
                     cancelBtn.innerHTML = 'Cancel';
                     cancelBtn.onclick = removeConsultation;
                
                  
                     ConsultationHTML.appendChild(cancelBtn);
                  consultations.appendChild(ConsultationHTML);
 
                     cursor.continue();
                } else {
                     if(!consultations.firstChild) {
                         services.textContent = 'Change your visiting hours';
                          let noSchedule = document.createElement('p');
                          noSchedule.classList.add('text-center');
                          noSchedule.textContent = 'No results Found';
                       consultations.appendChild(noSchedule);
                     } else {
                         services.textContent = 'Cancel Your Appointment'
                     }
                }
           }
      }
 
           function removeConsultation(e) {
        
           let scheduleID = Number( e.target.parentElement.getAttribute('data-consultation-id') );
          
           let transaction = DB.transaction(['consultations'], 'readwrite');
           let objectStore = transaction.objectStore('consultations');
          
           objectStore.delete(scheduleID);
 
           transaction.oncomplete = () => {
              
                e.target.parentElement.parentElement.removeChild( e.target.parentElement );
 
                if(!consultations.firstChild) {
                    
                     services.textContent = 'Change your visiting hours';
                    
                    let noSchedule = document.createElement('p');
                   
                    noSchedule.classList.add('text-center');
                    
                    noSchedule.textContent = 'No results Found';
                 
                     consultations.appendChild(noSchedule);
                } else {
                    services.textContent = 'Cancel your Consultation'
                }
           }
      }
 
 });