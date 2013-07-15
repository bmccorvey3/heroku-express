$("#computers").click(function() {
    if (lastCountryString != "" && myData[lastCountryString].idi != "No Data") {



        update_idi(countries[lastCountryString], "#computers");






        myData[lastCountryString].idi += .5;
        myData[lastCountryString].rank = 12;
        myData[lastCountryString].fillKey = '4';

        $("#map_world").empty();
        refreshMap();

        $("path").click(function() {
            lastCountryString = $("#hoverid").attr("country");
        });


    }
});

$("#internet").click(function() {
          

    myData[lastCountryString].idi += .5;
    myData[lastCountryString].rank = 12;
    myData[lastCountryString].fillKey = '4';

    $("#map_world").empty();
    refreshMap();

    $("path").click(function() {
        lastCountryString = $("#hoverid").attr("country");
    });


});

$("#mobile_phones").click(function() {


    myData[lastCountryString].idi += .5;
    myData[lastCountryString].rank = 12;
    myData[lastCountryString].fillKey = '4';

    $("#map_world").empty();
    refreshMap();

    $("path").click(function() {
        lastCountryString = $("#hoverid").attr("country");
    });


});

$("#broadband").click(function() {
          
    myData[lastCountryString].idi += .5;
    myData[lastCountryString].rank = 12;
    myData[lastCountryString].fillKey = '4';

    $("#map_world").empty();
    refreshMap();

    $("path").click(function() {
        lastCountryString = $("#hoverid").attr("country");
    });


});

$("#education").click(function() {
       

    myData[lastCountryString].idi += .5;
    myData[lastCountryString].rank = 12;
    myData[lastCountryString].fillKey = '4';
    
    $("#map_world").empty();
    refreshMap();

    $("path").click(function() {
        lastCountryString = $("#hoverid").attr("country");
    });      


});

$("#reset").click(function() {
   
   location.reload();

});

function update_idi(country, button){
   var a = country.fphone;
   var b = country.mphone;
   var c = country.bandwidth;
   var d = country.per_comp;
   var e = country.per_web;
   var f = country.internet;
   var g = country.fbroadband;
   var h = country.mbroadband;
   var i = country.literacy;
   var j = country.secondary;
   var k = country.tertiary;

   if (button!=""){
        if (button = "#computers"){
            num += (100000000*400/country.population);
            country.idi = num;

            console.log("computers working");

            console.log(num);
        }
        else if (button = "#internet"){
            e += (1000*400/country.population);

            country.per_web = e;

            console.log("internet working");
        }
        else if (button = "#mobile_phones"){
            b += (1000*100/country.population);

            country.m_phone = b;

            console.log("phones working");
        }
        else if (button = "#broadband"){
            g += (1000*100/country.population);

            country.mbroadband = g;

            console.log("broadband working");
        }
        else if (button = "#education"){
            i += (1000/country.population);

            country.literacy = i;

            console.log("education working");
        }
   }

   console.log(c);
   country.idi = ((((a/60)+(b/180)+(c/408813)+(d/100)+(e/100))*.08) + (((f/100)+(g/60)+(h/100))*.132) + (((i/100)+(j/100)+(k/100))*.066));
}

var lastCountryString = "";
var button = "";
var num = 0;

function country (nam,rank,idi,population,f_phone,m_phone,bandwidth,per_comp,per_web,internet,fbroadband,mbroadband,literacy,secondary,tertiary) {
    this.nam=nam;
    this.rank=rank;
    this.idi=idi;
    this.population=population;
    this.f_phone=f_phone;
    this.m_phone=m_phone;
    this.bandwidth=bandwidth;
    this.per_comp=per_comp;
    this.per_web=per_web;
    this.internet=internet;
    this.fbroadband=fbroadband;
    this.mbroadband=mbroadband;
    this.literacy=literacy;
    this.secondary=secondary;
    this.tertiary=tertiary;
}

function fill (idi) {
    if (idi>=0 && idi<2) {col = '1';} 
    else if (idi>=2 && idi<4){col = '2';}
    else if (idi>=4 && idi<6){col = '3';}
    else if (idi>=6 && idi<8){col = '4';}
    else if (idi>=8 && idi<=10){col = '5';}
    return col;
}

var countries = {

     ALB : new country("Albania",80,3.78,3011405,10.5,96.4,19038,16.4,15.7,49,4.3,8.8,95.9,88.9,36.7),
     DZA : new country("Algeria",104,2.98,38087812,8.5,99,8933,22,15,14,2.8,0,72.6,94.9,30.8),
     ATG : new country("Antigua & Barbuda",43,5.74,90156,39.6,181.6,56545,54,45,82,6.7,19.7,99,105.4,16.4),
     ARG : new country("Argentina",56,5,42610981,24.9,134.9,25712,50,38,47.7,10.5,11.7,97.7,88.5,71.2),
     AUS : new country("Australia",21,7.05,22262501,46.6,108.3,50396,82.6,78.9,79,23.9,42.8,99,129.2,75.9),
     AUT : new country("Austria",19,7.1,8221646,40.3,154.8,81919,77.6,75.4,79.8,26.5,43.3,99,99.6,60.2),
     AZE : new country("Azerbaijan",68,4.39,9590159,18.1,108.7,19102,24.9,39.5,50,10.7,21.5,99.5,84.6,19.3),
     BHR : new country("Bahrain",40,5.85,1281332,20.9,128,14719,90,76.8,77,13.8,9.5,91.4,103.1,51.2),
     BRB : new country("Barbados",34,6.07,288725,51.4,127,38177,65.3,54.6,71.8,22.1,0,99,100.6,65.9),
     BLR : new country("Belarus",46,5.57,9625888,44,111.9,52833,46.4,40.3,39.6,21.9,18.9,99.7,95.9,83),
     BEL : new country("Belgium",23,6.89,10444268,43.1,116.6,131137,81.9,76.5,78,33,19.4,99,110.5,67.5),
     BEN : new country("Benin",141,1.55,9877292,1.7,85.3,3407,2.8,1.8,3.5,0,0,41.7,37.1,6),
     BTN : new country("Bhutan",118,2.13,725296,3.7,65.6,2999,9.1,8.1,21,1.8,1,52.8,61.7,8.8),
     BOL : new country("Bolivia",98,3.13,10461053,8.7,82.8,4162,27,9.4,30,0.7,1.9,90.7,80.2,38.6),
     BIH : new country("Bosnia and Herzegovina",63,4.53,3875723,25.5,84.5,17767,36.5,32,60,11.5,9.2,97.8,89.6,35.9),
     BWA : new country("Botswana",108,2.67,2127825,7.4,142.8,8442,7.2,6.4,7,0.8,1.5,84.1,80,7.4),
     BRA : new country("Brazil",60,4.72,201009622,21.9,123.2,29041,45.4,37.8,45,8.6,20.9,90,101.3,36.1),
     BRN : new country("Brunei Darussalam",57,4.95,415717,19.7,109.2,21995,83.2,69,56,5.5,6.3,95.3,109.7,17.2),
     BGR : new country("Bulgaria",51,5.2,6981642,31,140.7,65832,38,45,51,15.5,14.5,98.3,88,53),
     BFA : new country("Burkina Faso",151,1.14,17812961,0.8,45.3,2183,2.8,2.4,3,0.1,0,28.7,22.6,3.3),
     KHM : new country("Cambodia",121,1.96,15205539,3.7,69.9,13530,4.9,2.8,3.1,0.2,2.2,77.6,46.2,7.8),
     CMR : new country("Cameroon",138,1.6,20549221,3.3,52.4,322,6.2,3,5,0,0,70.7,42.2,11.5),
     CAN : new country("Canada",22,7.04,34568211,47.9,75.3,70150,86,82.8,83,32,32.9,99,101.3,66.6),
     CPV : new country("Cape Verde",101,3.08,531046,14.9,79.2,5806,12.2,8.5,32,4.3,3,84.8,87.5,17.8),
     CAF : new country("Central African Rep.",153,0.97,5166510,0.1,25,203,2.5,1.9,2.2,0,0,55.2,12.6,2.6),
     TCD : new country("Chad",154,0.94,11193452,0.3,31.8,228,2,1.6,1.9,0,0,33.6,25.7,2.2),
     CHL : new country("Chile",55,5.01,17216945,19.5,129.7,20414,50.6,38.8,53.9,11.6,17.1,98.6,87.9,59.2),
     CHN : new country("China",78,3.88,1349585838,21.2,73.2,2692,38,30.9,38.3,11.6,9.5,94,81.2,25.9),
     COL : new country("Colombia",76,3.93,45745783,15.2,98.5,16796,29.9,23.4,40.4,6.9,3.7,93.2,96.4,39.1),
     COM : new country("Comoros",130,1.68,752288,3.1,28.7,4003,5.8,2.9,5.5,0,0,74.2,46.3,7.9),
     COG : new country("Congo",146,1.3,4492689,0.2,93.8,155,3.9,1,5.6,0,1.2,66.8,37.7,5.5),
     COD : new country("Congo (Dem. Rep.)",140,1.6,75507308,0.1,23.1,984,1,1,1.2,0,0,66.8,37.7,6.2),
     CRI : new country("Costa Rica",71,4.37,4695942,31.5,92.2,36216,45.3,33.6,42.1,8.7,2,96.1,99.7,25.6),
     CIV : new country("Côte d'Ivoire",129,1.69,22400835,1.3,86.4,18044,2,1.2,2.2,0.1,0,55.3,29.9,8.9),
     HRV : new country("Croatia",42,5.75,4475611,40.1,116.4,19948,64,61.4,70.7,19.5,6.6,98.8,95.3,49.2),
     CUB : new country("Cuba",106,2.77,11061886,10.6,11.7,175,4.2,3,23.2,0,0,99.8,89.4,95.2),
     CYP : new country("Cyprus",44,5.73,1155403,36.3,97.7,53569,66.4,57.4,57.7,18.1,24.1,97.9,98.4,52),
     CZE : new country("Czech Republic",32,6.17,10162921,20.9,121.6,91064,69,66.6,73,15.7,43.1,99,90.4,60.7),
     DNK : new country("Denmark",3,8.29,5556452,45.1,126.5,159511,90.3,90.1,90,38.2,80.2,99,117.4,74.4),
     DJI : new country("Djibouti",128,1.74,792198,2,21.3,13409,14.3,3.9,7,1.2,0,73,36.1,4.9),
     DOM : new country("Dominican Rep.",93,3.34,10219630,10.4,87.2,11205,18.9,11.8,35.5,4,7.7,88.2,76.4,34.2),
     ECU : new country("Ecuador",82,3.68,15439429,15.1,104.5,27742,28.8,16.9,31.4,4.2,10.3,84.2,80.4,39.8),
     EGY : new country("Egypt",83,3.66,85294388,10.6,101.1,6754,36.4,30.5,35.6,2.2,21,66.4,80.5,30.4),
     SLV : new country("El Salvador",103,2.99,6108590,15.3,125.8,4176,14.3,12,17.7,3.3,3.6,84.1,65,23.4),
     ERI : new country("Eritrea",152,1.09,6233682,1.1,4.5,89,2,1.6,6.2,0,0,66.6,31.9,2),
     EST : new country("Estonia",24,6.81,1266375,35.1,139,24378,75.3,70.8,76.5,27.1,42,99.8,103.6,62.7),
     ETH : new country("Ethiopia",150,1.15,93877025,1,16.7,6486,1.8,1.5,1.1,0,0.3,29.8,35.7,5.5),
     FJI : new country("Fiji",88,3.5,896758,15,83.7,8020,29.3,22.1,28,2.7,15.5,95.1,86.5,16.1),
     FIN : new country("Finland",5,8.04,5266114,20.1,166,118445,86.6,84.2,89.4,29.5,87.1,99,107.5,91.6),
     FRA : new country("France",18,7.3,65951611,55.9,105,78590,81.2,75.9,79.6,36.1,44,99,112.6,54.5),
     GAB : new country("Gabon",111,2.47,1640286,2,117.3,46187,8.9,7,8,0.3,0,87.7,58.4,6.6),
     GMB : new country("Gambia",125,1.84,1883051,2.8,89,1709,6.4,5.2,10.9,0,0.5,46.5,54.1,4.1),
     GEO : new country("Georgia",73,4.2,4555911,31,102.3,15796,23.8,23.3,36.6,7.6,20.5,99.7,86.2,28.2),
     DEU : new country("Germany",16,7.39,81147265,63,132.3,74786,89.6,83.3,83,32.5,34.8,99,102.6,46.2),
     GHA : new country("Ghana",117,2.23,25199609,1.1,84.8,225,10.2,4,14.1,0.3,23,66.6,58.1,8.8),
     GRC : new country("Greece",33,6.14,10772967,49.9,106.5,26008,56.9,50.2,53,21.6,31.8,97.2,100.9,89.4),
     GIN : new country("Guinea",148,1.28,11176026,0.2,44,1731,1.8,1.1,1.3,0,0,39.5,38.1,9.5),
     GUY : new country("Guyana",99,3.12,739903,20.2,68.6,11987,9,8,32,2.5,0,99,91,11.9),
     HND : new country("Honduras",107,2.72,8448465,7.9,104,4866,14,10,15.9,0,3.7,83.6,73.5,18.8),
     HKG : new country("Hong Kong",11,7.68,7182724,61.1,209.6,964616,80.8,79.6,74.5,31.5,51.8,99,83,59.7),
     HUN : new country("Hungary",41,5.77,9939470,29.4,117.3,12245,71.8,65.2,59,22.2,13.2,99.4,98.3,61.7),
     ISL : new country("Iceland",4,8.17,315281,58.4,106.1,287139,94.5,92.6,95,33.9,60.7,99,107.2,74.1),
     IND : new country("India",119,2.1,1220800359,2.6,72,5423,6.9,6,10.1,1,1.9,62.8,60.2,16.2),
     IDN : new country("Indonesia",95,3.19,251160124,15.9,97.7,7196,12,7,18,1.1,22.2,92.2,77.2,23.1),
     IRN : new country("Iran",87,3.53,79853900,37.1,74.9,3540,35,22,21,2.4,0,85,83.5,42.8),
     IRL : new country("Ireland",20,7.09,4775982,45.2,108.4,69031,82.3,78.1,76.8,22.1,59.4,99,117.3,61),
     ISR : new country("Israel",27,6.62,7707042,46.3,121.7,11335,79,71,70,23.8,41,99,91,62.5),
     ITA : new country("Italy",29,6.28,61482287,34.6,151.8,60820,66.4,61.6,56.8,22.8,31.3,98.9,99.1,66),
     JAM : new country("Jamaica",89,3.49,2909714,9.9,108.1,23077,25.7,17.8,31.5,3.9,1.5,86.4,92.7,29),
     JPN : new country("Japan",8,7.76,127253075,51.1,102.7,23111,86,84.4,79.5,27.4,93.7,99,101.5,59),
     JOR : new country("Jordan",75,3.95,6482081,7.4,118.2,6337,50.8,35.4,34.9,3.2,4.9,92.2,91.1,41.8),
     KAZ : new country("Kazakhstan",49,5.27,17736896,26.1,142.5,23590,50,48,45,7.5,38.4,99.7,99.6,40.8),
     KEN : new country("Kenya",114,2.32,44037656,0.7,64.8,4544,7.8,6.9,28,0.1,0.3,87,60.2,4),
     KOR : new country("Korea",1,8.56,48955203,59.2,105.4,11878,81.8,96.8,83.8,36.9,105.1,99,97.1,103.9),
     LAO : new country("Lao",120,1.99,6695166,1.7,64.6,2304,6.9,3.4,9,0.7,0.6,72.7,44.7,13.4),
     LVA : new country("Latvia",36,6.06,2178443,23,102.9,44779,64.5,63.6,71.7,20.4,37.6,99.8,95.2,60.1),
     LBN : new country("Lebanon",65,4.48,4131583,21.1,78.6,2257,71.5,61.8,52,5.2,0,89.6,81.4,54),
     LBR : new country("Liberia",149,1.26,3989703,0.1,49.2,573,1.5,1.3,3,0,0.2,59.1,24.4,4.4),
     LTU : new country("Lithuania",35,6.06,3515858,21.9,151.3,57571,63.1,61.8,65.1,22.1,17.2,99.7,98,77.4),
     LUX : new country("Luxembourg",7,7.76,514862,54.1,148.3,89564,92,90.6,90.9,32.9,66.7,99,97.6,10.5),
     MAC : new country("Macao",14,7.51,583003,30.8,206.4,32484,83,75.9,58,24.7,216.1,93.5,92.4,64.9),
     MDG : new country("Madagascar",143,1.44,22599098,0.6,38.3,5679,2.2,2,1.9,0,0.1,64.5,31.1,3.7),
     MWI : new country("Malawi",144,1.42,16777547,1.1,25.1,1421,3,2.5,3.3,0.1,3.1,73.7,32.1,0.7),
     MYS : new country("Malaysia",58,4.82,29628392,14.7,127,10651,64.1,61.4,61,7.4,12.3,92.5,68.3,40.2),
     MDV : new country("Maldives",72,4.3,393988,7.5,165.7,30659,62.9,28.9,34,6.4,17.4,98.4,91.8,0),
     MLI : new country("Mali",145,1.38,15968882,0.7,68.3,4893,3.4,1.4,2,0,0.4,26.2,39.4,5.8),
     MLT : new country("Malta",26,6.69,411277,54.9,124.9,47850,75.5,75.3,69.2,30,32.6,92.4,104.8,33.4),
     MRT : new country("Mauritania",136,1.64,3437610,2,92.7,3890,3.4,2.5,4.5,0.2,0.5,57.5,24.4,4.4),
     MUS : new country("Mauritius",74,4.18,1322238,28.7,99,12714,38.2,36.4,35,8.9,12.4,87.9,89.4,24.9),
     MEX : new country("Mexico",79,3.79,116220947,17.1,82.4,8743,31.9,27.5,36.2,10.6,4.6,93.4,86.9,27),
     MDA : new country("Moldova",62,4.55,3619925,33.3,104.8,91118,41.6,41,38,9.9,3.5,98.5,88,38.1),
     MNG : new country("Mongolia",84,3.63,3226516,6.7,105.1,53576,25.2,9,20,2.8,12.7,97.5,92.9,53.3),
     MAR : new country("Morocco",90,3.46,32649130,11,113.3,7558,39,35,51,1.8,8,56.1,56.1,13.2),
     MOZ : new country("Mozambique",147,1.28,24096669,0.4,32.8,1244,5.3,3.5,4.3,0.1,1,55.1,25.5,1.5),
     MMR : new country("Myanmar",131,1.67,55167330,1.1,2.6,8180,1.8,1.4,1,0.1,0,92,54.3,11),
     NAM : new country("Namibia",109,2.51,2182852,6,105,2349,13,10,12,0.8,3.6,88.5,64,9),
     NPL : new country("Nepal",137,1.63,30430267,2.8,43.8,1531,4.6,3.1,9,0.3,0,59.1,43.5,10.1),
     NLD : new country("Netherlands",6,7.82,16805037,42.8,119,162532,93,93.6,92.3,38.7,49.2,99,120.2,62.7),
     NZL : new country("New Zealand",17,7.34,4365113,42.6,109.2,23706,87.4,83.3,86,25.8,53,99,119.1,82.6),
     NIC : new country("Nicaragua",113,2.44,5788531,4.9,82.2,12857,9,5.6,10.6,1.8,1,78,69.4,19.5),
     NER : new country("Niger",155,0.88,16899327,0.6,27,1005,1.5,1,1.3,0,0,28.7,13.4,1.5),
     NGA : new country("Nigeria",122,1.93,174507539,0.4,58.6,368,9.3,4.6,28.4,0.1,2.8,60.8,44,10.3),
     NOR : new country("Norway",13,7.52,4722701,42.7,116.8,151257,93.6,92.2,94,36.5,24.4,99,110.2,73.8),
     OMN : new country("Oman",53,5.1,3154134,10.1,169,11648,58,38.9,68,1.8,37.8,86.6,100.3,24.5),
     PAK : new country("Pakistan",127,1.75,193238868,3.2,61.6,4752,11,6.7,9,0.4,0.3,55.5,34.2,5.4),
     PAN : new country("Panama",66,4.41,3559408,15.2,203.9,44121,29,20.7,42.7,7.9,14.5,93.6,74.1,44.6),
     PNG : new country("Papua New Guinea",142,1.44,6431902,1.9,34.2,5703,3,2.5,2,0.1,0,60.1,22.7,15.4),
     PRY : new country("Paraguay",97,3.14,6623252,5.6,99.4,9482,22.7,19.3,23.9,1,4.5,94.6,66.9,36.6),
     PER : new country("Peru",86,3.57,29849303,11.1,110.4,9319,25.4,17.7,36.5,3.5,1.4,89.6,91.6,35),
     PHL : new country("Philippines",94,3.19,105720644,7.2,92,12360,15.1,15,29,1.9,3.4,95.4,84.8,28.9),
     POL : new country("Poland",31,6.19,38383809,18.1,128.5,40244,73,66.6,64.9,14.4,48.4,99.5,97,70.5),
     PRT : new country("Portugal",37,6.05,10799270,42.3,114.9,135332,63.1,58,55.3,21,27.4,94.9,106.7,62.2),
     QAT : new country("Qatar",30,6.24,2042444,16.4,123.1,22333,88.3,83.6,86.2,8.7,61,94.7,93.7,10),
     ROU : new country("Romania",52,5.13,21790479,21.9,109.2,114451,52.9,47.4,44,15.4,14.1,97.7,95.1,63.8),
     RUS : new country("Russia",38,6,142500482,30.9,179.3,31911,57.1,46,49,12.2,47.9,99.6,88.6,75.9),
     RWA : new country("Rwanda",133,1.66,12012589,0.4,40.6,4414,2,5,7,0,6.4,70.7,32.2,5.5),
     LCA : new country("Santa Lucia",64,4.49,26939583,16.5,191.2,32985,62.8,60.5,47.5,5.7,40.4,86.1,100.6,36.8),
     SAU : new country("Saudi Arabia",47,5.43,13300410,2.7,73.3,2909,6.1,5,17.5,0.7,1.5,49.7,37.4,7.9),
     SEN : new country("Senegal",124,1.85,7243007,37.3,125.4,76761,55.8,43.9,42.2,10.8,34.5,97.8,91.4,49.1),
     SRB : new country("Serbia",48,5.4,90846,32.1,145.7,5867,45,34,43.2,8.9,4.7,91.8,119.2,1.8),
     SYC : new country("Seychelles",70,4.37,5460302,38.9,149.5,547064,86,85,75,25.5,110.9,94.7,74.1,43.8),
     SGP : new country("Singapore",12,7.66,5488339,19.3,109.3,12276,79.4,70.8,74.4,13.6,31.9,99,89.4,54.2),
     SVK : new country("Slovakia",39,5.86,1992690,42.9,106.6,68250,75.1,72.6,72,24.8,29.3,99.7,97.1,86.9),
     SVN : new country("Slovenia",25,6.7,597248,1.5,49.8,3893,4.4,3.5,6,0.4,3.8,82,35.5,16.1),
     SLB : new country("Solomon Islands",123,1.85,48601098,8.2,126.8,18874,19.5,9.8,21,1.8,19.8,88.7,93.8,15.8),
     ZAF : new country("South Africa",91,3.42,47370542,42.3,114.2,64069,72.6,63.9,67.6,23.5,40.9,97.7,119,73.2),
     ESP : new country("Spain",28,6.62,21675648,17.1,87,5224,13.6,8.1,15,1.7,2.3,90.6,87.8,15.5),
     LKA : new country("Sri Lanka",105,2.88,162781,20.4,123,81149,52,44,42,12.1,0,99,96.1,11.3),
     VCT : new country("St. Vincent and the Grenadines",59,4.74,103220,20.8,120.5,637784,58,45,43,12.9,0,99,107.5,18.2),
     SWZ : new country("Swaziland",116,2.24,1403362,4.4,63.7,2347,11.2,9.5,18.1,0.2,0.7,86.9,58.1,4.4),
     SWE : new country("Sweden",2,8.34,9119423,48.7,118.6,244440,91.5,90.6,91,31.8,91.5,99,100.3,70.8),
     CHE : new country("Switzerland",10,7.68,7996026,60.8,130.1,167636,90,88.9,85.2,39.2,36.1,99,95.2,51.5),
     SYR : new country("Syria",96,3.15,22467336,20.9,63.2,3489,40.5,36,22.5,0.6,1,84.2,72.4,15.7),
     TZA : new country("Tanzania",139,1.6,48261942,0.3,55.5,902,4,4.5,12,0,1.2,72.9,27.4,2.1),
     MKD : new country("Macedonia",54,5.05,2087171,20,109.4,17945,64.8,51.6,56.7,13.2,18.7,97.1,82.8,40.4),
     THA : new country("Thailand",92,3.41,67448120,9.7,113.2,10622,24.7,13.4,23.7,5.4,0,93.5,79.2,47.7),
     TGO : new country("Togo",134,1.65,7154237,3.9,50.4,6443,3.8,3,3.5,0.1,0.4,56.9,45.5,5.9),
     TON : new country("Tonga",100,3.12,106322,28.7,52.6,3827,13.7,10.6,25,1.2,0.1,99,101.3,16.1),
     TTO : new country("Trinidad & Tobago",61,4.57,1225225,21.7,135.6,19753,56.3,35,55.2,11.5,1.2,98.7,89.9,11.5),
     TUN : new country("Tunisia",85,3.58,10835873,11.5,116.9,14832,21,16,39.1,5.1,2.4,77.6,90.5,34.4),
     TUR : new country("Turkey",69,4.38,80694485,20.7,88.7,33938,48.5,42.9,42.1,10.3,8.8,90.8,77.6,45.8),
     TKM : new country("Turkmenistan",110,2.49,5113040,10.7,68.8,1567,12.2,6,5,0,0,99.6,85,21.7),
     TUV : new country("Tuvalu",112,2.46,10698,14.7,21.6,1354,23.4,18,30,4.6,0,82,35.5,16.1),
     UGA : new country("Uganda",132,1.67,34758809,1.3,48.4,1752,4,4.5,13,0.3,2.8,71.4,28.1,4.2),
     UKR : new country("Ukraine",67,4.4,44573205,28.1,123,9835,30.7,26,30.6,7,4.4,99.7,95.6,79.5),
     ARE : new country("United Arab Emirates",45,5.64,5473972,23.1,148.6,27609,77,67,70,11,21.7,90,92.3,30.4),
     GBR : new country("United Kingdom",9,7.75,63395574,53.2,130.8,166073,84,85.1,82,32.7,62.3,99,101.8,58.5),
     USA : new country("United States",15,7.48,316668567,47.9,105.9,47174,77.2,76,77.9,28.7,65.5,99,96,94.8),
     URY : new country("Uruguay",50,5.24,3324460,28.5,140.8,32078,62,39.4,51.4,13.5,9,98.3,90.2,63.3),
     UZB : new country("Uzbekistan",102,3.05,28661637,6.9,91.6,579,6.3,7.8,30.2,0.5,18.4,99.3,105.7,8.9),
     VEN : new country("Venezuela",77,3.92,28459085,24.9,97.8,8108,19,16,40.2,0.9,4.2,95.2,82.5,78.1),
     VNM : new country("Vietnam",81,3.68,92477857,11.5,143.4,9998,16,14,35.1,4.3,18,92.8,77.2,22.3),
     YEM : new country("Yemen",126,1.76,25408288,4.3,47,1082,4.6,4,14.9,0.4,0.1,62.4,44.1,10.2),
     ZMB : new country("Zambia",135,1.65,14222233,0.6,60.6,452,2.7,2.4,11.5,0.1,0.4,70.9,45.5,2.4),
     ZWE : new country("Zimbabwe",115,2.24,13182908,2.8,72.1,1748,5.9,4,15.7,0.3,14.9,91.9,41,6.2) 

};

var myData = {};

for (property in countries) {
    myData[property] = {
        "cid" : property,
        "fillKey" : fill(countries[property].idi),
        "rank" : countries[property].rank,
        "idi" : countries[property].idi
    }

}

//Add countries with no data here
var others = ["AFG","ASM","AND","AGO","AIA","ATA","ARM","ABW","BHS","BGD",
            "BLZ","BMU","BVT","IOT","BDI","CYM","CXR","CCK","COK","CIV",
            "DMA","TMP","GNQ","FLK","FRO","FXX","GUF","PYF","ATF","GIB",
            "GRL","GRD","GLP","GUM","GTM","GNB","HTI","HMD","VAT","IRQ",
            "KIR","PRK","KWT","KGZ","LSO","LBY","LIE","MHL","MTQ","MYT",
            "FSM","MCO","MNE","MSR","NRU","ANT","NCL","NIU","NFK","MNP",
            "PLW","PCN","PRI","REU","KNA","WSM","SMR","STP","SLE","SOM",
            "SSD","SGS","SHN","SPM","SDN","SUR","SJM","TWN","TJK","TKL",
            "TCA","UMI","VUT","VGB","VIR","WLF","ESH","-99","SDS","PSE"]

for(var i = 0; i < others.length; i++){
    myData[others[i]] = {
        "cid" : others[i],
        "fillKey" : 'default',
        "rank" : "No Data",
        "idi" : "No Data"
    }
}

function refreshMap() {
   map = new Map({
      scope: 'world',
      el: $('#map_world'),
      geography_config: { 
        highlightBorderColor: '#222',
        highlightOnHover: true,
        popupTemplate: _.template([
            '<div id="hoverid" country="<%=data.cid%>" class="hoverinfo"><strong><%= geography.properties.name %></strong>',
            '<br>Rank 2011: <%=data.rank%>',
            '<br>IDI 2011: <%=data.idi%>',
            '<br/>Name: <%=geography.properties.name%>',
            '</div>'].join(''))
      },
      
      fills: {
        '1': '#B20000',
        '2': '#E65C00',
        '3': '#FFCC00',
        '4': '#009900',
        '5': '#003D14',
        'default': '#C0C0C0',
        'select' : '#000'
      },
      data: myData,
    });

   map.render(); 
}

refreshMap();

$("path").click(function() {
    lastCountryString = $("#hoverid").attr("country");
    console.log(lastCountryString);


});
