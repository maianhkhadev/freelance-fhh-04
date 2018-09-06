document.addEventListener('DOMContentLoaded', function() {

  let icon = document.querySelector('.navi-icon')
  icon.addEventListener('click', function() {
    icon.classList.toggle('active')
    document.querySelector('.navi').classList.toggle('navi-icon-active')
  })
})

// PAGE INDEX
document.addEventListener('DOMContentLoaded', function() {

  let page = document.querySelector('.page-index')

  if(page === null) {
    return
  }

  $('.section-01 .slick').slick({
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true
  })
})

// PAGE BROCHURE
document.addEventListener('DOMContentLoaded', function() {

  let page = document.querySelector('.page-brochure')

  if(page === null) {
    return
  }
})

// PAGE EXHIBIT
document.addEventListener('DOMContentLoaded', function() {

  let page = document.querySelector('.page-exhibit')

  if(page === null) {
    return
  }
})
