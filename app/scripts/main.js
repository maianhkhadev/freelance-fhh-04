document.addEventListener('DOMContentLoaded', function() {

  let icon = document.querySelector('.navi-icon')
  icon.addEventListener('click', function() {
    icon.classList.toggle('active')
    document.querySelector('.navi').classList.toggle('navi-icon-active')
  })

  let button = document.querySelector('.dock-back-to-header button')
  button.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500)
  })

  document.addEventListener('scroll', function (e) {
    let element = document.querySelector('.dock-back-to-header')

    if (window.scrollY >= 800) {
      element.classList.add('visible')
    }
    else {
      element.classList.remove('visible')
    }
  })
})

// PAGE INDEX
document.addEventListener('DOMContentLoaded', function() {

  let page = document.querySelector('.page-index')

  if(page === null) {
    return
  }

  $('.section-01 .slick').slick({
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  })

  $('.section-05 .slick').slick({
    dots: true,
    arrows: false,
  })

  $('.section-06 .slick').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('.section-07 .slick').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  })

  $('.section-08 .slick').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  })

  $('.section-09 .slick').slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  })

  $('.section-02').viewportChecker({
    offset: 0,
    callbackFunction: function (elem, action) {
      $('.section-02 .number').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            if(Math.ceil(now) === 1000) {
              $(this).text('1k')
            } else {
              $(this).text(Math.ceil(now))
            }
          }
        })
      })
    }
  })
})

// PAGE BROCHURES
document.addEventListener('DOMContentLoaded', function() {

  let page = document.querySelector('.page-brochures')

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

  $('.section-02 .slick').slick({
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  })
})

// PAGE HIGHLIGHTS
document.addEventListener('DOMContentLoaded', function() {

  let page = document.querySelector('.page-highlights')

  if(page === null) {
    return
  }

  $('.page-highlights .slick').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  })

  let headers = document.querySelectorAll('.block-highlight .block-header')
  headers.forEach(function(header) {

    header.addEventListener('click', function() {
      let blocks = document.querySelectorAll('.block-highlight')
      blocks.forEach(function(block) {
        block.classList.remove('active')
      })

      let nextActiveBlock = header.closest('.block-highlight')
      nextActiveBlock.classList.add('active')
    })
  })
})
