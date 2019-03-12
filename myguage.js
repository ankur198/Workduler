const canvasGauge =['canvas1','canvas2','canvas3','canvas4','canvas5','canvas6','canvas7','canvas8',];
var gauges = []
canvasGauge.forEach(CanvasElement => {
    var gauge = new RadialGauge({
        renderTo: CanvasElement,
        width: 150,
        height: 150,
        units: "% Done",
        minValue: 0,
        maxValue: 100,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100",
        ],
        minorTicks: 2,
        strokeTicks: true,
        highlights: [
            {
                "from": 0,
                "to": 20,
                "color": "rgba(200, 50, 50, .75)"
            },
            {
                "from": 20,
                "to": 80,
                "color": "#FFAA2B"
            },
            {
                "from": 80,
                "to": 100,
                "color": "#5B9D71"
            }
        ],
        colorPlate: "#3eb77f",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    });
    gauges.push(gauge.draw());
    
});

gauges.forEach(element => {
    let random = Math.floor(Math.random()*(100));
    element.value = random;
});
