var frameCount = function _fc(timeStart){
        var now = performance.now();
        var duration = now - timeStart;
        
        if(duration < 1000){
            
            _fc.counter++;
            
        } else {
                      
            _fc.fps = _fc.counter;
            _fc.counter = 0;
            timeStart = now; 
            // console.log(_fc.fps);
        

        }
        requestAnimationFrame(function() {frameCount(timeStart)});
    };

frameCount.counter = 0;
frameCount.fps = 0;

frameCount(performance.now());
