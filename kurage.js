var tl = new TimelineMax();
var eyeBob = '#eyeright, #eyeleft, #sidespots';

TweenMax.set(eyeBob, { y: 30 })

tl.to("#leg1 path", 1, { morphSVG: "#leg1 polyline", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 0)
tl.to("#leg2 path", 1, { morphSVG: "#leg2 polyline", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 0)
tl.to("#leg3 path", 1, { morphSVG: "#leg3 polyline", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 0)
tl.to("#leg4 path", 1, { morphSVG: "#leg4 polyline", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 0)

tl.to("#head #short", 1, { morphSVG: "#head #tall", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 0)

// tl.to("#eyeleft .st2",1, {morphSVG:"#eyeleft .st3", repeat:-1, yoyo:true, ease: Sine.easeOut},0)

tl.to(eyeBob, 1, { y: 0, repeat: -1, yoyo: true, ease: Sine.easeInOut }, 0)
tl.to('.octo', 1, { y: -50, repeat: -1, yoyo: true, ease: Sine.easeInOut }, 0)

var wave1 = $('#feel-the-wave').wavify({
    height: 80,
    bones: 4,
    amplitude: 60,
    color: 'url(#grad-ucgg-generated)',
    speed: .15
});

var wave2 = $('#feel-the-wave-two').wavify({ height: 60, bones: 3, amplitude: 40, color: 'rgba(127, 61, 146, 0.6)', speed: .25 });