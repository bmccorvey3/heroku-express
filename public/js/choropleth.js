$("#reset").click(function() {
   
   location.reload();

});

var incre_comp = 200;
var incre_web = 12;
var incre_mphone = 50;
var incre_broadband = 57;
var incre_literacy = 1;

var real_total = 0;

$("#computers,#internet,#mobile_phones,#broadband,#education").on('click', function() {
    // the current total
    var total = parseInt($('#output').text().substring(1));

    // increment the total based on the id



    // COST NOT CALCULATING CORRECTLY WITH COMMAS HELP!!!!!!!!!!!!!!!!!

    if (lastCountryString != ""){
        if (this.id == "computers" && myData[lastCountryString].idi != "No Data") {
            bootbox.prompt("You are sending computers to " + myData[lastCountryString].data.nam + ". Each computer costs $200. How many computers" +
                " would you like to send?", function(num){
                    if (num == null) {
                    }
                    else if (num<= 0 || num%1 != 0){
                        bootbox.alert("Please enter an integer value greater than 0.");
                    }
                    else{
                        // Set the total number.
                        total += (num *incre_comp);
                        real_total += total;
                        $('#output').text("$" + convertNumToStringWithCommas(real_total));

                        // Update the data.
                        myData[lastCountryString].idi = parseFloat(updateIDI(lastCountryString, "#computers", num)).toFixed(2);
                        myData[lastCountryString].fillKey = String(Math.floor(myData[lastCountryString].idi/2));
                       

                        if(myData[lastCountryString].idi >10 && myData[lastCountryString].idi <20) {
                            myData[lastCountryString].fillKey = fill(Math.floor(myData[lastCountryString].idi/2));
                            myData[lastCountryString].idi = (myData[lastCountryString].idi/2).toFixed(2);
                        }

                        if(myData[lastCountryString].idi >20){
                            myData[lastCountryString].idi = 10;
                            myData[lastCountryString].fillKey = '5';
 
                            bootbox.alert("Congrulations! You have fully improved " + myData[lastCountryString].data.nam + " However, " + 
                            "you spent way too much money.");
                        }

                        // Clear the map.
                        $("#map_world").empty();
                        refreshMap();


                        // Re-set the click function on every country path since we have emptied the map (deleted all the click functionality too).
                        $("path").click(function() {
                        lastCountryString = $("#hoverid").attr("country");
                        console.log(lastCountryString);
                        $("#wha_country").text("You are improving: " + myData[lastCountryString].data.nam);
                        });
                    }
                }); 
            /*total += incre_comp;*/
        }
        else if (this.id == "internet") {
            
             bootbox.prompt("10 hours of dial-up costs $12 per month. To how many households in " +
                myData[lastCountryString].data.nam + " would you like to send Internet access?", function(num){
                    if (num == null) {
                    }
                    else if (num<= 0 || num%1 != 0){
                        bootbox.alert("Please enter an integer value greater than 0.");
                    }
                    else{
                        // Set the total number.
                        total += (num *incre_web);
                        real_total += total;
                        $('#output').text("$" + convertNumToStringWithCommas(real_total));

                        // Update the data.
                        myData[lastCountryString].idi = parseFloat(updateIDI(lastCountryString, "#internet", num)).toFixed(2);
                        myData[lastCountryString].fillKey = String(Math.floor(myData[lastCountryString].idi/2));
                       

                        if(myData[lastCountryString].idi >10 && myData[lastCountryString].idi <20) {
                            myData[lastCountryString].fillKey = fill(Math.floor(myData[lastCountryString].idi/2));
                            myData[lastCountryString].idi = (myData[lastCountryString].idi/2).toFixed(2);
                        }

                        if(myData[lastCountryString].idi >20){
                            myData[lastCountryString].idi = 10;
                            myData[lastCountryString].fillKey = '5';
 
                            bootbox.alert("Congrulations! You have fully improved " + myData[lastCountryString].data.nam + " However, " + 
                            "you spent way too much money.");
                        }

                        // Clear the map.
                        $("#map_world").empty();
                        refreshMap();


                        // Re-set the click function on every country path since we have emptied the map (deleted all the click functionality too).
                        $("path").click(function() {
                        lastCountryString = $("#hoverid").attr("country");
                        console.log(lastCountryString);
                        $("#wha_country").text("You are improving: " + myData[lastCountryString].data.nam);
                        });
                    }
             }); 
        }
        else if (this.id == "mobile_phones"){
           
             bootbox.prompt("Each phone costs $50. How many phones would you like to send to " 
                 + myData[lastCountryString].data.nam + "?", function(num){
                    if (num == null) {
                    }
                    else if (num<= 0 || num%1 != 0){
                        bootbox.alert("Please enter an integer value greater than 0.");
                    }
                    else{
                        // Set the total number.
                        total += (num *incre_mphone);
                        real_total += total;
                        $('#output').text("$" + convertNumToStringWithCommas(real_total));

                        // Update the data.
                        myData[lastCountryString].idi = parseFloat(updateIDI(lastCountryString, "#mobile_phones", num)).toFixed(2);
                        myData[lastCountryString].fillKey = String(Math.floor(myData[lastCountryString].idi/2));
                       

                        if(myData[lastCountryString].idi >10 && myData[lastCountryString].idi <20) {
                            myData[lastCountryString].fillKey = fill(Math.floor(myData[lastCountryString].idi/2));
                            myData[lastCountryString].idi = (myData[lastCountryString].idi/2).toFixed(2);
                        }

                        if(myData[lastCountryString].idi >20){
                            myData[lastCountryString].idi = 10;
                            myData[lastCountryString].fillKey = '5';
 
                            bootbox.alert("Congrulations! You have fully improved " + myData[lastCountryString].data.nam + " However, " + 
                            "you spent way too much money.");
                        }

                        // Clear the map.
                        $("#map_world").empty();
                        refreshMap();


                        // Re-set the click function on every country path since we have emptied the map (deleted all the click functionality too).
                        $("path").click(function() {
                        lastCountryString = $("#hoverid").attr("country");
                        console.log(lastCountryString);
                        $("#wha_country").text("You are improving: " + myData[lastCountryString].data.nam);
                        });
                    }
            });
            
        }
        else if (this.id == "broadband"){
           
             bootbox.prompt("The price of a fixed-broadband subscription is $57. How many broadband " 
                + "subscriptions would you like to send to " + myData[lastCountryString].data.nam + "?", function(num){
                    if (num == null) {
                    }
                    else if (num<= 0 || num%1 != 0){
                        bootbox.alert("Please enter an integer value greater than 0.");
                    }
                    else{
                        // Set the total number.
                        total += (num *incre_broadband);
                        real_total += total;
                        $('#output').text("$" + convertNumToStringWithCommas(real_total));

                        // Update the data.
                        myData[lastCountryString].idi = parseFloat(updateIDI(lastCountryString, "#broadband", num)).toFixed(2);
                        myData[lastCountryString].fillKey = String(Math.floor(myData[lastCountryString].idi/2));
                       

                        if(myData[lastCountryString].idi >10 && myData[lastCountryString].idi <20) {
                            myData[lastCountryString].fillKey = fill(Math.floor(myData[lastCountryString].idi/2));
                            myData[lastCountryString].idi = (myData[lastCountryString].idi/2).toFixed(2);
                        }

                        if(myData[lastCountryString].idi >20){
                            myData[lastCountryString].idi = 10;
                            myData[lastCountryString].fillKey = '5';
 
                            bootbox.alert("Congrulations! You have fully improved " + myData[lastCountryString].data.nam + " However, " + 
                            "you spent way too much money.");
                        }

                        // Clear the map.
                        $("#map_world").empty();
                        refreshMap();


                        // Re-set the click function on every country path since we have emptied the map (deleted all the click functionality too).
                        $("path").click(function() {
                        lastCountryString = $("#hoverid").attr("country");
                        console.log(lastCountryString);
                        $("#wha_country").text("You are improving: " + myData[lastCountryString].data.nam);

                     });
                }
            });
        }
        else if (this.id == "education"){
           
             bootbox.prompt("How much money would you like to send to improve education in " 
                    + myData[lastCountryString].data.nam + " ?", function(num){
                    if (num == null) {
                    }
                    else if (num<= 0 || num%1 != 0){
                        bootbox.alert("Please enter an integer value greater than 0.");
                    }
                    else{
                        // Set the total number.
                        total += (num *incre_literacy);
                        real_total += total;
                        $('#output').text("$" + convertNumToStringWithCommas(real_total));

                        // Update the data.
                        myData[lastCountryString].idi = parseFloat(updateIDI(lastCountryString, "#education", num)).toFixed(2);
                        myData[lastCountryString].fillKey = String(Math.floor(myData[lastCountryString].idi/2));
                       

                        if(myData[lastCountryString].idi >10 && myData[lastCountryString].idi <20) {
                            myData[lastCountryString].fillKey = fill(Math.floor(myData[lastCountryString].idi/2));
                            myData[lastCountryString].idi = (myData[lastCountryString].idi/2).toFixed(2);
                        }

                        if(myData[lastCountryString].idi >20){
                            myData[lastCountryString].idi = 10;
                            myData[lastCountryString].fillKey = '5';
 
                            bootbox.alert("Congrulations! You have fully improved " + myData[lastCountryString].data.nam + " However, " + 
                            "you spent way too much money.");
                        }

                        // Clear the map.
                        $("#map_world").empty();
                        refreshMap();


                        // Re-set the click function on every country path since we have emptied the map (deleted all the click functionality too).
                        $("path").click(function() {
                        lastCountryString = $("#hoverid").attr("country");
                        console.log(lastCountryString);
                        $("#wha_country").text("You are improving: " + myData[lastCountryString].data.nam);
                         });
                    }
            });
        }
    }
    else {
        bootbox.alert("Please select a country first.");
    }

    // update the div's total
    $('#output').text("$" + 0);

});


function updateIDI(countryString, button, amount){
    var country = myData[countryString].data;
    for (value in country) console.log(value+": "+country[value]);
    if (button!=""){
        if (button == "#computers" && amount !=0){
            country.percomp += (400*amount/country.population);
        }
        else if (button == "#internet" && amount != 0 /* MAX 100 */){
            country.perweb += (400*amount/country.population);
        }
        else if (button == "#mobile_phones" && amount !=0){
            console.log (amount + "here!!");
            country.mphone += (10000*amount/country.population);
        }
        else if (button == "#broadband" && amount != 0){
            country.fbroadband += (10000*amount/country.population);
        }
        else if (button == "#education" && amount != 0 /*MAX 100*/){
            country.literacy += (100*amount/country.population);
        }
    }

    if (country.percomp >100) {
        bootbox.alert("Everyone already has a computer! Try sending other resources.");
        country.percomp = 100;
    }
    if (country.perweb > 100) {
        bootbox.alert("Everyone is already connected to the Internet! Try sending other resources.");
        country.perweb = 100;
    }
    if (country.mphone > 180){
        bootbox.alert("Enough people have mobile phones! Try sending other resources.");
        country.mphone = 180;
    } 
    if (country.fbroadband > 60) {
        bootbox.alert("Enough people have fixed-broadband subscriptions! Try sending other resources");
        country.fbroadband = 60;
    }
    if (country.literacy > 100) {
        bootbox.alert("Everyone is already literate! Try sending other resources.");
        country.literacy = 100;
    }

    /*
    if (country.percomp == 100 && country.perweb == 100 && country.mphone == 180 && country.fbroadband == 60 && country.literacy == 100) {
        bootbox.alert("You have bridged the Digital Divide for this country! Please select another country.");
    }
    */

    for (value in country) console.log(value+": "+country[value]);

    console.log(country.idi);
   
   /*country.idi = ((((a/60)+(b)+(c/408813)+(d)+(e))*.08) + (((f/100)+(g)+(h/100))*.132) + (((i)+(j/100)+(k/100))*.066));*/
   
    var a2 = country.fphone/300;
    var b2 = country.mphone/(180*5);
    var c2 = log10(country.bandwidth)/(5.61*5);
    var d2 = country.percomp/500;
    var e2 = country.perweb/500;
    var f2 = country.internet/300;
    var g2 = country.fbroadband/180;
    var h2 = country.mbroadband/300;
    var i2 = country.literacy/300;
    var j2 = country.secondary/300;
    var k2 = country.tertiary/300; 

    console.log(a2);
    console.log(b2);
    console.log(c2);
    console.log(d2);
    console.log(e2);


    country.idi = (((a2+b2+c2+d2+e2)*.4) + ((f2+g2+h2)*.4) + ((i2+j2+k2)*.2)) *10;

    console.log("this");
    console.log(country.idi);
    return country.idi;
}

var lastCountryString = "";
var button = "";

function log10(val) {
  return Math.log(val) / Math.LN10;
}

function country (nam,rank,idi,population,fphone,mphone,bandwidth,percomp,perweb,internet,fbroadband,mbroadband,literacy,secondary,tertiary) {
    this.nam=nam;
    this.rank=rank;
    this.idi=idi;
    this.population=population;
    this.fphone=fphone;
    this.mphone=mphone;
    this.bandwidth=bandwidth;
    this.percomp=percomp;
    this.perweb=perweb;
    this.internet=internet;
    this.fbroadband=fbroadband;
    this.mbroadband=mbroadband;
    this.literacy=literacy;
    this.secondary=secondary;
    this.tertiary=tertiary;
}

function fill (idi) {
    col = '4';
    if (idi>=0 && idi<2) {col = '0';} 
    else if (idi>=2 && idi<4){col = '1';}
    else if (idi>=4 && idi<6){col = '2';}
    else if (idi>=6 && idi<8){col = '3';}
    else if (idi >= 10) {col = '5';}
    return col;
}

function removeCommas(num) {
    num = parseFloat(value1.replace(/,/g,''));
    return num;
}

function convertNumToStringWithCommas(num) {
    theString = String(num);
    theNewString = "";
    for (i = theString.length-1; i >=0; i--) {
        theNewString = theString[i] + theNewString;
        if ((theString.length - i)%3 == 0 && i != 0) {
            theNewString = "," + theNewString;
        }
    }
    return theNewString;
}

var ALB = new country("Albania",80,3.78,3011405,10.5,96.4,19038,16.4,15.7,49,4.3,8.8,95.9,88.9,36.7);
var DZA = new country("Algeria",104,2.98,38087812,8.5,99,8933,22,15,14,2.8,0,72.6,94.9,30.8);
var ATG = new country("Antigua & Barbuda",43,5.74,90156,39.6,181.6,56545,54,45,82,6.7,19.7,99,105.4,16.4);
var ARG = new country("Argentina",56,5.00,42610981,24.9,134.9,25712,50,38,47.7,10.5,11.7,97.7,88.5,71.2);
var AUS = new country("Australia",21,7.05,22262501,46.6,108.3,50396,82.6,78.9,79,23.9,42.8,99,129.2,75.9);
var AUT = new country("Austria",19,7.1,8221646,40.3,154.8,81919,77.6,75.4,79.8,26.5,43.3,99,99.6,60.2);
var AZE = new country("Azerbaijan",68,4.39,9590159,18.1,108.7,19102,24.9,39.5,50,10.7,21.5,99.5,84.6,19.3);
var BHR = new country("Bahrain",40,5.85,1281332,20.9,128,14719,90,76.8,77,13.8,9.5,91.4,103.1,51.2);
var BRB = new country("Barbados",34,6.07,288725,51.4,127,38177,65.3,54.6,71.8,22.1,0,99,100.6,65.9);
var BLR = new country("Belarus",46,5.57,9625888,44,111.9,52833,46.4,40.3,39.6,21.9,18.9,99.7,95.9,83);
var BEL = new country("Belgium",23,6.89,10444268,43.1,116.6,131137,81.9,76.5,78,33,19.4,99,110.5,67.5);
var BEN = new country("Benin",141,1.55,9877292,1.7,85.3,3407,2.8,1.8,3.5,0,0,41.7,37.1,6);
var BTN = new country("Bhutan",118,2.13,725296,3.7,65.6,2999,9.1,8.1,21,1.8,1,52.8,61.7,8.8);
var BOL = new country("Bolivia",98,3.13,10461053,8.7,82.8,4162,27,9.4,30,0.7,1.9,90.7,80.2,38.6);
var BIH = new country("Bosnia and Herzegovina",63,4.53,3875723,25.5,84.5,17767,36.5,32,60,11.5,9.2,97.8,89.6,35.9);
var BWA = new country("Botswana",108,2.67,2127825,7.4,142.8,8442,7.2,6.4,7,0.8,1.5,84.1,80,7.4);
var BRA = new country("Brazil",60,4.72,201009622,21.9,123.2,29041,45.4,37.8,45,8.6,20.9,90,101.3,36.1);
var BRN = new country("Brunei Darussalam",57,4.95,415717,19.7,109.2,21995,83.2,69,56,5.5,6.3,95.3,109.7,17.2);
var BGR = new country("Bulgaria",51,5.20,6981642,31,140.7,65832,38,45,51,15.5,14.5,98.3,88,53);
var BFA = new country("Burkina Faso",151,1.14,17812961,0.8,45.3,2183,2.8,2.4,3,0.1,0,28.7,22.6,3.3);
var KHM = new country("Cambodia",121,1.96,15205539,3.7,69.9,13530,4.9,2.8,3.1,0.2,2.2,77.6,46.2,7.8);
var CMR = new country("Cameroon",138,1.60,20549221,3.3,52.4,322,6.2,3,5,0,0,70.7,42.2,11.5);
var CAN = new country("Canada",22,7.04,34568211,47.9,75.3,70150,86,82.8,83,32,32.9,99,101.3,66.6);
var CPV = new country("Cape Verde",101,3.08,531046,14.9,79.2,5806,12.2,8.5,32,4.3,3,84.8,87.5,17.8);
var CAF = new country("Central African Republic",153,0.97,5166510,0.1,25,203,2.5,1.9,2.2,0,0,55.2,12.6,2.6);
var TCD = new country("Chad",154,0.94,11193452,0.3,31.8,228,2,1.6,1.9,0,0,33.6,25.7,2.2);
var CHL = new country("Chile",55,5.01,17216945,19.5,129.7,20414,50.6,38.8,53.9,11.6,17.1,98.6,87.9,59.2);
var CHN = new country("China",78,3.88,1349585838,21.2,73.2,2692,38,30.9,38.3,11.6,9.5,94,81.2,25.9);
var COL = new country("Colombia",76,3.93,45745783,15.2,98.5,16796,29.9,23.4,40.4,6.9,3.7,93.2,96.4,39.1);
var COM = new country("Comoros",130,1.68,752288,3.1,28.7,4003,5.8,2.9,5.5,0,0,74.2,46.3,7.9);
var COG = new country("Congo",146,1.30,4492689,0.2,93.8,155,3.9,1,5.6,0,1.2,66.8,37.7,5.5);
var COD = new country("Democratic Republic of the Congo",140,1.60,75507308,0.1,23.1,984,1,1,1.2,0,0,66.8,37.7,6.2);
var CRI = new country("Costa Rica",71,4.37,4695942,31.5,92.2,36216,45.3,33.6,42.1,8.7,2,96.1,99.7,25.6);
var CIV = new country("Côte d'Ivoire",129,1.69,22400835,1.3,86.4,18044,2,1.2,2.2,0.1,0,55.3,29.9,8.9);
var HRV = new country("Croatia",42,5.75,4475611,40.1,116.4,19948,64,61.4,70.7,19.5,6.6,98.8,95.3,49.2);
var CUB = new country("Cuba",106,2.77,11061886,10.6,11.7,175,4.2,3,23.2,0,0,99.8,89.4,95.2);
var CYP = new country("Cyprus",44,5.73,1155403,36.3,97.7,53569,66.4,57.4,57.7,18.1,24.1,97.9,98.4,52);
var CZE = new country("Czech Republic",32,6.17,10162921,20.9,121.6,91064,69,66.6,73,15.7,43.1,99,90.4,60.7);
var DNK = new country("Denmark",3,8.29,5556452,45.1,126.5,159511,90.3,90.1,90,38.2,80.2,99,117.4,74.4);
var DJI = new country("Djibouti",128,1.74,792198,2,21.3,13409,14.3,3.9,7,1.2,0,73,36.1,4.9);
var DOM = new country("Dominican Republic",93,3.34,10219630,10.4,87.2,11205,18.9,11.8,35.5,4,7.7,88.2,76.4,34.2);
var ECU = new country("Ecuador",82,3.68,15439429,15.1,104.5,27742,28.8,16.9,31.4,4.2,10.3,84.2,80.4,39.8);
var EGY = new country("Egypt",83,3.66,85294388,10.6,101.1,6754,36.4,30.5,35.6,2.2,21,66.4,80.5,30.4);
var SLV = new country("El Salvador",103,2.99,6108590,15.3,125.8,4176,14.3,12,17.7,3.3,3.6,84.1,65,23.4);
var ERI = new country("Eritrea",152,1.09,6233682,1.1,4.5,89,2,1.6,6.2,0,0,66.6,31.9,2);
var EST = new country("Estonia",24,6.81,1266375,35.1,139,24378,75.3,70.8,76.5,27.1,42,99.8,103.6,62.7);
var ETH = new country("Ethiopia",150,1.15,93877025,1,16.7,6486,1.8,1.5,1.1,0,0.3,29.8,35.7,5.5);
var FJI = new country("Fiji",88,3.50,896758,15,83.7,8020,29.3,22.1,28,2.7,15.5,95.1,86.5,16.1);
var FIN = new country("Finland",5,8.04,5266114,20.1,166,118445,86.6,84.2,89.4,29.5,87.1,99,107.5,91.6);
var FRA = new country("France",18,7.30,65951611,55.9,105,78590,81.2,75.9,79.6,36.1,44,99,112.6,54.5);
var GAB = new country("Gabon",111,2.47,1640286,2,117.3,46187,8.9,7,8,0.3,0,87.7,58.4,6.6);
var GMB = new country("Gambia",125,1.84,1883051,2.8,89,1709,6.4,5.2,10.9,0,0.5,46.5,54.1,4.1);
var GEO = new country("Georgia",73,4.20,4555911,31,102.3,15796,23.8,23.3,36.6,7.6,20.5,99.7,86.2,28.2);
var DEU = new country("Germany",16,7.39,81147265,63,132.3,74786,89.6,83.3,83,32.5,34.8,99,102.6,46.2);
var GHA = new country("Ghana",117,2.23,25199609,1.1,84.8,225,10.2,4,14.1,0.3,23,66.6,58.1,8.8);
var GRC = new country("Greece",33,6.14,10772967,49.9,106.5,26008,56.9,50.2,53,21.6,31.8,97.2,100.9,89.4);
var GIN = new country("Guinea",148,1.28,11176026,0.2,44,1731,1.8,1.1,1.3,0,0,39.5,38.1,9.5);
var GUY = new country("Guyana",99,3.12,739903,20.2,68.6,11987,9,8,32,2.5,0,99,91,11.9);
var HND = new country("Honduras",107,2.72,8448465,7.9,104,4866,14,10,15.9,0,3.7,83.6,73.5,18.8);
var HKG = new country("Hong Kong",11,7.68,7182724,61.1,209.6,964616,80.8,79.6,74.5,31.5,51.8,99,83,59.7);
var HUN = new country("Hungary",41,5.77,9939470,29.4,117.3,12245,71.8,65.2,59,22.2,13.2,99.4,98.3,61.7);
var ISL = new country("Iceland",4,8.17,315281,58.4,106.1,287139,94.5,92.6,95,33.9,60.7,99,107.2,74.1);
var IND = new country("India",119,2.10,1220800359,2.6,72,5423,6.9,6,10.1,1,1.9,62.8,60.2,16.2);
var IDN = new country("Indonesia",95,3.19,251160124,15.9,97.7,7196,12,7,18,1.1,22.2,92.2,77.2,23.1);
var IRN = new country("Iran",87,3.53,79853900,37.1,74.9,3540,35,22,21,2.4,0,85,83.5,42.8);
var IRL = new country("Ireland",20,7.09,4775982,45.2,108.4,69031,82.3,78.1,76.8,22.1,59.4,99,117.3,61);
var ISR = new country("Israel",27,6.62,7707042,46.3,121.7,11335,79,71,70,23.8,41,99,91,62.5);
var ITA = new country("Italy",29,6.28,61482287,34.6,151.8,60820,66.4,61.6,56.8,22.8,31.3,98.9,99.1,66);
var JAM = new country("Jamaica",89,3.49,2909714,9.9,108.1,23077,25.7,17.8,31.5,3.9,1.5,86.4,92.7,29);
var JPN = new country("Japan",8,7.76,127253075,51.1,102.7,23111,86,84.4,79.5,27.4,93.7,99,101.5,59);
var JOR = new country("Jordan",75,3.95,6482081,7.4,118.2,6337,50.8,35.4,34.9,3.2,4.9,92.2,91.1,41.8);
var KAZ = new country("Kazakhstan",49,5.27,17736896,26.1,142.5,23590,50,48,45,7.5,38.4,99.7,99.6,40.8);
var KEN = new country("Kenya",114,2.32,44037656,0.7,64.8,4544,7.8,6.9,28,0.1,0.3,87,60.2,4);
var KOR = new country("Korea",1,8.56,48955203,59.2,105.4,17170,81.8,96.8,83.8,36.9,105.1,99,97.1,103.9);
var LAO = new country("Lao",120,1.99,6695166,1.7,64.6,2304,6.9,3.4,9,0.7,0.6,72.7,44.7,13.4);
var LVA = new country("Latvia",36,6.06,2178443,23,102.9,44779,64.5,63.6,71.7,20.4,37.6,99.8,95.2,60.1);
var LBN = new country("Lebanon",65,4.48,4131583,21.1,78.6,2257,71.5,61.8,52,5.2,0,89.6,81.4,54);
var LBR = new country("Liberia",149,1.26,3989703,0.1,49.2,573,1.5,1.3,3,0,0.2,59.1,24.4,4.4);
var LTU = new country("Lithuania",35,6.06,3515858,21.9,151.3,57571,63.1,61.8,65.1,22.1,17.2,99.7,98,77.4);
var LUX = new country("Luxembourg",7,7.76,514862,54.1,148.3,89564,92,90.6,90.9,32.9,66.7,99,97.6,10.5);
var MAC = new country("Macao",14,7.51,583003,30.8,206.4,32484,83,75.9,58,24.7,216.1,93.5,92.4,64.9);
var MDG = new country("Madagascar",143,1.44,22599098,0.6,38.3,5679,2.2,2,1.9,0,0.1,64.5,31.1,3.7);
var MWI = new country("Malawi",144,1.42,16777547,1.1,25.1,1421,3,2.5,3.3,0.1,3.1,73.7,32.1,0.7);
var MYS = new country("Malaysia",58,4.82,29628392,14.7,127,10651,64.1,61.4,61,7.4,12.3,92.5,68.3,40.2);
var MDV = new country("Maldives",72,4.30,393988,7.5,165.7,30659,62.9,28.9,34,6.4,17.4,98.4,91.8,0);
var MLI = new country("Mali",145,1.38,15968882,0.7,68.3,4893,3.4,1.4,2,0,0.4,26.2,39.4,5.8);
var MLT = new country("Malta",26,6.69,411277,54.9,124.9,47850,75.5,75.3,69.2,30,32.6,92.4,104.8,33.4);
var MRT = new country("Mauritania",136,1.64,3437610,2,92.7,3890,3.4,2.5,4.5,0.2,0.5,57.5,24.4,4.4);
var MUS = new country("Mauritius",74,4.18,1322238,28.7,99,12714,38.2,36.4,35,8.9,12.4,87.9,89.4,24.9);
var MEX = new country("Mexico",79,3.79,116220947,17.1,82.4,8743,31.9,27.5,36.2,10.6,4.6,93.4,86.9,27);
var MDA = new country("Moldova",62,4.55,3619925,33.3,104.8,91118,41.6,41,38,9.9,3.5,98.5,88,38.1);
var MNG = new country("Mongolia",84,3.63,3226516,6.7,105.1,53576,25.2,9,20,2.8,12.7,97.5,92.9,53.3);
var MAR = new country("Morocco",90,3.46,32649130,11,113.3,7558,39,35,51,1.8,8,56.1,56.1,13.2);
var MOZ = new country("Mozambique",147,1.28,24096669,0.4,32.8,1244,5.3,3.5,4.3,0.1,1,55.1,25.5,1.5);
var MMR = new country("Myanmar",131,1.67,55167330,1.1,2.6,8180,1.8,1.4,1,0.1,0,92,54.3,11);
var NAM = new country("Namibia",109,2.51,2182852,6,105,2349,13,10,12,0.8,3.6,88.5,64,9);
var NPL = new country("Nepal",137,1.63,30430267,2.8,43.8,1531,4.6,3.1,9,0.3,0,59.1,43.5,10.1);
var NLD = new country("Netherlands",6,7.82,16805037,42.8,119,162532,93,93.6,92.3,38.7,49.2,99,120.2,62.7);
var NZL = new country("New Zealand",17,7.34,4365113,42.6,109.2,23706,87.4,83.3,86,25.8,53,99,119.1,82.6);
var NIC = new country("Nicaragua",113,2.44,5788531,4.9,82.2,12857,9,5.6,10.6,1.8,1,78,69.4,19.5);
var NER = new country("Niger",155,0.88,16899327,0.6,27,1005,1.5,1,1.3,0,0,28.7,13.4,1.5);
var NGA = new country("Nigeria",122,1.93,174507539,0.4,58.6,368,9.3,4.6,28.4,0.1,2.8,60.8,44,10.3);
var NOR = new country("Norway",13,7.52,4722701,42.7,116.8,151257,93.6,92.2,94,36.5,24.4,99,110.2,73.8);
var OMN = new country("Oman",53,5.1,3154134,10.1,169,11648,58,38.9,68,1.8,37.8,86.6,100.3,24.5);
var PAK = new country("Pakistan",127,1.75,193238868,3.2,61.6,4752,11,6.7,9,0.4,0.3,55.5,34.2,5.4);
var PAN = new country("Panama",66,4.41,3559408,15.2,203.9,44121,29,20.7,42.7,7.9,14.5,93.6,74.1,44.6);
var PNG = new country("Papua New Guinea",142,1.44,6431902,1.9,34.2,5703,3,2.5,2,0.1,0,60.1,22.7,15.4);
var PRY = new country("Paraguay",97,3.14,6623252,5.6,99.4,9482,22.7,19.3,23.9,1,4.5,94.6,66.9,36.6);
var PER = new country("Peru",86,3.57,29849303,11.1,110.4,9319,25.4,17.7,36.5,3.5,1.4,89.6,91.6,35);
var PHL = new country("Philippines",94,3.19,105720644,7.2,92,12360,15.1,15,29,1.9,3.4,95.4,84.8,28.9);
var POL = new country("Poland",31,6.19,38383809,18.1,128.5,40244,73,66.6,64.9,14.4,48.4,99.5,97,70.5);
var PRT = new country("Portugal",37,6.05,10799270,42.3,114.9,135332,63.1,58,55.3,21,27.4,94.9,106.7,62.2);
var QAT = new country("Qatar",30,6.24,2042444,16.4,123.1,22333,88.3,83.6,86.2,8.7,61,94.7,93.7,10);
var ROU = new country("Romania",52,5.13,21790479,21.9,109.2,114451,52.9,47.4,44,15.4,14.1,97.7,95.1,63.8);
var RUS = new country("Russia",38,6.00,142500482,30.9,179.3,31911,57.1,46,49,12.2,47.9,99.6,88.6,75.9);
var RWA = new country("Rwanda",133,1.66,12012589,0.4,40.6,4414,2,5,7,0,6.4,70.7,32.2,5.5);
var LCA = new country("Santa Lucia",64,4.49,26939583,16.5,191.2,32985,62.8,60.5,47.5,5.7,40.4,86.1,100.6,36.8);
var SAU = new country("Saudi Arabia",47,5.43,13300410,2.7,73.3,2909,6.1,5,17.5,0.7,1.5,49.7,37.4,7.9);
var SEN = new country("Senegal",124,1.85,7243007,37.3,125.4,76761,55.8,43.9,42.2,10.8,34.5,97.8,91.4,49.1);
var SRB = new country("Serbia",48,5.4,90846,32.1,145.7,5867,45,34,43.2,8.9,4.7,91.8,119.2,1.8);
var SYC = new country("Seychelles",70,4.37,5460302,38.9,149.5,547064,86,85,75,25.5,110.9,94.7,74.1,43.8);
var SGP = new country("Singapore",12,7.66,5488339,19.3,109.3,12276,79.4,70.8,74.4,13.6,31.9,99,89.4,54.2);
var SVK = new country("Slovakia",39,5.86,1992690,42.9,106.6,68250,75.1,72.6,72,24.8,29.3,99.7,97.1,86.9);
var SVN = new country("Slovenia",25,6.7,597248,1.5,49.8,3893,4.4,3.5,6,0.4,3.8,82,35.5,16.1);
var SLB = new country("Solomon Islands",123,1.85,48601098,8.2,126.8,18874,19.5,9.8,21,1.8,19.8,88.7,93.8,15.8);
var ZAF = new country("South Africa",91,3.42,47370542,42.3,114.2,64069,72.6,63.9,67.6,23.5,40.9,97.7,119,73.2);
var ESP = new country("Spain",28,6.62,21675648,17.1,87,5224,13.6,8.1,15,1.7,2.3,90.6,87.8,15.5);
var LKA = new country("Sri Lanka",105,2.88,162781,20.4,123,81149,52,44,42,12.1,0,99,96.1,11.3);
var VCT = new country("St. Vincent and the Grenadines",59,4.74,103220,20.8,120.5,637784,58,45,43,12.9,0,99,107.5,18.2);
var SWZ = new country("Swaziland",116,2.24,1403362,4.4,63.7,2347,11.2,9.5,18.1,0.2,0.7,86.9,58.1,4.4);
var SWE = new country("Sweden",2,8.34,9119423,48.7,118.6,244440,91.5,90.6,91,31.8,91.5,99,100.3,70.8);
var CHE = new country("Switzerland",10,7.68,7996026,60.8,130.1,167636,90,88.9,85.2,39.2,36.1,99,95.2,51.5);
var SYR = new country("Syria",96,3.15,22467336,20.9,63.2,3489,40.5,36,22.5,0.6,1,84.2,72.4,15.7);
var TZA = new country("Tanzania",139,1.6,48261942,0.3,55.5,902,4,4.5,12,0,1.2,72.9,27.4,2.1);
var MKD = new country("Macedonia",54,5.05,2087171,20,109.4,17945,64.8,51.6,56.7,13.2,18.7,97.1,82.8,40.4);
var THA = new country("Thailand",92,3.41,67448120,9.7,113.2,10622,24.7,13.4,23.7,5.4,0,93.5,79.2,47.7);
var TGO = new country("Togo",134,1.65,7154237,3.9,50.4,6443,3.8,3,3.5,0.1,0.4,56.9,45.5,5.9);
var TON = new country("Tonga",100,3.12,106322,28.7,52.6,3827,13.7,10.6,25,1.2,0.1,99,101.3,16.1);
var TTO = new country("Trinidad & Tobago",61,4.57,1225225,21.7,135.6,19753,56.3,35,55.2,11.5,1.2,98.7,89.9,11.5);
var TUN = new country("Tunisia",85,3.58,10835873,11.5,116.9,14832,21,16,39.1,5.1,2.4,77.6,90.5,34.4);
var TUR = new country("Turkey",69,4.38,80694485,20.7,88.7,33938,48.5,42.9,42.1,10.3,8.8,90.8,77.6,45.8);
var TKM = new country("Turkmenistan",110,2.49,5113040,10.7,68.8,1567,12.2,6,5,0,0,99.6,85,21.7);
var TUV = new country("Tuvalu",112,2.46,10698,14.7,21.6,1354,23.4,18,30,4.6,0,82,35.5,16.1);
var UGA = new country("Uganda",132,1.67,34758809,1.3,48.4,1752,4,4.5,13,0.3,2.8,71.4,28.1,4.2);
var UKR = new country("Ukraine",67,4.4,44573205,28.1,123,9835,30.7,26,30.6,7,4.4,99.7,95.6,79.5);
var ARE = new country("United Arab Emirates",45,5.64,5473972,23.1,148.6,27609,77,67,70,11,21.7,90,92.3,30.4);
var GBR = new country("United Kingdom",9,7.75,63395574,53.2,130.8,166073,84,85.1,82,32.7,62.3,99,101.8,58.5);
var USA = new country("United States of America",15,7.48,316668567,47.9,105.9,47174,77.2,76,77.9,28.7,65.5,99,96,94.8);
var URY = new country("Uruguay",50,5.24,3324460,28.5,140.8,32078,62,39.4,51.4,13.5,9,98.3,90.2,63.3);
var UZB = new country("Uzbekistan",102,3.05,28661637,6.9,91.6,579,6.3,7.8,30.2,0.5,18.4,99.3,105.7,8.9);
var VEN = new country("Venezuela",77,3.92,28459085,24.9,97.8,8108,19,16,40.2,0.9,4.2,95.2,82.5,78.1);
var VNM = new country("Vietnam",81,3.68,92477857,11.5,143.4,9998,16,14,35.1,4.3,18,92.8,77.2,22.3);
var YEM = new country("Yemen",126,1.76,25408288,4.3,47,1082,4.6,4,14.9,0.4,0.1,62.4,44.1,10.2);
var ZMB = new country("Zambia",135,1.65,14222233,0.6,60.6,452,2.7,2.4,11.5,0.1,0.4,70.9,45.5,2.4);
var ZWE = new country("Zimbabwe",115,2.24,13182908,2.8,72.1,1748,5.9,4,15.7,0.3,14.9,91.9,41,6.2);

$(function() {
    var avail_countries = [   

        "Albania",
        "Algeria",
        "Antigua & Barbuda",
        "Argentina",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahrain",
        "Barbados",
        "Belarus",
        "Belgium",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Democratic Republic of the Congo",
        "Costa Rica",
        "Côte d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Guinea",
        "Guyana",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Korea",
        "Lao",
        "Latvia",
        "Lebanon",
        "Liberia",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Santa Lucia",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "South Africa",
        "Spain",
        "Sri Lanka",
        "St. Vincent and the Grenadines",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tanzania",
        "Macedonia",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad & Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"

    ];

    $( "#tags" ).autocomplete({
      source: avail_countries
    });
    $( "#tags" ).autocomplete({ minLength: 3 });
});

$( "#tags" ).on( "autocompleteselect", function( e, ui ) {
    lastCountryString = countryData[ui.item.value].id;
    $("#wha_country").text("You are improving: " + myData[lastCountryString].data.nam);

} );


var countryData = {


        "Albania" : {
            "id" : "ALB"
        },
        "Algeria" : {
            "id" : "DZA"
        },
        "Antigua & Barbuda" : {
            "id" : "ATG"
        },
        "Argentina" : {
            "id" : "ARG"
        },
        "Australia" : {
            "id" : "AUS"
        },
        "Austria" : {
            "id" : "AUT"
        },
        "Azerbaijan" : {
            "id" : "AZE"
        },
        "Bahrain" : {
            "id" : "BHR"
        },
        "Barbados" : {
            "id" : "BRB"
        },
        "Belarus" : {
            "id" : "BLR"
        },
        "Belgium" : {
            "id" : "BEL"
        },
        "Benin" : {
            "id" : "BEN"
        },
        "Bhutan" : {
            "id" : "BTN"
        },
        "Bolivia" : {
            "id" : "BOL"
        },
        "Bosnia and Herzegovina" : {
            "id" : "BIH"
        },
        "Botswana" : {
            "id" : "BWA"
        },
        "Brazil" : {
            "id" : "BRA"
        },
        "Brunei Darussalam" : {
            "id" : "BRN"
        },
        "Bulgaria" : {
            "id" : "BGR"
        },
        "Burkina Faso" : {
            "id" : "BFA"
        },
        "Cambodia" : {
            "id" : "KHM"
        },
        "Cameroon" : {
            "id" : "CMR"
        },
        "Canada" : {
            "id" : "CAN"
        },
        "Cape Verde" : {
            "id" : "CPV"
        },
        "Central African Republic" : {
            "id" : "CAF"
        },
        "Chad" : {
            "id" : "TCD"
        },
        "Chile" : {
            "id" : "CHL"
        },
        "China" : {
            "id" : "CHN"
        },
        "Colombia" : {
            "id" : "COL"
        },
        "Comoros" : {
            "id" : "COM"
        },
        "Congo" : {
            "id" : "COG"
        },
        "Democratic Republic of the Congo" : {
            "id" : "COD"
        },
        "Costa Rica" : {
            "id" : "CRI"
        },
        "Côte d'Ivoire" : {
            "id" : "CIV"
        },
        "Croatia" : {
            "id" : "HRV"
        },
        "Cuba" : {
            "id" : "CUB"
        },
        "Cyprus" : {
            "id" : "CYP"
        },
        "Czech Republic" : {
            "id" : "CZE"
        },
        "Denmark" : {
            "id" : "DNK"
        },
        "Djibouti" : {
            "id" : "DJI"
        },
        "Dominican Republic" : {
            "id" : "DOM"
        },
        "Ecuador" : {
            "id" : "ECU"
        },
        "Egypt" : {
            "id" : "EGY"
        },
        "El Salvador" : {
            "id" : "SLV"
        },
        "Eritrea" : {
            "id" : "ERI"
        },
        "Estonia" : {
            "id" : "EST"
        },
        "Ethiopia" : {
            "id" : "ETH"
        },
        "Fiji" : {
            "id" : "FJI"
        },
        "Finland" : {
            "id" : "FIN"
        },
        "France" : {
            "id" : "FRA"
        },
        "Gabon" : {
            "id" : "GAB"
        },
        "Gambia" : {
            "id" : "GMB"
        },
        "Georgia" : {
            "id" : "GEO"
        },
        "Germany" : {
            "id" : "DEU"
        },
        "Ghana" : {
            "id" : "GHA"
        },
        "Greece" : {
            "id" : "GRC"
        },
        "Guinea" : {
            "id" : "GIN"
        },
        "Guyana" : {
            "id" : "GUY"
        },
        "Honduras" : {
            "id" : "HND"
        },
        "Hong Kong" : {
            "id" : "HKG"
        },
        "Hungary" : {
            "id" : "HUN"
        },
        "Iceland" : {
            "id" : "ISL"
        },
        "India" : {
            "id" : "IND"
        },
        "Indonesia" : {
            "id" : "IDN"
        },
        "Iran" : {
            "id" : "IRN"
        },
        "Ireland" : {
            "id" : "IRL"
        },
        "Israel" : {
            "id" : "ISR"
        },
        "Italy" : {
            "id" : "ITA"
        },
        "Jamaica" : {
            "id" : "JAM"
        },
        "Japan" : {
            "id" : "JPN"
        },
        "Jordan" : {
            "id" : "JOR"
        },
        "Kazakhstan" : {
            "id" : "KAZ"
        },
        "Kenya" : {
            "id" : "KEN"
        },
        "Korea" : {
            "id" : "KOR"
        },
        "Lao" : {
            "id" : "LAO"
        },
        "Latvia" : {
            "id" : "LVA"
        },
        "Lebanon" : {
            "id" : "LBN"
        },
        "Liberia" : {
            "id" : "LBR"
        },
        "Lithuania" : {
            "id" : "LTU"
        },
        "Luxembourg" : {
            "id" : "LUX"
        },
        "Macao" : {
            "id" : "MAC"
        },
        "Macedonia" : {
            "id" : "MKD"
        },
        "Madagascar" : {
            "id" : "MDG"
        },
        "Malawi" : {
            "id" : "MWI"
        },
        "Malaysia" : {
            "id" : "MYS"
        },
        "Maldives" : {
            "id" : "MDV"
        },
        "Mali" : {
            "id" : "MLI"
        },
        "Malta" : {
            "id" : "MLT"
        },
        "Mauritania" : {
            "id" : "MRT"
        },
        "Mauritius" : {
            "id" : "MUS"
        },
        "Mexico" : {
            "id" : "MEX"
        },
        "Moldova" : {
            "id" : "MDA"
        },
        "Mongolia" : {
            "id" : "MNG"
        },
        "Morocco" : {
            "id" : "MAR"
        },
        "Mozambique" : {
            "id" : "MOZ"
        },
        "Myanmar" : {
            "id" : "MMR"
        },
        "Namibia" : {
            "id" : "NAM"
        },
        "Nepal" : {
            "id" : "NPL"
        },
        "Netherlands" : {
            "id" : "NLD"
        },
        "New Zealand" : {
            "id" : "NZL"
        },
        "Nicaragua" : {
            "id" : "NIC"
        },
        "Niger" : {
            "id" : "NER"
        },
        "Nigeria" : {
            "id" : "NGA"
        },
        "Norway" : {
            "id" : "NOR"
        },
        "Oman" : {
            "id" : "OMN"
        },
        "Pakistan" : {
            "id" : "PAK"
        },
        "Panama" : {
            "id" : "PAN"
        },
        "Papua New Guinea" : {
            "id" : "PNG"
        },
        "Paraguay" : {
            "id" : "PRY"
        },
        "Peru" : {
            "id" : "PER"
        },
        "Philippines" : {
            "id" : "PHL"
        },
        "Poland" : {
            "id" : "POL"
        },
        "Portugal" : {
            "id" : "PRT"
        },
        "Qatar" : {
            "id" : "QAT"
        },
        "Romania" : {
            "id" : "ROU"
        },
        "Russia" : {
            "id" : "RUS"
        },
        "Rwanda" : {
            "id" : "RWA"
        },
        "Santa Lucia" : {
            "id" : "LCA"
        },
        "Saudi Arabia" : {
            "id" : "SAU"
        },
        "Senegal" : {
            "id" : "SEN"
        },
        "Serbia" : {
            "id" : "SRB"
        },
        "Seychelles" : {
            "id" : "SYC"
        },
        "Singapore" : {
            "id" : "SGP"
        },
        "Slovakia" : {
            "id" : "SVK"
        },
        "Slovenia" : {
            "id" : "SVN"
        },
        "Solomon Islands" : {
            "id" : "SLB"
        },
        "South Africa" : {
            "id" : "ZAF"
        },
        "Spain" : {
            "id" : "ESP"
        },
        "Sri Lanka" : {
            "id" : "LKA"
        },
        "St. Vincent and the Grenadines" : {
            "id" : "VCT"
        },
        "Swaziland" : {
            "id" : "SWZ"
        },
        "Sweden" : {
            "id" : "SWE"
        },
        "Switzerland" : {
            "id" : "CHE"
        },
        "Syria" : {
            "id" : "SYR"
        },
        "Tanzania" : {
            "id" : "TZA"
        },
        "Thailand" : {
            "id" : "THA"
        },
        "Togo" : {
            "id" : "TGO"
        },
        "Tonga" : {
            "id" : "TON"
        },
        "Trinidad & Tobago" : {
            "id" : "TTO"
        },
        "Tunisia" : {
            "id" : "TUN"
        },
        "Turkey" : {
            "id" : "TUR"
        },
        "Turkmenistan" : {
            "id" : "TKM"
        },
        "Tuvalu" : {
            "id" : "TUV"
        },
        "Uganda" : {
            "id" : "UGA"
        },
        "Ukraine" : {
            "id" : "UKR"
        },
        "United Arab Emirates" : {
            "id" : "ARE"
        },
        "United Kingdom" : {
            "id" : "GBR"
        },
        "United States of America" : {
            "id" : "USA"
        },
        "Uruguay" : {
            "id" : "URY"
        },
        "Uzbekistan" : {
            "id" : "UZB"
        },
        "Venezuela" : {
            "id" : "VEN"
        },
        "Vietnam" : {
            "id" : "VNM"
        },
        "Yemen" : {
            "id" : "YEM"
        },
        "Zambia" : {
            "id" : "ZMB"
        },
        "Zimbabwe"  : {
            "id" : "ZWE"
        }

}

var myData = {
        "AFG": {
            "cid" : "AFG",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ALB": {
            "cid" : "ALB",
            "fillKey": fill(ALB.idi),
            "rank": ALB.rank,
            "idi": ALB.idi,
            "data": ALB,
            "original": 3.78
        },
        "DZA": {
            "cid" : "DZA",
            "fillKey": fill(DZA.idi),
            "rank": DZA.rank,
            "idi": DZA.idi,
            "data": DZA,
            "original": 2.98
        },
        "ASM": {
            "cid" : "ASM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "AND": {
            "cid" : "AND",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "AGO": {
            "cid" : "AGO",
            "fillKey": 'default',
            "rank": "No Data",
            "idi" : "No Data",
            "data": "No Data"
        },
        "AIA": {
            "cid" : "AIA",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ATA": {
            "cid" : "ATA",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ATG": {
            "cid" : "ATG",
            "fillKey": fill(ATG.idi),
            "rank": ATG.rank,
            "idi": ATG.idi,
            "data": ATG,
            "original": 5.74
        },
        "ARG": {
            "cid" : "ARG",
            "fillKey": fill(ARG.idi),
            "rank": ARG.rank,
            "idi": ARG.idi,
            "data": ARG,
            "original": 5.00
        },
        "ARM": {
            "cid" : "ARM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data",
        },
        "ABW": {
            "cid" : "ABW",
            "fillKey": 'default',
            "rank": "No Data",
            "idi" : "No Data",
            "data": "No Data"
        },
        "AUS": {
            "cid" : "AUS",
            "fillKey": fill(AUS.idi),
            "rank": AUS.rank,
            "idi": AUS.idi,
            "data": AUS,
            "original": 7.05
        },
        "AUT": {
            "cid" : "AUT",
            "fillKey": fill(AUT.idi),
            "rank": AUT.rank,
            "idi": AUT.idi,
            "data": AUT,
            "original": 7.10
        },
        "AZE": {
            "cid" : "AZE",
            "fillKey": fill(AZE.idi),
            "rank": AZE.rank,
            "idi": AZE.idi,
            "data": AZE,
            "original": 4.39
        },
        "BHS": {
            "cid" : "BHS",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "BHR": {
            "cid" : "BHR",
            "fillKey": fill(BHR.idi),
            "rank": BHR.rank,
            "idi": BHR.idi,
            "data": BHR,
            "original": 5.85
        },
        "BGD": {
            "cid" : "BGD",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "BRB": {
            "cid" : "BRB",
            "fillKey": fill(BRB.idi),
            "rank": BRB.rank,
            "idi": BRB.idi,
            "data": BRB,
            "original": 6.07
        },
        "BLR": {
            "cid" : "BLR",
            "fillKey": fill(BLR.idi),
            "rank": BLR.rank,
            "idi": BLR.idi,
            "data": BLR,
            "original": 5.57
        },
        "BEL": {
            "cid" : "BEL",
            "fillKey": fill(BEL.idi),
            "rank": BEL.rank,
            "idi": BEL.idi,
            "data": BEL,
            "original": 6.89
        },
        "BLZ": {
            "cid" : "BLZ",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "BEN": {
            "cid" : "BEN",
            "fillKey": fill(BEN.idi),
            "rank": BEN.rank,
            "idi": BEN.idi,
            "data": BEN,
            "original": 1.55
        },
        "BMU": {
            "cid" : "BMU",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "BTN": {
            "cid" : "BTN",
            "fillKey": fill(BTN.idi),
            "rank": BTN.rank,
            "idi": BTN.idi,
            "data": BTN,
            "original": 2.13
        },
        "BOL": {
            "cid" : "BOL",
            "fillKey": fill(BOL.idi),
            "rank": BOL.rank,
            "idi": BOL.idi,
            "data": BOL,
            "original": 3.13
        },
        "BIH": {
            "cid" : "BIH",
            "fillKey": fill(BIH.idi),
            "rank": BIH.rank,
            "idi": BIH.rank,
            "data": BIH,
            "original": 4.53
        },
        "BWA": {
            "cid" : "BWA",
            "fillKey": fill(BWA.idi),
            "rank": BWA.rank,
            "idi": BWA.idi,
            "data": BWA,
            "original": 2.67
        },
        "BVT": {
            "cid" : "BVT",
            "fillKey": 'default',
            "rank": "No data",
            "idi": "No data",
            "data": "No Data"
        },
        "BRA": {
            "cid" : "BRA",
            "fillKey": fill(BRA.idi),
            "rank": BRA.rank,
            "idi": BRA.idi,
            "data": BRA,
            "original": 4.72
        },
        "IOT": {
            "cid" : "IOT",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "BRN": {
            "cid" : "BRN",
            "fillKey": fill(BRN.idi),
            "rank": BRN.rank,
            "idi": BRN.idi,
            "data": BRN,
            "original": 4.95
        },
        "BGR": {
            "cid" : "BGR",
            "fillKey": fill(BGR.idi),
            "rank": BGR.rank,
            "idi": BGR.idi,
            "data": BGR,
            "original": 5.20
        },
        "BFA": {
            "cid" : "BFA",
            "fillKey": fill(BFA.idi),
            "rank": BFA.rank,
            "idi": BFA.idi,
            "data": BFA,
            "original": 1.14
        },
        "BDI": {
            "cid" : "BDI",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "KHM": {
            "cid" : "KHM",
            "fillKey": fill(KHM.idi),
            "rank": KHM.rank,
            "idi": KHM.idi,
            "data": KHM,
            "original": 1.96
        },
        "CMR": {
            "cid" : "CMR",
            "fillKey": fill(CMR.idi),
            "rank": CMR.rank,
            "idi": CMR.idi,
            "data": CMR,
            "original": 1.60
        },
        "CAN": {
            "cid" : "CAN",
            "fillKey": fill(CAN.idi),
            "rank": CAN.rank,
            "idi": CAN.idi,
            "data": CAN,
            "original": 7.04
        },
        "CPV": {
            "cid" : "CPV",
            "fillKey": fill(CPV.idi),
            "rank": CPV.rank,
            "idi": CPV.idi,
            "data": CPV,
            "original": 3.08
        },
        "CYM": {
            "cid" : "CYM",
            "fillKey": 'default',
            "rank": "No Data",
            "data": "No Data"
        },
        "CAF": {
            "cid" : "CAF",
            "fillKey": fill(CAF.idi),
            "rank": CAF.rank,
            "idi": CAF.idi,
            "data": CAF,
            "original": 0.97
        },
        "TCD": {
            "cid" : "TCD",
            "fillKey": fill(TCD.idi),
            "rank": TCD.rank,
            "idi": TCD.idi,
            "data": TCD,
            "original": 0.94
        },
        "CHL": {
            "cid" : "CHL",
            "fillKey": fill(CHL.idi),
            "rank": CHL.rank,
            "idi": CHL.idi,
            "data": CHL,
            "original": 5.01
        },
        "CHN": {
            "cid" : "CHN",
            "fillKey": fill(CHN.idi),
            "rank": CHN.rank,
            "idi": CHN.idi,
            "data": CHN,
            "original": 3.88
        },
        "CXR": {
            "cid" : "CXR",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "CCK": {
            "cid" : "CCK",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "COL": {
            "cid" : "COL",
            "fillKey": fill(COL.idi),
            "rank": COL.rank,
            "idi": COL.idi,
            "data": COL,
            "original": 3.93
        },
        "COM": {
            "cid" : "COM",
            "fillKey": fill(COM.idi),
            "rank": COM.rank,
            "idi": COM.idi,
            "data": COM,
            "original": 1.68
        },
        "COG": {
            "cid" : "COG",
            "fillKey": fill(COG.idi),
            "rank": COG.rank,
            "idi": COG.idi,
            "data": COG,
            "original": 1.30
        },
        "COD": {
            "cid" : "COD",
            "fillKey": fill(COD.idi),
            "rank": COD.rank,
            "idi": COD.idi,
            "data": COD,
            "original": 1.60
        },
        "COK": {
            "cid" : "COK",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "CRI": {
            "cid" : "CRI",
            "fillKey": fill(CRI.idi),
            "rank": CRI.rank,
            "idi": CRI.idi,
            "data": CRI,
            "original": 4.37
        },
        "CIV": {
            "cid" : "CIV",
            "fillKey": fill(CIV.idi),
            "rank": CIV.rank,
            "idi": CIV.idi,
            "data": CIV,
            "original": 1.69
        },
        "HRV": {
            "cid" : "HRV",
            "fillKey": fill(HRV.idi),
            "rank": HRV.rank,
            "idi": HRV.idi,
            "data": HRV,
            "original": 5.75
        },
        "CUB": {
            "cid" : "CUB",
            "fillKey": fill(CUB.idi),
            "rank": CUB.rank,
            "idi": CUB.idi,
            "data": CUB,
            "original": 2.77
        },
        "CYP": {
            "cid" : "CYP",
            "fillKey": fill(CYP.idi),
            "rank": CYP.rank,
            "idi": CYP.idi,
            "data": CYP,
            "original": 5.73
        },
        "CZE": {
            "cid" : "CZE",
            "fillKey": fill(CZE.idi),
            "rank": CZE.rank,
            "idi": CZE.idi,
            "data": CZE,
            "original": 6.17
        },
        "DNK": {
            "cid" : "DNK",
            "fillKey": fill(DNK.idi),
            "rank": DNK.rank,
            "idi": DNK.idi,
            "data": DNK,
            "original": 8.29
        },
        "DJI": {
            "cid" : "DJI",
            "fillKey": fill(DJI.idi),
            "rank": DJI.rank,
            "idi": DJI.idi,
            "data": DJI,
            "original": 1.74
        },
        "DMA": {
            "cid" : "DMA",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "DOM": {
            "cid" : "DOM",
            "fillKey": fill(DOM.idi),
            "rank": DOM.rank,
            "idi": DOM.idi,
            "data": DOM,
            "original": 3.34
        },
        "TMP": {
            "cid" : "TMP",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ECU": {
            "cid" : "ECU",
            "fillKey": fill(ECU.idi),
            "rank": ECU.rank,
            "idi": ECU.idi,
            "data": ECU,
            "original": 3.68
        },
        "EGY": {
            "cid" : "EGY",
            "fillKey": fill(EGY.idi),
            "rank": EGY.rank,
            "idi": EGY.idi,
            "data": EGY,
            "original": 3.66
        },
        "SLV": {
            "cid" : "SLV",
            "fillKey": fill(SLV.idi),
            "rank": SLV.rank,
            "idi": SLV.idi,
            "data": SLV,
            "original": 2.99
        },
        "GNQ": {
            "cid" : "GNQ",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ERI": {
            "cid" : "ERI",
            "fillKey": fill(ERI.idi),
            "rank": ERI.rank,
            "idi": ERI.idi,
            "data": ERI,
            "original": 1.09
        },
        "EST": {
            "cid" : "EST",
            "fillKey": fill(EST.idi),
            "rank": EST.rank,
            "idi": EST.idi,
            "data": EST,
            "original": 6.81
        },
        "ETH": {
            "cid" : "ETH",
            "fillKey": fill(ETH.idi),
            "rank": ETH.rank,
            "idi": ETH.idi,
            "data": ETH,
            "original": 1.15
        },
        "FLK": {
            "cid" : "FLK",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "FRO": {
            "cid" : "FRO",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "FJI": {
            "cid" : "FJI",
            "fillKey": fill(FJI.idi),
            "rank": FJI.rank,
            "idi": FJI.idi,
            "data": FJI,
            "original": 3.50
        },
        "FIN": {
            "cid" : "FIN",
            "fillKey": fill(FIN.idi),
            "rank": FIN.rank,
            "idi": FIN.idi,
            "data": FIN,
            "original": 8.04
        },
        "FRA": {
            "cid" : "FRA",
            "fillKey": fill(FRA.idi),
            "rank": FRA.rank,
            "idi": FRA.idi,
            "data": FRA,
            "original": 7.30
        },
        "FXX": {
            "cid" : "FXX",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GUF": {
            "cid" : "GUF",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "PYF": {
            "cid" : "PYF",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ATF": {
            "cid" : "ATF",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GAB": {
            "cid" : "GAB",
            "fillKey": fill(GAB.idi),
            "rank": GAB.rank,
            "idi": GAB.idi,
            "data": GAB,
            "original": 2.47
        },
        "GMB": {
            "cid" : "GMB",
            "fillKey": fill(GMB.idi),
            "rank": GMB.rank,
            "idi": GMB.idi,
            "data": GMB,
            "original": 1.84
        },
        "GEO": {
            "cid" : "GEO",
            "fillKey": fill(GEO.idi),
            "rank": GEO.rank,
            "idi": GEO.idi,
            "data": GEO,
            "original": 4.20
        },
        "DEU": {
            "cid" : "DEU",
            "fillKey": fill(DEU.idi),
            "rank": DEU.rank,
            "idi": DEU.idi,
            "data": DEU,
            "original": 7.39
        },
        "GHA": {
            "cid" : "GHA",
            "fillKey": fill(GHA.idi),
            "rank": GHA.rank,
            "idi": GHA.idi,
            "data": GHA,
            "original": 2.23
        },
        "GIB": {
            "cid" : "GIB",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GRC": {
            "cid" : "GRC",
            "fillKey": fill(GRC.idi),
            "rank": GRC.rank,
            "idi": GRC.idi,
            "data": GRC,
            "original": 6.14
        },
        "GRL": {
            "cid" : "GRL",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GRD": {
            "cid" : "GRD",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GLP": {
            "cid" : "GLP",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GUM": {
            "cid" : "GUM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GTM": {
            "cid" : "GTM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GIN": {
            "cid" : "GIN",
            "fillKey": fill(GIN.idi),
            "rank": GIN.rank,
            "idi": GIN.idi,
            "data": GIN,
            "original": 1.28
        },
        "GNB": {
            "cid" : "GNB",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "GUY": {
            "cid" : "GUY",
            "fillKey": fill(GUY.idi),
            "rank": GUY.rank,
            "idi": GUY.idi,
            "data": GUY,
            "original": 3.12
        },
        "HTI": {
            "cid" : "HTI",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "HMD": {
            "cid" : "HMD",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "VAT": {
            "cid" : "VAT",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "HND": {
            "cid" : "HND",
            "fillKey": fill(HND.idi),
            "rank": HND.rank,
            "idi": HND.idi,
            "data": HND,
            "original": 2.72
        },
        "HKG": {
            "cid" : "HKG",
            "fillKey": fill(HKG.idi),
            "rank": HKG.rank,
            "idi": HKG.idi,
            "data": HKG,
            "original": 7.68
        },
        "HUN": {
            "cid" : "HUN",
            "fillKey": fill(HUN.idi),
            "rank": HUN.rank,
            "idi": HUN.idi,
            "data": HUN,
            "original": 5.77
        },
        "ISL": {
            "cid" : "ISL",
            "fillKey": fill(ISL.idi),
            "rank": ISL.rank,
            "idi": ISL.idi,
            "data": ISL,
            "original": 8.17
        },
        "IND": {
            "cid" : "IND",
            "fillKey": fill(IND.idi),
            "rank": IND.rank,
            "idi": IND.idi,
            "data": IND,
            "original": 2.10
        },
        "IDN": {
            "cid" : "IDN",
            "fillKey": fill(IDN.idi),
            "rank": IDN.rank,
            "idi": IDN.idi,
            "data": IDN,
            "original": 3.19
        },
        "IRN": {
            "cid" : "IRN",
            "fillKey": fill(IRN.idi),
            "rank": IRN.rank,
            "idi": IRN.idi,
            "data": IRN,
            "original": 3.53
        },
        "IRQ": {
            "cid" : "IRQ",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "IRL": {
            "cid" : "IRL",
            "fillKey": fill(IRL.idi),
            "rank": IRL.rank,
            "idi": IRL.idi,
            "data": IRL,
            "original": 7.09
        },
        "ISR": {
            "cid" : "ISR",
            "fillKey": fill(ISR.idi),
            "rank": ISR.rank,
            "idi": ISR.idi,
            "data": ISR,
            "original": 6.62
        },
        "ITA": {
            "cid" : "ITA",
            "fillKey": fill(ITA.idi),
            "rank": ITA.rank,
            "idi": ITA.idi,
            "data": ITA,
            "original": 6.28
        },
        "JAM": {
            "cid" : "JAM",
            "fillKey": fill(JAM.idi),
            "rank": JAM.rank,
            "idi": JAM.idi,
            "data": JAM,
            "original": 3.49
        },
        "JPN": {
            "cid" : "JPN",
            "fillKey": fill(JPN.idi),
            "rank": JPN.rank,
            "idi": JPN.idi,
            "data": JPN,
            "original": 7.76
        },
        "JOR": {
            "cid" : "JOR",
            "fillKey": fill(JOR.idi),
            "rank": JOR.rank,
            "idi": JOR.idi,
            "data": JOR,
            "original": 3.95
        },
        "KAZ": {
            "cid" : "KAZ",
            "fillKey": fill(KAZ.idi),
            "rank": KAZ.rank,
            "idi": KAZ.idi,
            "data": KAZ,
            "original": 5.27
        },
        "KEN": {
            "cid" : "KEN",
            "fillKey": fill(KEN.idi),
            "rank": KEN.rank,
            "idi": KEN.idi,
            "data": KEN,
            "original": 2.32
        },
        "KIR": {
            "cid" : "KIR",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "PRK": {
            "cid" : "PRK",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "KOR": {
            "cid" : "KOR",
            "fillKey": fill(KOR.idi),
            "rank": KOR.rank,
            "idi": KOR.idi,
            "data": KOR,
            "original": 8.56
        },
        "KWT": {
            "cid" : "KWT",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "KGZ": {
            "cid" : "KGZ",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "LAO": {
            "cid" : "LAO",
            "fillKey": fill(LAO.idi),
            "rank": LAO.rank,
            "idi": LAO.idi,
            "data": LAO,
            "original": 1.99
        },
        "LVA": {
            "cid" : "LVA",
            "fillKey": fill(LVA.idi),
            "rank": LVA.rank,
            "idi": LVA.idi,
            "data": LVA,
            "original": 6.06
        },
        "LBN": {
            "cid" : "LBN",
            "fillKey": fill(LBN.idi),
            "rank": LBN.rank,
            "idi": LBN.idi,
            "data": LBN,
            "original": 4.48
        },
        "LSO": {
            "cid" : "LSO",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "LBR": {
            "cid" : "LBR",
            "fillKey": fill(LBR.idi),
            "rank": LBR.rank,
            "idi": LBR.idi,
            "data": LBR,
            "original": 1.26
        },
        "LBY": {
            "cid" : "LBY",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "LIE": {
            "cid" : "LIE",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "LTU": {
            "cid" : "LTU",
            "fillKey": fill(LTU.idi),
            "rank": LTU.rank,
            "idi": LTU.idi,
            "data": LTU,
            "original": 6.06
        },
        "LUX": {
            "cid" : "LUX",
            "fillKey": fill(LUX.idi),
            "rank": LUX.rank,
            "idi": LUX.idi,
            "data": LUX,
            "original": 7.76
        },
        "MAC": {
            "cid" : "MAC",
            "fillKey": fill(MAC.idi),
            "rank": MAC.rank,
            "idi": MAC.idi,
            "data": MAC,
            "original": 7.51
        },
        "MKD": {
            "cid" : "MKD",
            "fillKey": fill(MKD.idi),
            "rank": MKD.rank,
            "idi": MKD.idi,
            "data": MKD,
            "original": 5.05
        },
        "MDG": {
            "cid" : "MDG",
            "fillKey": fill(MDG.idi),
            "rank": MDG.rank,
            "idi": MDG.idi,
            "data": MDG,
            "original": 1.44
        },
        "MWI": {
            "cid" : "MWI",
            "fillKey": fill(MWI.idi),
            "rank": MWI.rank,
            "idi": MWI.idi,
            "data": MWI,
            "original": 1.42
        },
        "MYS": {
            "cid" : "MYS",
            "fillKey": fill(MYS.idi),
            "rank": MYS.rank,
            "idi": MYS.idi,
            "data": MYS,
            "original": 4.82
        },
        "MDV": {
            "cid" : "MDV",
            "fillKey": fill(MDV.idi),
            "rank": MDV.rank,
            "idi": MDV.idi,
            "data": MDV,
            "original": 4.30
        },
        "MLI": {
            "cid" : "MLI",
            "fillKey": fill(MLI.idi),
            "rank": MLI.rank,
            "idi": MLI.idi,
            "data": MLI,
            "original": 1.38
        },
        "MLT": {
            "cid" : "MLT",
            "fillKey": fill(MLT.idi),
            "rank": MLT.rank,
            "idi": MLT.idi,
            "data": MLT,
            "original": 6.69
        },
        "MHL": {
            "cid" : "MHL",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MTQ": {
            "cid" : "MTQ",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MRT": {
            "cid" : "MRT",
            "fillKey": fill(MRT.idi),
            "rank": MRT.rank,
            "idi": MRT.idi,
            "data": MRT,
            "original": 1.64
        },
        "MUS": {
            "cid" : "MUS",
            "fillKey": fill(MUS.idi),
            "rank": MUS.rank,
            "idi": MUS.idi,
            "data": MUS,
            "original": 4.18
        },
        "MYT": {
            "cid" : "MYT",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MEX": {
            "cid" : "MEX",
            "fillKey": fill(MEX.idi),
            "rank": MEX.rank,
            "idi": MEX.idi,
            "data": MEX,
            "original": 3.79
        },
        "FSM": {
            "cid" : "FSM",
            "fillKey": 'default',   
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MDA": {
            "cid" : "MDA",
            "fillKey": fill(MDA.idi),
            "rank": MDA.rank,
            "idi": MDA.idi,
            "data": MDA,
            "original": 4.55
        },
        "MCO": {
            "cid" : "MCO",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MNG": {
            "cid" : "MNG",
            "fillKey": fill(MNG.idi),
            "rank": MNG.rank,
            "idi": MNG.idi,
            "data": MNG,
            "original": 3.63
        },
        "MNE": {
            "cid" : "MNE",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MSR": {
            "cid" : "MSR",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MAR": {
            "cid" : "MAR",
            "fillKey": fill(MAR.idi),
            "rank": MAR.rank,
            "idi": MAR.idi,
            "data": MAR,
            "original": 3.46
        },
        "MOZ": {
            "cid" : "MOZ",
            "fillKey": fill(MOZ.idi),
            "rank": MOZ.rank,
            "idi": MOZ.idi,
            "data": MOZ,
            "original": 1.28
        },
        "MMR": {
            "cid" : "MMR",
            "fillKey": fill(MMR.idi),
            "rank": MMR.rank,
            "idi": MMR.idi,
            "data": MMR,
            "original": 1.67
        },
        "NAM": {
            "cid" : "NAM",
            "fillKey": fill(NAM.idi),
            "rank": NAM.rank,
            "idi": NAM.idi,
            "data": NAM,
            "original": 2.51
        },
        "NRU": {
            "cid" : "NRU",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "NPL": {
            "cid" : "NPL",
            "fillKey": fill(NPL.idi),
            "rank": NPL.rank,
            "idi": NPL.idi,
            "data": NPL,
            "original": 1.63
        },
        "NLD": {
            "cid" : "NLD",
            "fillKey": fill(NLD.idi),
            "rank": NLD.rank,
            "idi": NLD.idi,
            "data": NLD,
            "original": 7.82
        },
        "ANT": {
            "cid" : "ANT",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "NCL": {
            "cid" : "NCL",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "NZL": {
            "cid" : "NZL",
            "fillKey": fill(NZL.idi),
            "rank": NZL.rank,
            "idi": NZL.idi,
            "data": NZL,
            "original": 7.34
        },
        "NIC": {
            "cid" : "NIC",
            "fillKey": fill(NIC.idi),
            "rank": NIC.rank,
            "idi": NIC.idi,
            "data": NIC,
            "original": 2.44
        },
        "NER": {
            "cid" : "NER",
            "fillKey": fill(NER.idi),
            "rank": NER.rank,
            "idi": NER.idi,
            "data": NER,
            "original": 0.88
        },
        "NGA": {
            "cid" : "NGA",
            "fillKey": fill(NGA.idi),
            "rank": NGA.rank,
            "idi": NGA.idi,
            "data": NGA,
            "original": 1.93
        },
        "NIU": {
            "cid" : "NIU",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "NFK": {
            "cid" : "NFK",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "MNP": {
            "cid" : "MNP",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "NOR": {
            "cid" : "NOR",
            "fillKey": fill(NOR.idi),
            "rank": NOR.rank,
            "idi": NOR.idi,
            "data": NOR,
            "original": 7.52
        },
        "OMN": {
            "cid" : "OMN",
            "fillKey": fill(OMN.idi),
            "rank": OMN.rank,
            "idi": OMN.idi,
            "data": OMN,
            "original": 5.10
        },
        "PAK": {
            "cid" : "PAK",
            "fillKey": fill(PAK.idi),
            "rank": PAK.rank,
            "idi": PAK.idi,
            "data": PAK,
            "original": 1.75
        },
        "PLW": {
            "cid" : "PLW",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "PAN": {
            "cid" : "PAN",
            "fillKey": fill(PAN.idi),
            "rank": PAN.rank,
            "idi": PAN.idi,
            "data": PAN,
            "original": 4.41
        },
        "PNG": {
            "cid" : "PNG",
            "fillKey": fill(PNG.idi),
            "rank": PNG.rank,
            "idi": PNG.idi,
            "data": PNG,
            "original": 1.44
        },
        "PRY": {
            "cid" : "PRY",
            "fillKey": fill(PRY.idi),
            "rank": PRY.rank,
            "idi": PRY.idi,
            "data": PRY,
            "original": 3.14
        },
        "PER": {
            "cid" : "PER",
            "fillKey": fill(PER.idi),
            "rank": PER.rank,
            "idi": PER.idi,
            "data": PER,
            "original": 3.57
        },
        "PHL": {
            "cid" : "PHL",
            "fillKey": fill(PHL.idi),
            "rank": PHL.rank,
            "idi": PHL.idi,
            "data": PHL,
            "original": 3.19
        },
        "PCN": {
            "cid" : "PCN",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "POL": {
            "cid" : "POL",
            "fillKey": fill(POL.idi),
            "rank": POL.rank,
            "idi": POL.idi,
            "data": POL,
            "original": 6.19
        },
        "PRT": {
            "cid" : "PRT",
            "fillKey": fill(PRT.idi),
            "rank": PRT.rank,
            "idi": PRT.idi,
            "data": PRT,
            "original": 6.05
        },
        "PRI": {
            "cid" : "PRI",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "QAT": {
            "cid" : "QAT",
            "fillKey": fill(QAT.idi),
            "rank": QAT.rank,
            "idi": QAT.idi,
            "data": QAT,
            "original": 6.24
        },
        "REU": {
            "cid" : "REU",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ROU": {
            "cid" : "ROU",
            "fillKey": fill(ROU.idi),
            "rank": ROU.rank,
            "idi": ROU.idi,
            "data": ROU,
            "original": 5.13
        },
        "RUS": {
            "cid" : "RUS",
            "fillKey": fill(RUS.idi),
            "rank": RUS.rank,
            "idi": RUS.idi,
            "data": RUS,
            "original": 6.00
        },
        "RWA": {
            "cid" : "RWA",
            "fillKey": fill(RWA.idi),
            "rank": RWA.rank,
            "idi": RWA.idi,
            "data": RWA,
            "original": 1.66
        },
        "KNA": {
            "cid" : "KNA",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "LCA": {
            "cid" : "LCA",
            "fillKey": fill(LCA.idi),
            "rank": LCA.rank,
            "idi": LCA.idi,
            "data": LCA,
            "original": 4.49
        },
        "VCT": {
            "cid" : "VCT",
            "fillKey": fill(VCT.idi),
            "rank": VCT.rank,
            "idi": VCT.idi,
            "data": VCT,
            "original": 4.74
        },
        "WSM": {
            "cid" : "WSM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SMR": {
            "cid" : "SMR",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "STP": {
            "cid" : "STP",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SAU": {
            "cid" : "SAU",
            "fillKey": fill(SAU.idi),
            "rank": SAU.rank,
            "idi": SAU.idi,
            "data": SAU,
            "original": 5.43
        },
        "SEN": {
            "cid" : "SEN",
            "fillKey": fill(SEN.idi),
            "rank": SEN.rank,
            "idi": SEN.idi,
            "data": SEN,
            "original": 1.85
        },
        "SRB": {
            "cid" : "SRB",
            "fillKey": fill(SRB.idi),
            "rank": SRB.rank,
            "idi": SRB.idi,
            "data": SRB,
            "original": 5.40
        },
        "SYC": {
            "cid" : "SYC",
            "fillKey": fill(SYC.idi),
            "rank": SYC.rank,
            "idi": SYC.idi,
            "data": SYC,
            "original": 4.37
        },
        "SLE": {
            "cid" : "SLE",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SGP": {
            "cid" : "SGP",
            "fillKey": fill(SGP.idi),
            "rank": SGP.rank,
            "idi": SGP.idi,
            "data": SGP,
            "original": 7.66
        },
        "SVK": {
            "cid" : "SVK",
            "fillKey": fill(SVK.idi),
            "rank": SVK.rank,
            "idi": SVK.idi,
            "data": SVK,
            "original": 5.86
        },
        "SVN": {
            "cid" : "SVN",
            "fillKey": fill(SVN.idi),
            "rank": SVN.rank,
            "idi": SVN.idi,
            "data": SVN,
            "original": 6.70
        },
        "SLB": {
            "cid" : "SLB",
            "fillKey": fill(SLB.idi),
            "rank": SLB.rank,
            "idi": SLB.idi,
            "data": SLB,
            "original": 1.85
        },
        "SOM": {
            "cid" : "SOM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ZAF": {
            "cid" : "ZAF",
            "fillKey": fill(ZAF.idi),
            "rank": ZAF.rank,
            "idi": ZAF.idi,
            "data": ZAF,
            "original": 3.42
        },
        "SSD": {
            "cid" : "SSD",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SGS": {
            "cid" : "SGS",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ESP": {
            "cid" : "ESP",
            "fillKey": fill(ESP.idi),
            "rank": ESP.rank,
            "idi": ESP.idi,
            "data": ESP,
            "original": 6.62
        },
        "LKA": {
            "cid" : "LKA",
            "fillKey": fill(LKA.idi),
            "rank": LKA.rank,
            "idi": LKA.idi,
            "data": LKA,
            "original": 2.88
        },
        "SHN": {
            "cid" : "SHN",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SPM": {
            "cid" : "SPM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SDN": {
            "cid" : "SDN",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SUR": {
            "cid" : "SUR",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SJM": {
            "cid" : "SJM",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SWZ": {
            "cid" : "SWZ",
            "fillKey": fill(SWZ.idi),
            "rank": SWZ.rank,
            "idi": SWZ.idi,
            "data": SWZ,
            "original": 2.24
        },
        "SWE": {
            "cid" : "SWE",
            "fillKey": fill(SWE.idi),
            "rank": SWE.rank,
            "idi": SWE.idi,
            "data": SWE,
            "original": 8.34
        },
        "CHE": {
            "cid" : "CHE",
            "fillKey": fill(CHE.idi),
            "rank": CHE.rank,
            "idi": CHE.idi,
            "data": CHE,
            "original": 7.68
        },
        "SYR": {
            "cid" : "SYR",
            "fillKey": fill(SYR.idi),
            "rank": SYR.rank,
            "idi": SYR.idi,
            "data": SYR,
            "original": 3.15
        },
        "TWN": {
            "cid" : "TWN",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "TJK": {
            "cid" : "TJK",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "TZA": {
            "cid" : "TZA",
            "fillKey": fill(TZA.idi),
            "rank": TZA.rank,
            "idi": TZA.idi,
            "data": TZA,
            "original": 1.60
        },
        "THA": {
            "cid" : "THA",
            "fillKey": fill(THA.idi),
            "rank": THA.rank,
            "idi": THA.idi,
            "data": THA,
            "original": 3.41
        },
        "TGO": {
            "cid" : "TGO",
            "fillKey": fill(TGO.idi),
            "rank": TGO.rank,
            "idi": TGO.idi,
            "data": TGO,
            "original": 1.65
        },
        "TKL": {
            "cid" : "TKL",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data"
        },
        "TON": {
            "cid" : "TON",
            "fillKey": fill(TON.idi),
            "rank": TON.rank,
            "idi": TON.idi,
            "data": TON,
            "original": 3.12
        },
        "TTO": {
            "cid" : "TTO",
            "fillKey": fill(TTO.idi),
            "rank": TTO.rank,
            "idi": TTO.idi,
            "data": TTO,
            "original": 4.57
        },
        "TUN": {
            "cid" : "TUN",
            "fillKey": fill(TUN.idi),
            "rank": TUN.rank,
            "idi": TUN.idi,
            "data": TUN,
            "original": 3.58
        },
        "TUR": {
            "cid" : "TUR",
            "fillKey": fill(TUR.idi),
            "rank": TUR.rank,
            "idi": TUR.idi,
            "data": TUR,
            "original": 4.38
        },
        "TKM": {
            "cid" : "TKM",
            "fillKey": fill(TKM.idi),
            "rank": TKM.rank,
            "idi": TKM.idi,
            "data": TKM,
            "original": 2.49
        },
        "TCA": {
            "cid" : "TCA",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "TUV": {
            "cid" : "TUV",
            "fillKey": fill(TUV.idi),
            "rank": TUV.rank,
            "idi": TUV.idi,
            "data": TUV,
            "original": 2.46
        },
        "UGA": {
            "cid" : "UGA",
            "fillKey": fill(UGA.idi),
            "rank": UGA.rank,
            "idi": UGA.idi,
            "data": UGA,
            "original": 1.67
        },
        "UKR": {
            "cid" : "UKR",
            "fillKey": fill(UKR.idi),
            "rank": UKR.rank,
            "idi": UKR.idi,
            "data": UKR,
            "original": 4.40
        },
        "ARE": {
            "cid" : "ARE",
            "fillKey": fill(ARE.idi),
            "rank": ARE.rank,
            "idi": ARE.idi,
            "data": ARE,
            "original": 5.64
        },
        "GBR": {
            "cid" : "GBR",
            "fillKey": fill(GBR.idi),
            "rank": GBR.rank,
            "idi": GBR.idi,
            "data": GBR,
            "original": 7.75
        },
        "USA": {
            "cid" : "USA",
            "fillKey": fill(USA.idi),
            "rank": USA.rank,
            "idi": USA.idi,
            "data": USA,
            "original": 7.48
        },
        "UMI": {
            "cid" : "UMI",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "URY": {
            "cid" : "URY",
            "fillKey": fill(URY.idi),
            "rank": URY.rank,
            "idi": URY.idi,
            "data": URY,
            "original": 5.24
        },
        "UZB": {
            "cid" : "UZB",
            "fillKey": fill(UZB.idi),
            "rank": UZB.rank,
            "idi": UZB.idi,
            "data": UZB,
            "original": 3.05
        },
        "VUT": {
            "cid" : "VUT",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "VEN": {
            "cid" : "VEN",
            "fillKey": fill(VEN.idi),
            "rank": VEN.rank,
            "idi": VEN.idi,
            "data": VEN,
            "original": 3.92
        },
        "VNM": {
            "cid" : "VNM",
            "fillKey": fill(VNM.idi),
            "rank": VNM.rank,
            "idi": VNM.idi,
            "data": VNM,
            "original": 3.68
        },
        "VGB": {
            "cid" : "VGB",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "VIR": {
            "cid" : "VIR",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "WLF": {
            "cid" : "WLF",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "ESH": {
            "cid" : "ESH",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "YEM": {
            "cid" : "YEM",
            "fillKey": fill(YEM.idi),
            "rank": YEM.rank,
            "idi": YEM.idi,
            "data": YEM,
            "original": 1.76
        },
        "ZMB": {
            "cid" : "ZMB",
            "fillKey": fill(ZMB.idi),
            "rank": ZMB.rank,
            "idi": ZMB.idi,
            "data": ZMB,
            "original": 1.65
        },
        "ZWE": {
            "cid" : "ZWE",
            "fillKey": fill(ZWE.idi),
            "rank": ZWE.rank,
            "idi": ZWE.idi,
            "data": ZWE,
            "original": 2.24
        },
        "-99": {
            "cid" : "-99",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "SDS": {
            "cid" : "SDS",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
        },
        "PSE": {
            "cid" : "PSE",
            "fillKey": 'default',
            "rank": "No Data",
            "idi": "No Data",
            "data": "No Data"
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
            '<br>Updated 2011 IDI: <%=data.idi%>',
            '<br>Original 2011 IDI: <%=data.original%>',
            '</div>'].join(''))
      },
      
      fills: {
        '0': '#B20000',
        '1': '#E65C00',
        '2': '#FFCC00',
        '3': '#009900',
        '4': '#003D14',
        '5': '#0053CF',
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
    if(myData[lastCountryString].idi != "No Data") {
        $("#wha_country").text("You are improving: " + myData[lastCountryString].data.nam);
    }
    else{
        bootbox.alert ("Please select a country with data.");
    }
});
