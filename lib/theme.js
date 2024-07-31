function createTheme(inVar,colorval) {
var theme1 = new Object;
var i,c,h,s,l,b,v;  
var x, y, z, txt, sat, light, hex, col, ele;
var y = colorval;

x = w3color(y).toHsl();
 

x = w3color(y).toHsl();
sat = x.s;
light = x.l;

x.l= light + ((1.0-light)/5) * 4.7
hex = w3color("hsl(" + x.h + "," + sat + "," + x.l + ")").toHexString();

theme1.l5 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.tl5 = col;

x.l= light + ((1.0-light)/5) * 4
hex = w3color("hsl(" + x.h + "," + sat + "," + x.l + ")").toHexString();
theme1.l4 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.tl4 = col;

x.l= light + ((1.0-light)/5) * 3
hex = w3color("hsl(" + x.h + "," + sat + "," + x.l + ")").toHexString();

theme1.l3 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.tl3 = col;

x.l= light + ((1.0-light)/5) * 2
hex = w3color("hsl(" + x.h + "," + sat + "," + x.l + ")").toHexString();

theme1.l2 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.tl2 = col;

x.l= light + ((1.0-light)/5) * 1
hex = w3color("hsl(" + x.h + "," + sat + "," + x.l + ")").toHexString();

theme1.l1 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.tl1 = col;


x.l= light
hex = w3color(y).toHexString();
theme1.d0 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.td0 = col;

x.l= light - ((light)/5) * 0.5
hex = w3color("hsl(" + x.h + "," + x.s + "," + x.l + ")").toHexString();
theme1.d1 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.td1 = col;

x.l= light - ((light)/5) * 1
hex = w3color("hsl(" + x.h + "," + x.s + "," + x.l + ")").toHexString();
theme1.d2 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};
theme1.td2 = col;

x.l= light - ((light)/5) * 1.5
hex = w3color("hsl(" + x.h + "," + x.s + "," + x.l + ")").toHexString();
theme1.d3 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};

theme1.td3 = col;
x.l= light - ((light)/5) * 2;
hex = w3color("hsl(" + x.h + "," + x.s + "," + x.l + ")").toHexString();
theme1.d4 = hex;
col = "#000";
if (w3color(hex).isDark(165)) {col = "#fff"};

theme1.td4 = col;

x.l= light - ((light)/5) * 2.5;
hex = w3color("hsl(" + x.h + "," + x.s + "," + x.l + ")").toHexString();
theme1.d5 = hex;
col = "#";
if (w3color(hex).isDark(165)) {col = "#fff"};

theme1.td5 = col;

txt = ".w3-theme-l5 {color:" + theme1.tl5 + " !important; background-color:" + theme1.l5 +" !important}<br>";
txt += ".w3-theme-l4 {color:" + theme1.tl4 + " !important; background-color:" + theme1.l4 +" !important}<br>";
txt += ".w3-theme-l3 {color:" + theme1.tl3 + " !important; background-color:" + theme1.l3 +" !important}<br>";
txt += ".w3-theme-l2 {color:" + theme1.tl2 + " !important; background-color:" + theme1.l2 +" !important}<br>";
txt += ".w3-theme-l1 {color:" + theme1.tl1 + " !important; background-color:" + theme1.l1 +" !important}<br>";
txt += ".w3-theme-d1 {color:" + theme1.td1 + " !important; background-color:" + theme1.d1 +" !important}<br>";
txt += ".w3-theme-d2 {color:" + theme1.td2 + " !important; background-color:" + theme1.d2 +" !important}<br>";
txt += ".w3-theme-d3 {color:" + theme1.td3 + " !important; background-color:" + theme1.d3 +" !important}<br>";
txt += ".w3-theme-d4 {color:" + theme1.td4 + " !important; background-color:" + theme1.d4 +" !important}<br>";
txt += ".w3-theme-d5 {color:" + theme1.td5 + " !important; background-color:" + theme1.d5 +" !important}<br><br>";

txt += ".w3-theme-light {color:" + theme1.tl5 + " !important; background-color:" + theme1.l5 +" !important}<br>";
txt += ".w3-theme-dark {color:" + theme1.td5 + " !important; background-color:" + theme1.d5 +" !important}<br>";
txt += ".w3-theme-action {color:" + theme1.td5 + " !important; background-color:" + theme1.d5 +" !important}<br><br>";

txt += ".w3-theme {color:" + theme1.td0 + " !important; background-color:" + theme1.d0 +" !important}<br>";
txt +=  ".w3-text-theme {color:" + theme1.d0 + " !important}<br>";
txt += ".w3-theme-border {border-color:" + theme1.d0 + " !important}<br>";

//document.getElementById("css1").innerHTML = txt;

ele = document.getElementById("mt1-top")
ele.style.background = theme1.d3;
ele.style.color = theme1.td3;

ele = document.getElementById("mt1-header")
ele.style.background = theme1.d0;
ele.style.color = theme1.td0;

ele = document.getElementById("mt1-footer")
ele.style.background = theme1.d0;
ele.style.color = theme1.td0;

ele = document.getElementById("mt1-bottom")
ele.style.background = theme1.d5;
ele.style.color = theme1.td5;

ele = document.getElementById("mt1-action")
ele.style.background = theme1.d5;
ele.style.color = theme1.td5;

ele = document.getElementById("mt1-graphic")
ele.style.color = theme1.d0;

ele = document.getElementById("mt1-back")
ele.style.background = theme1.l5;

ele = document.getElementById("mt1-h1")
ele.style.color = theme1.d0
ele = document.getElementById("mt1-h2")
ele.style.color = theme1.d0
ele = document.getElementById("mt1-h3")
ele.style.color = theme1.d0

displayDemo(theme1);
}
function displayDemo(theme) {
  document.getElementById("demo-h1").style.backgroundColor = theme.d2;
  document.getElementById("demo-h1").style.color = theme.td2;
  document.getElementById("demo-input").style.backgroundColor = theme.d1;
  document.getElementById("demo-h2").style.backgroundColor = theme.d0;
  document.getElementById("demo-h2").style.color = theme.td0;
  document.getElementById("demo-navbar").style.backgroundColor = theme.d0;
  document.getElementById("demo-navbar").style.color = theme.td0;
//  document.getElementById("demo-list").style.backgroundColor = theme.d2;
//  document.getElementById("demo-list").style.color = theme.td2;
  document.getElementById("demo-footer").style.backgroundColor = theme.d2;
  document.getElementById("demo-footer").style.color = theme.td2;
}
