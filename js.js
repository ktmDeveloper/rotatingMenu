 $.fn.slowEach = function(callback, interval) {
        var array = this;
        if (!array.length) return;
        var i = 0;
        next();

        function next() {
          if (callback.call(array[i], i, array[i]) !== false) {
            if (++i < array.length) {
              setTimeout(next, interval);
            }
          }
        }
      }

      function anima(scale, speed, easing) {
        var container = $('.revolve');
        var radius = $('.revolve').width() / scale;
        var features = $('.revolve--feature');
        var width = container.width();
        var height = container.height();
        var angle = 0;
        var step = (2 * Math.PI) / features.length;
        var o = (easing == 'out') ? 0 : 1;
        features.slowEach(function() {
          var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
          var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
          $(this).animate({
            left: x + 'px',
            top: y + 'px',
            opacity: o
          }, speed);
          angle += step;
        }, speed);
      }


      anima(2.35, 2, 3)
