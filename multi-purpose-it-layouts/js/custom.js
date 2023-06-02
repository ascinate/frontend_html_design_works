// JavaScript Document

$(document).ready(function() {
  $( window ).scroll(function() {
        var height = $(window).scrollTop();
        if(height >= 100) {
            $('.header-one').addClass('fixed-menu');
        } else {
            $('.header-one').removeClass('fixed-menu');
        }
    });
});

$(document).ready(function(){
    $('.services-home').owlCarousel({
        loop: true,
        margin:30,
        autoplay:true,
        nav:false,
        dots:true,
        responsive: {
          0: {
            items:1
          },
          375: {
            items:1
          },
          600: {
              items:1
          },
          667: {
            items:2
          },
         
          1000: {
              items:2
          },
          1024: {
            items:3
          },
          1200: {
            items:3
          }
      
        }
      })

      $('.team-home-01').owlCarousel({
        loop: true,
        margin:30,
        autoplay:true,
        nav:false,
        dots:true,
        responsive: {
          0: {
            items:1
          },
          375: {
            items:1
          },
          600: {
              items:1
          },
          667: {
            items:2
          },
          1000: {
              items:2
          },
          1024: {
            items:3
          },
          1200: {
            items:4
          }
      
        }
    })


    $('.work-slider').owlCarousel({
        loop: true,
        margin:30,
        autoplay:true,
        nav:false,
        dots:true,
        responsive: {
          0: {
            items:1
          },
          375: {
            items:1
          },
          600: {
              items:1
          },
          667: {
            items:2
          },
          1000: {
              items:2
          },
          1024: {
            items:3
          },
          1200: {
            items:4
          }
      
        }
    })


    $('.slider-testi').owlCarousel({
        loop: true,
        margin:30,
        autoplay:true,
        nav:false,
        dots:true,
        responsive: {
          0: {
            items:1
          },
          375: {
            items:1
          },
          600: {
              items:1
          },
          667: {
            items:2
          },
          1000: {
              items:2
          },
          1024: {
            items:3
          },
          1200: {
            items:4
          }
      
        }
    })


    $('.slider-testi-04').owlCarousel({
      loop: true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:true,
      responsive: {
        0: {
          items:1
        },
        375: {
          items:1
        },
        600: {
            items:1
        },
        667: {
          items:1
        },
        1000: {
            items:1
        },
        1200: {
          items:1
        }
    
      }
  })

    $('.slider-testi-02').owlCarousel({
      loop: true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:true,
      responsive: {
        0: {
          items:1
        },
        375: {
          items:1
        },
        600: {
            items:1
        },
        667: {
          items:1
        },
        1000: {
            items:1
        },
        1200: {
          items:1
        }
    
      }
    })


    $('.slider-testi-05').owlCarousel({
      loop: true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:true,
      responsive: {
        0: {
          items:1
        },
        375: {
          items:1
        },
        600: {
            items:1
        },
        667: {
          items:1
        },
        1000: {
            items:1
        },
        1200: {
          items:2
        }
    
      }
    })

    $('.slider-testi-03').owlCarousel({
      loop: true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:true,
      responsive: {
        0: {
          items:1
        },
        375: {
          items:1
        },
        600: {
            items:1
        },
        667: {
          items:1
        },
        1000: {
            items:1
        },
        1200: {
          items:2
        }
    
      }
    })


    $('.slider-testi-20').owlCarousel({
      loop: true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:true,
      responsive: {
        0: {
          items:1
        },
        375: {
          items:1
        },
        600: {
            items:1
        },
        667: {
          items:2
        },
        1000: {
            items:2
        },
        1024: {
          items:3
        },
        1200: {
          items:3
        }
    
      }
    })

    $('.slider05-divb').owlCarousel({
      loop: true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:true,
      responsive: {
        0: {
          items:1
        },
        375: {
          items:1
        },
        600: {
            items:1
        },
        667: {
          items:1
        },
        1000: {
            items:1
        },
        1024: {
          items:2
        },
        1200: {
          items:2
        }
    
      }
    })

    

    
      
    
    $('.blogs-slider').owlCarousel({
        loop: true,
        margin:30,
        autoplay:true,
        nav:false,
        dots:true,
        responsive: {
          0: {
            items:1
          },
          375: {
            items:1
          },
          600: {
              items:1
          },
          667: {
            items:2
          },
          1000: {
              items:2
          },
          1024: {
            items:3
          },
          1200: {
            items:3
          }
      
        }
    })


    $('.client-logo-slider').owlCarousel({
      loop: true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:true,
      responsive: {
        0: {
          items:1
        },
        375: {
          items:1
        },
        600: {
            items:1
        },
        667: {
          items:2
        },
        1000: {
            items:2
        },
        1024: {
          items:3
        },
        1200: {
          items:5
        }
    
      }
  })
    
    
    

});


// var skills = {
//   ht: 90,
//   cs: 80,
//   js: 60,
//   rc: 50,
//   jq: 60
// };

// $.each(skills, function(key, value) {
//   var skillbar = $("." + key);

//   skillbar.animate(
//     {
//       width: value + "%"
//     },
//     3000,
//     function() {
//       $(".speech-bubble").fadeIn();
//     }
//   );
// }); 


  
// mixit up
// $(document).ready(function() {
//   var mixer = mixitup('.bd-part');
// });

