 jQuery(function() {
            $(".menu-item-1").hover(function() {
                  $(".bg1").fadeIn(800);
            }, function() {
                  $(".bg1").fadeOut(800);
            })
            $(".menu-item-2").hover(function() {
                  $(".bg2").fadeIn(800);
            }, function() {
                  $(".bg2").fadeOut(800);
            })
            $(".menu-item-3").hover(function() {
                  $(".bg3").fadeIn(800);
            }, function() {
                  $(".bg3").fadeOut(800);
            })
            $(".menu-item-4").hover(function() {
                  $(".bg4").fadeIn(800);
            }, function() {
                  $(".bg4").fadeOut(800);
            })
            $(".menu-item-5").hover(function() {
                  $(".bg5").fadeIn(800);
            }, function() {
                  $(".bg5").fadeOut(800);
            })
      })

      var t1 = new TimelineMax({paused: true});

      t1.to(".outer-content .title", 1, {
            opacity: 0
      });

      t1.to(".menu", 1, {
            width: "45%",
            ease: Expo.easeOut
      }, /*"-=1"*/);

      t1.staggerFrom(".menu ul li", 1, {y: 20 , opacity: 0, ease: Expo.easeInOut}, 0.1);

      t1.to(".images", 2, {
            width: "50%",
            ease: Expo.easeInOut,
            delay: -2,
      },"-=1");

      t1.reverse();
      $(document).on("click", ".toggle-btn", function() {
            t1.reversed(!t1.reversed());
      });
      $(document).on("click", "#menu", function() {
            t1.reversed(!t1.reversed());
      });