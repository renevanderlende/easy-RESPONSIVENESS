'use strict';
/************************************************/
/*         DEBUG/DESIGN SCRIPT (WIPWIP)         */
/************************************************/
function toggleDebugTools() { 
var el=document.getElementById('debug-button-list'); 
    if (el.dataset.gone=='1')
         el.dataset.gone='0';
    else el.dataset.gone='1';
}
function toggleBODYDebug() { if (document.body.dataset.debug=='1') document.body.dataset.debug='0'; else document.body.dataset.debug='1'; }
function toggleHTMLDesign(){ if (document.documentElement.dataset.design=='1') document.documentElement.dataset.design='0'; else document.documentElement.dataset.design='1'; }
function toggleDirection() { if (document.body.dir=='rtl') document.body.dir = 'ltr'; else document.body.dir = 'rtl'; }
function toggleFontResps() { if (document.documentElement.dataset.response=='1') document.documentElement.dataset.response='0'; else document.documentElement.dataset.response='1'; }
function toggleImpaired()  { if (document.documentElement.dataset.impaired=='press') document.documentElement.dataset.impaired='none'; else document.documentElement.dataset.impaired='press'; }
function toggleEffects()   { if (document.documentElement.dataset.effects=='1') document.documentElement.dataset.effects='0'; else document.documentElement.dataset.effects='1'; }

function bodyAppendDebugTools() { /*Later*/
    var debugCode   = '<div id="debug--rulers"><svg><use xlink:href="#svg-rulers"/></svg></div><div id="debug--orientation"> <h4 id="debug--portrait" >PORTRAIT </h4> <h4 id="debug--landscape">LANDSCAPE</h4> </div><div id="debug--tools-panel"> <ul id="debug-button-list" data-gone="1"> <li id="toggle--debug-rsp" onclick="toggleFontResps()" title="toggle font responsiveness" ></li><li id="toggle--debug-imp" onclick="toggleImpaired()" title="toggle document letterpress"></li><li id="toggle--debug-fx" onclick="toggleEffects()" title="toggle element effects" ></li><li id="toggle--debug-dbg" onclick="toggleBODYDebug()" title="toggle element outlines" ></li><li id="toggle--debug-dir" onclick="toggleDirection()" title="toggle document direction" ></li><li id="toggle--debug-dsn" onclick="toggleHTMLDesign()"title="toggle document design" ></li></ul> <div id="toggle--debug-tools" onclick="toggleDebugTools()" title="toggle debug/designer tools" ></div></div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display:none"> <symbol id="svg-rof-slanted"> <line x1="0%" y1="0" x2="25%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> <line x1="25%" y1="0" x2="50%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> <line x1="50%" y1="0" x2="75%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> <line x1="75%" y1="0" x2="100%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> <line x1="25%" y1="0" x2="0%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> <line x1="50%" y1="0" x2="25%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> <line x1="75%" y1="0" x2="50%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> <line x1="100%" y1="0" x2="75%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.4;"/> </symbol> <symbol id="svg-rof-straight"> <line x1="25%" y1="0" x2="25%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.8;"/> <line x1="75%" y1="0" x2="75%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.8;"/> <line x1="0%" y1="25%" x2="100%" y2="25%" style="stroke:#98DDDE;stroke-opacity:.8;"/> <line x1="0%" y1="75%" x2="100%" y2="75%" style="stroke:#98DDDE;stroke-opacity:.8;"/> </symbol> <symbol id="svg-rof-centers"> <circle cx="25%" cy="25%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> <circle cx="50%" cy="25%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> <circle cx="75%" cy="25%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> <circle cx="25%" cy="50%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> <circle cx="75%" cy="50%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> <circle cx="25%" cy="75%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> <circle cx="50%" cy="75%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> <circle cx="75%" cy="75%" r="2" fill="white" style="stroke:#98DDDE;stroke-opacity:1;"/> </symbol> <symbol id="svg-rot-slanted"> <line x1="0%" y1="0" x2="33.33%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.3;"/> <line x1="33.33%" y1="0" x2="66.67%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.3;"/> <line x1="66.67%" y1="0" x2="100%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.3;"/> <line x1="33.33%" y1="0" x2="0%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.3;"/> <line x1="66.67%" y1="0" x2="33.33%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.3;"/> <line x1="100%" y1="0" x2="66.67%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.3;"/> </symbol> <symbol id="svg-rot-straight"> <line x1="33.33%" y1="0" x2="33.33%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.6;"/> <line x1="66.67%" y1="0" x2="66.67%" y2="100%" style="stroke:#FAE03C;stroke-opacity:.6;"/> <line x1="0%" y1="33.33%" x2="100%" y2="33.33%" style="stroke:#FAE03C;stroke-opacity:.6;"/> <line x1="0%" y1="66.67%" x2="100%" y2="66.67%" style="stroke:#FAE03C;stroke-opacity:.6;"/> </symbol> <symbol id="svg-rot-centers"> <circle cx="33.33%" cy="33.33%" r="2" fill="white" style="stroke:#FAE03C;stroke-opacity:.6;"/> <circle cx="33.33%" cy="66.67%" r="2" fill="white" style="stroke:#FAE03C;stroke-opacity:.6;"/> <circle cx="66.67%" cy="33.33%" r="2" fill="white" style="stroke:#FAE03C;stroke-opacity:.6;"/> <circle cx="66.67%" cy="66.67%" r="2" fill="white" style="stroke:#FAE03C;stroke-opacity:.6;"/> </symbol> <symbol id="svg-screen-margins"> <line x1="0%" y1="15%" x2="100%" y2="15%" style="stroke:#000000;stroke-opacity:.2;"/> <line x1="0%" y1="80%" x2="100%" y2="80%" style="stroke:#000000;stroke-opacity:.2;"/> <line x1="12.5%" y1="0" x2="12.5%" y2="100%" style="stroke:#000000;stroke-opacity:.2;"/> <line x1="87.5%" y1="0" x2="87.5%" y2="100%" style="stroke:#000000;stroke-opacity:.2;"/> </symbol> <symbol id="svg-screen-centers"> <line x1="0%" y1="50%" x2="100%" y2="50%" style="stroke:#98DDDE;stroke-opacity:.8;"/> <line x1="50%" y1="0" x2="50%" y2="100%" style="stroke:#98DDDE;stroke-opacity:.8;"/> <circle cx="50%" cy="50%" r="3" fill="red" style="stroke:#034F84;stroke-opacity:1;"/> </symbol> <symbol id="svg-ruler-h"> <g style="fill:none; fill-rule:nonzero; fill-opacity:1; stroke-width:1; stroke-linecap:butt; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-dashoffset:0; stroke-opacity:1;"> <path d="M 10,0 10,5 M 20,0 20,10 M 30,0 30,10 M 40,0 40,10 M 50,0 50,20 M 60,0 60,10 M 70,0 70,10 M 80,0 80,10 M 90,0 90,10 M 100,0 100,30 M 110,0 110,10 M 120,0 120,10 M 130,0 130,10 M 140,0 140,10 M 150,0 150,20 M 160,0 160,10 M 170,0 170,10 M 180,0 180,10 M 190,0 190,10 M 200,0 200,30 M 210,0 210,10 M 220,0 220,10 M 230,0 230,10 M 240,0 240,10 M 250,0 250,20 M 260,0 260,10 M 270,0 270,10 M 280,0 280,10 M 290,0 290,10 M 300,0 300,30 M 310,0 310,10 M 320,0 320,10 M 330,0 330,10 M 340,0 340,10 M 350,0 350,20 M 360,0 360,10 M 370,0 370,10 M 380,0 380,10 M 390,0 390,10 M 400,0 400,30 M 410,0 410,10 M 420,0 420,10 M 430,0 430,10 M 440,0 440,10 M 450,0 450,20 M 460,0 460,10 M 470,0 470,10 M 480,0 480,10 M 490,0 490,10 M 500,0 500,30 M 510,0 510,10 M 520,0 520,10 M 530,0 530,10 M 540,0 540,10 M 550,0 550,20 M 560,0 560,10 M 570,0 570,10 M 580,0 580,10 M 590,0 590,10 M 600,0 600,30 M 610,0 610,10 M 620,0 620,10 M 630,0 630,10 M 640,0 640,10 M 650,0 650,20 M 660,0 660,10 M 670,0 670,10 M 680,0 680,10 M 690,0 690,10 M 700,0 700,30 M 710,0 710,10 M 720,0 720,10 M 730,0 730,10 M 740,0 740,10 M 750,0 750,20 M 760,0 760,10 M 770,0 770,10 M 780,0 780,10 M 790,0 790,10 M 800,0 800,30 M 810,0 810,10 M 820,0 820,10 M 830,0 830,10 M 840,0 840,10 M 850,0 850,20 M 860,0 860,10 M 870,0 870,10 M 880,0 880,10 M 890,0 890,10 M 900,0 900,30 M 910,0 910,10 M 920,0 920,10 M 930,0 930,10 M 940,0 940,10 M 950,0 950,20 M 960,0 960,10 M 970,0 970,10 M 980,0 980,10 M 990,0 990,10 M 1000,0 1000,30 M 1010,0 1010,10 M 1020,0 1020,10 M 1030,0 1030,10 M 1040,0 1040,10 M 1050,0 1050,20 M 1060,0 1060,10 M 1070,0 1070,10 M 1080,0 1080,10 M 1090,0 1090,10 M 1100,0 1100,30 M 1110,0 1110,10 M 1120,0 1120,10 M 1130,0 1130,10 M 1140,0 1140,10 M 1150,0 1150,20 M 1160,0 1160,10 M 1170,0 1170,10 M 1180,0 1180,10 M 1190,0 1190,10 M 1200,0 1200,30 M 1210,0 1210,10 M 1220,0 1220,10 M 1230,0 1230,10 M 1240,0 1240,10 M 1250,0 1250,20 M 1260,0 1260,10 M 1270,0 1270,10 M 1280,0 1280,10 M 1290,0 1290,10 M 1300,0 1300,30 M 1310,0 1310,10 M 1320,0 1320,10 M 1330,0 1330,10 M 1340,0 1340,10 M 1350,0 1350,20 M 1360,0 1360,10 M 1370,0 1370,10 M 1380,0 1380,10 M 1390,0 1390,10 M 1400,0 1400,30 M 1410,0 1410,10 M 1420,0 1420,10 M 1430,0 1430,10 M 1440,0 1440,10 M 1450,0 1450,20 M 1460,0 1460,10 M 1470,0 1470,10 M 1480,0 1480,10 M 1490,0 1490,10 M 1500,0 1500,30 M 1510,0 1510,10 M 1520,0 1520,10 M 1530,0 1530,10 M 1540,0 1540,10 M 1550,0 1550,20 M 1560,0 1560,10 M 1570,0 1570,10 M 1580,0 1580,10 M 1590,0 1590,10 M 1600,0 1600,30 M 1610,0 1610,10 M 1620,0 1620,10 M 1630,0 1630,10 M 1640,0 1640,10 M 1650,0 1650,20 M 1660,0 1660,10 M 1670,0 1670,10 M 1680,0 1680,10 M 1690,0 1690,10 M 1700,0 1700,30 M 1710,0 1710,10 M 1720,0 1720,10 M 1730,0 1730,10 M 1740,0 1740,10 M 1750,0 1750,20 M 1760,0 1760,10 M 1770,0 1770,10 M 1780,0 1780,10 M 1790,0 1790,10 M 1800,0 1800,30 M 1810,0 1810,10 M 1820,0 1820,10 M 1830,0 1830,10 M 1840,0 1840,10 M 1850,0 1850,20 M 1860,0 1860,10 M 1870,0 1870,10 M 1880,0 1880,10 M 1890,0 1890,10 M 1900,0 1900,30 M 1910,0 1910,10 M 1920,0 1920,10 M 1930,0 1930,10 M 1940,0 1940,10 M 1950,0 1950,20 M 1960,0 1960,10 M 1970,0 1970,10 M 1980,0 1980,10 M 1990,0 1990,10 M 2000,0 2000,30 M 2010,0 2010,10 M 2020,0 2020,10 M 2030,0 2030,10 M 2040,0 2040,10 M 2050,0 2050,20 M 2060,0 2060,10 M 2070,0 2070,10 M 2080,0 2080,10 M 2090,0 2090,10 M 2100,0 2100,30 M 2110,0 2110,10 M 2120,0 2120,10 M 2130,0 2130,10 M 2140,0 2140,10 M 2150,0 2150,20 M 2160,0 2160,10 M 2170,0 2170,10 M 2180,0 2180,10 M 2190,0 2190,10 M 2200,0 2200,30 M 2210,0 2210,10 M 2220,0 2220,10 M 2230,0 2230,10 M 2240,0 2240,10 M 2250,0 2250,20 M 2260,0 2260,10 M 2270,0 2270,10 M 2280,0 2280,10 M 2290,0 2290,10 M 2300,0 2300,30 M 2310,0 2310,10 M 2320,0 2320,10 M 2330,0 2330,10 M 2340,0 2340,10 M 2350,0 2350,20 M 2360,0 2360,10 M 2370,0 2370,10 M 2380,0 2380,10 M 2390,0 2390,10 M 2400,0 2400,30 M 2410,0 2410,10 M 2420,0 2420,10 M 2430,0 2430,10 M 2440,0 2440,10 M 2450,0 2450,20 M 2460,0 2460,10 M 2470,0 2470,10 M 2480,0 2480,10 M 2490,0 2490,10 M 2500,0 2500,30 M 2510,0 2510,10 M 2520,0 2520,10 M 2530,0 2530,10 M 2540,0 2540,10 M 2550,0 2550,20 M 2560,0 2560,10 M 2570,0 2570,10 M 2580,0 2580,10 M 2590,0 2590,10 M 2600,0 2600,30 M 2610,0 2610,10 M 2620,0 2620,10 M 2630,0 2630,10 M 2640,0 2640,10 M 2650,0 2650,20 M 2660,0 2660,10 M 2670,0 2670,10 M 2680,0 2680,10 M 2690,0 2690,10 M 2700,0 2700,30 M 2710,0 2710,10 M 2720,0 2720,10 M 2730,0 2730,10 M 2740,0 2740,10 M 2750,0 2750,20 M 2760,0 2760,10 M 2770,0 2770,10 M 2780,0 2780,10 M 2790,0 2790,10 M 2800,0 2800,30 M 2810,0 2810,10 M 2820,0 2820,10 M 2830,0 2830,10 M 2840,0 2840,10 M 2850,0 2850,20 M 2860,0 2860,10 M 2870,0 2870,10 M 2880,0 2880,10 M 2890,0 2890,10 M 2900,0 2900,30 M 2910,0 2910,10 M 2920,0 2920,10 M 2930,0 2930,10 M 2940,0 2940,10 M 2950,0 2950,20 M 2960,0 2960,10 M 2970,0 2970,10 M 2980,0 2980,10 M 2990,0 2990,10 M 3000,0 3000,30" transform="translate(-0.5 0)" style="stroke:#034F84"/> </g> <g style="fill-rule:nonzero; fill-opacity:1; stroke:none; stroke-width:1; stroke-linecap:butt; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-dashoffset:0; stroke-opacity:1; text-anchor:middle; font-family:Arial; font-size:15px;"> <g style="fill:#034F84;"> <text x="35" y="35"> 0</text> <text x="120" y="35"> 100</text> <text x="220" y="35"> 200</text> <text x="320" y="35"> 300</text> <text x="420" y="35"> 400</text> <text x="520" y="35"> 500</text> <text x="620" y="35"> 600</text> <text x="720" y="35"> 700</text> <text x="820" y="35"> 800</text> <text x="920" y="35"> 900</text> <text x="1020" y="35">1000</text> <text x="1120" y="35">1100</text> <text x="1220" y="35">1200</text> <text x="1320" y="35">1300</text> <text x="1420" y="35">1400</text> <text x="1520" y="35">1500</text> <text x="1620" y="35">1600</text> <text x="1720" y="35">1700</text> <text x="1820" y="35">1800</text> <text x="1920" y="35">1900</text> <text x="2020" y="35">2000</text> <text x="2120" y="35">2100</text> <text x="2220" y="35">2200</text> <text x="2320" y="35">2300</text> <text x="2420" y="35">2400</text> <text x="2520" y="35">2500</text> <text x="2620" y="35">2600</text> <text x="2720" y="35">2700</text> <text x="2820" y="35">2800</text> <text x="2920" y="35">2900</text> <text x="3020" y="35">3000</text> </g> </g> </symbol> <symbol id="svg-ruler-v"> <g style="fill:none; fill-rule:nonzero; fill-opacity:1; stroke-width:1; stroke-linecap:butt; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-dashoffset:0; stroke-opacity:1;"> <path d="M 0,10 5,10 M 0,20 10,20 M 0,30 10,30 M 0,40 10,40 M 0,50 20,50 M 0,60 10,60 M 0,70 10,70 M 0,80 10,80 M 0,90 10,90 M 0,100 30,100 M 0,110 10,110 M 0,120 10,120 M 0,130 10,130 M 0,140 10,140 M 0,150 20,150 M 0,160 10,160 M 0,170 10,170 M 0,180 10,180 M 0,190 10,190 M 0,200 30,200 M 0,210 10,210 M 0,220 10,220 M 0,230 10,230 M 0,240 10,240 M 0,250 20,250 M 0,260 10,260 M 0,270 10,270 M 0,280 10,280 M 0,290 10,290 M 0,300 30,300 M 0,310 10,310 M 0,320 10,320 M 0,330 10,330 M 0,340 10,340 M 0,350 20,350 M 0,360 10,360 M 0,370 10,370 M 0,380 10,380 M 0,390 10,390 M 0,400 30,400 M 0,410 10,410 M 0,420 10,420 M 0,430 10,430 M 0,440 10,440 M 0,450 20,450 M 0,460 10,460 M 0,470 10,470 M 0,480 10,480 M 0,490 10,490 M 0,500 30,500 M 0,510 10,510 M 0,520 10,520 M 0,530 10,530 M 0,540 10,540 M 0,550 20,550 M 0,560 10,560 M 0,570 10,570 M 0,580 10,580 M 0,590 10,590 M 0,600 30,600 M 0,610 10,610 M 0,620 10,620 M 0,630 10,630 M 0,640 10,640 M 0,650 20,650 M 0,660 10,660 M 0,670 10,670 M 0,680 10,680 M 0,690 10,690 M 0,700 30,700 M 0,710 10,710 M 0,720 10,720 M 0,730 10,730 M 0,740 10,740 M 0,750 20,750 M 0,760 10,760 M 0,770 10,770 M 0,780 10,780 M 0,790 10,790 M 0,800 30,800 M 0,810 10,810 M 0,820 10,820 M 0,830 10,830 M 0,840 10,840 M 0,850 20,850 M 0,860 10,860 M 0,870 10,870 M 0,880 10,880 M 0,890 10,890 M 0,900 30,900 M 0,910 10,910 M 0,920 10,920 M 0,930 10,930 M 0,940 10,940 M 0,950 20,950 M 0,960 10,960 M 0,970 10,970 M 0,980 10,980 M 0,990 10,990 M 0,1000 30,1000 M 0,1010 10,1010 M 0,1020 10,1020 M 0,1030 10,1030 M 0,1040 10,1040 M 0,1050 20,1050 M 0,1060 10,1060 M 0,1070 10,1070 M 0,1080 10,1080 M 0,1090 10,1090 M 0,1100 30,1100 M 0,1110 10,1110 M 0,1120 10,1120 M 0,1130 10,1130 M 0,1140 10,1140 M 0,1150 20,1150 M 0,1160 10,1160 M 0,1170 10,1170 M 0,1180 10,1180 M 0,1190 10,1190 M 0,1200 30,1200 M 0,1210 10,1210 M 0,1220 10,1220 M 0,1230 10,1230 M 0,1240 10,1240 M 0,1250 20,1250 M 0,1260 10,1260 M 0,1270 10,1270 M 0,1280 10,1280 M 0,1290 10,1290 M 0,1300 30,1300 M 0,1310 10,1310 M 0,1320 10,1320 M 0,1330 10,1330 M 0,1340 10,1340 M 0,1350 20,1350 M 0,1360 10,1360 M 0,1370 10,1370 M 0,1380 10,1380 M 0,1390 10,1390 M 0,1400 30,1400 M 0,1410 10,1410 M 0,1420 10,1420 M 0,1430 10,1430 M 0,1440 10,1440 M 0,1450 20,1450 M 0,1460 10,1460 M 0,1470 10,1470 M 0,1480 10,1480 M 0,1490 10,1490 M 0,1500 30,1500 M 0,1510 10,1510 M 0,1520 10,1520 M 0,1530 10,1530 M 0,1540 10,1540 M 0,1550 20,1550 M 0,1560 10,1560 M 0,1570 10,1570 M 0,1580 10,1580 M 0,1590 10,1590 M 0,1600 30,1600 M 0,1610 10,1610 M 0,1620 10,1620 M 0,1630 10,1630 M 0,1640 10,1640 M 0,1650 20,1650 M 0,1660 10,1660 M 0,1670 10,1670 M 0,1680 10,1680 M 0,1690 10,1690 M 0,1700 30,1700 M 0,1710 10,1710 M 0,1720 10,1720 M 0,1730 10,1730 M 0,1740 10,1740 M 0,1750 20,1750 M 0,1760 10,1760 M 0,1770 10,1770 M 0,1780 10,1780 M 0,1790 10,1790 M 0,1800 30,1800 M 0,1810 10,1810 M 0,1820 10,1820 M 0,1830 10,1830 M 0,1840 10,1840 M 0,1850 20,1850 M 0,1860 10,1860 M 0,1870 10,1870 M 0,1880 10,1880 M 0,1890 10,1890 M 0,1900 30,1900 M 0,1910 10,1910 M 0,1920 10,1920 M 0,1930 10,1930 M 0,1940 10,1940 M 0,1950 20,1950 M 0,1960 10,1960 M 0,1970 10,1970 M 0,1980 10,1980 M 0,1990 10,1990 M 0,2000 30,2000 M 0,2010 10,2010 M 0,2020 10,2020 M 0,2030 10,2030 M 0,2040 10,2040 M 0,2050 20,2050 M 0,2060 10,2060 M 0,2070 10,2070 M 0,2080 10,2080 M 0,2090 10,2090 M 0,2100 30,2100 M 0,2110 10,2110 M 0,2120 10,2120 M 0,2130 10,2130 M 0,2140 10,2140 M 0,2150 20,2150 M 0,2160 10,2160 M 0,2170 10,2170 M 0,2180 10,2180 M 0,2190 10,2190 M 0,2200 30,2200 M 0,2210 10,2210 M 0,2220 10,2220 M 0,2230 10,2230 M 0,2240 10,2240 M 0,2250 20,2250 M 0,2260 10,2260 M 0,2270 10,2270 M 0,2280 10,2280 M 0,2290 10,2290 M 0,2300 30,2300 M 0,2310 10,2310 M 0,2320 10,2320 M 0,2330 10,2330 M 0,2340 10,2340 M 0,2350 20,2350 M 0,2360 10,2360 M 0,2370 10,2370 M 0,2380 10,2380 M 0,2390 10,2390 M 0,2400 30,2400 M 0,2410 10,2410 M 0,2420 10,2420 M 0,2430 10,2430 M 0,2440 10,2440 M 0,2450 20,2450 M 0,2460 10,2460 M 0,2470 10,2470 M 0,2480 10,2480 M 0,2490 10,2490 M 0,2500 30,2500 M 0,2510 10,2510 M 0,2520 10,2520 M 0,2530 10,2530 M 0,2540 10,2540 M 0,2550 20,2550 M 0,2560 10,2560 M 0,2570 10,2570 M 0,2580 10,2580 M 0,2590 10,2590 M 0,2600 30,2600 M 0,2610 10,2610 M 0,2620 10,2620 M 0,2630 10,2630 M 0,2640 10,2640 M 0,2650 20,2650 M 0,2660 10,2660 M 0,2670 10,2670 M 0,2680 10,2680 M 0,2690 10,2690 M 0,2700 30,2700 M 0,2710 10,2710 M 0,2720 10,2720 M 0,2730 10,2730 M 0,2740 10,2740 M 0,2750 20,2750 M 0,2760 10,2760 M 0,2770 10,2770 M 0,2780 10,2780 M 0,2790 10,2790 M 0,2800 30,2800 M 0,2810 10,2810 M 0,2820 10,2820 M 0,2830 10,2830 M 0,2840 10,2840 M 0,2850 20,2850 M 0,2860 10,2860 M 0,2870 10,2870 M 0,2880 10,2880 M 0,2890 10,2890 M 0,2900 30,2900 M 0,2910 10,2910 M 0,2920 10,2920 M 0,2930 10,2930 M 0,2940 10,2940 M 0,2950 20,2950 M 0,2960 10,2960 M 0,2970 10,2970 M 0,2980 10,2980 M 0,2990 10,2990 M 0,3000 30,3000" transform="translate(0 -0.5)" style="stroke:#034F84"/> </g> <g style="fill-rule:nonzero; fill-opacity:1; stroke:none; stroke-width:1; stroke-linecap:butt; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-dashoffset:0; stroke-opacity:1; text-anchor:middle; font-family:Arial; font-size:15px;"> <g style="fill:#034F84;"> <text x="35" y="35"> 0</text> <text x="35" y="118"> 100</text> <text x="35" y="218"> 200</text> <text x="35" y="318"> 300</text> <text x="35" y="418"> 400</text> <text x="35" y="518"> 500</text> <text x="35" y="618"> 600</text> <text x="35" y="718"> 700</text> <text x="35" y="818"> 800</text> <text x="35" y="918"> 900</text> <text x="35" y="1018">1000</text> <text x="35" y="1118">1100</text> <text x="35" y="1218">1200</text> <text x="35" y="1318">1300</text> <text x="35" y="1418">1400</text> <text x="35" y="1518">1500</text> <text x="35" y="1618">1600</text> <text x="35" y="1718">1700</text> <text x="35" y="1818">1800</text> <text x="35" y="1918">1900</text> <text x="35" y="2018">2000</text> <text x="35" y="2118">2100</text> <text x="35" y="2218">2200</text> <text x="35" y="2318">2300</text> <text x="35" y="2418">2400</text> <text x="35" y="2518">2500</text> <text x="35" y="2618">2600</text> <text x="35" y="2718">2700</text> <text x="35" y="2818">2800</text> <text x="35" y="2918">2900</text> <text x="35" y="3018">3000</text> </g> </g> </symbol> <symbol id="svg-rulers"> <use x="0" y="0" xlink:href="#svg-ruler-h"/> <use x="0" y="0" xlink:href="#svg-ruler-v"/> </symbol> <symbol id="svg-rule-fourths"> <use x="0" y="0" xlink:href="#svg-rof-slanted"/> <use x="0" y="0" xlink:href="#svg-rof-straight"/> <use x="0" y="0" xlink:href="#svg-rof-centers"/> </symbol> <symbol id="svg-rule-thirds"> <use x="0" y="0" xlink:href="#svg-rot-slanted"/> <use x="0" y="0" xlink:href="#svg-rot-straight"/> <use x="0" y="0" xlink:href="#svg-rot-centers"/> </symbol> <symbol id="svg-margin-centers"> <use x="0" y="0" xlink:href="#svg-screen-margins"/> <use x="0" y="0" xlink:href="#svg-screen-centers"/> </symbol> <symbol id="svg-fourths-complete"> <use x="0" y="0" xlink:href="#svg-rule-fourths"/> <use x="0" y="0" xlink:href="#svg-margin-centers"/> </symbol> <symbol id="svg-thirds-complete"> <use x="0" y="0" xlink:href="#svg-rule-thirds"/> <use x="0" y="0" xlink:href="#svg-margin-centers"/> </symbol> <symbol id="svg-design-complete"> <use x="0" y="0" xlink:href="#svg-rule-fourths"/> <use x="0" y="0" xlink:href="#svg-rule-thirds"/> <use x="0" y="0" xlink:href="#svg-margin-centers"/> <use x="0" y="0" xlink:href="#svg-rulers"/> </symbol> <use x="0" y="0" xlink:href="#svg-design-complete"/> </svg>';
    var debugInject = document.createElement('div');

    debugInject.id        = 'debug--layer-design';
    debugInject.innerHTML = debugCode;

    document.body.appendChild(debugInject);
}