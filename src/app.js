var UI = require('ui');
var Vector2 = require('vector2');

var NUM_POKEMON = 151;

var poke_names = [
" 001      \nBulbasaur\nGrass/Poison",
" 002      \nIvysaur\nGrass/Poison",
" 003      \nVenusaur\nGrass/Poison",
" 004      \nCharmander\nFire\n",
" 005      \nCharmeleon\nFire\n",
" 006      \nCharizard\nFire/Flying",
" 007      \nSquirtle\nWater\n",
" 008      \nWartortle\nWater\n",
" 009      \nBlastoise\nWater\n",
" 010      \nCaterpie\nBug\n",
" 011      \nMetapod\nBug\n",
" 012      \nButterfree\nBug/Flying",
" 013      \nWeedle\nBug/Poison",
" 014      \nKakuna\nBug/Poison",
" 015      \nBeedrill\nBug/Poison",
" 016      \nPidgey\nNormal/Flying",
" 017      \nPidgeotto\nNormal/Flying",
" 018      \nPidgeot\nNormal/Flying",
" 019      \nRattata\nNormal\n",
" 020      \nRaticate\nNormal\n",
" 021      \nSpearow\nNormal/Flying",
" 022      \nFearow\nNormal/Flying",
" 023      \nEkans\nPoison\n",
" 024      \nArbok\nPoison\n",
" 025      \nPikachu\nElectric\n",
" 026      \nRaichu\nElectric\n",
" 027      \nSandshrew\nGround\n",
" 028      \nSandslash\nGround\n",
" 029      \nNidoran F\nPoison\n",
" 030      \nNidorina\nPoison\n",
" 031      \nNidoqueen\nPoison/Ground",
" 032      \nNidoran M\nPoison\n",
" 033      \nNidorino\nPoison\n",
" 034      \nNidoking\nPoison/Ground",
" 035      \nClefairy\nNormal\n",
" 036      \nClefable\nNormal\n",
" 037      \nVulpix\nFire\n",
" 038      \nNinetales\nFire\n",
" 039      \nJigglypuff\nNormal\n",
" 040      \nWigglytuff\nNormal\n",
" 041      \nZubat\nPoison/Flying",
" 042      \nGolbat\nPoison/Flying",
" 043      \nOddish\nGrass/Poison",
" 044      \nGloom\nGrass/Poison",
" 045      \nVileplume\nGrass/Poison",
" 046      \nParas\nBug/Grass",
" 047      \nParasect\nBug/Grass",
" 048      \nVenonat\nBug/Poison",
" 049      \nVenomoth\nBug/Poison",
" 050      \nDiglett\nGround\n",
" 051      \nDugtrio\nGround\n",
" 052      \nMeowth\nNormal\n",
" 053      \nPersian\nNormal\n",
" 054      \nPsyduck\nWater\n",
" 055      \nGolduck\nWater\n",
" 056      \nMankey\nFighting\n",
" 057      \nPrimeape\nFighting\n",
" 058      \nGrowlithe\nFire\n",
" 059      \nArcanine\nFire\n",
" 060      \nPoliwag\nWater\n",
" 061      \nPoliwhirl\nWater\n",
" 062      \nPoliwrath\nWater/Fighting",
" 063      \nAbra\nPsychic\n",
" 064      \nKadabra\nPsychic\n",
" 065      \nAlakazam\nPsychic\n",
" 066      \nMachop\nFighting\n",
" 067      \nMachoke\nFighting\n",
" 068      \nMachamp\nFighting\n",
" 069      \nBellsprout\nGrass/Poison",
" 070      \nWeepinbell\nGrass/Poison",
" 071      \nVictreebel\nGrass/Poison",
" 072      \nTentacool\nWater/Poison",
" 073      \nTentacruel\nWater/Poison",
" 074      \nGeodude\nRock/Ground",
" 075      \nGraveler\nRock/Ground",
" 076      \nGolem\nRock/Ground",
" 077      \nPonyta\nFire\n",
" 078      \nRapidash\nFire\n",
" 079      \nSlowpoke\nWater/Psychic",
" 080      \nSlowbro\nWater/Psychic",
" 081      \nMagnemite\nElectric/Steel",
" 082      \nMagneton\nElectric/Steel",
" 083      \nFarfetch'd\nNormal/Flying",
" 084      \nDoduo\nNormal/Flying",
" 085      \nDodrio\nNormal/Flying",
" 086      \nSeel\nWater\n",
" 087      \nDewgong\nWater/Ice",
" 088      \nGrimer\nPoison\n",
" 089      \nMuk\nPoison\n",
" 090      \nShellder\nWater\n",
" 091      \nCloyster\nWater/Ice",
" 092      \nGastly\nGhost/Poison",
" 093      \nHaunter\nGhost/Poison",
" 094      \nGengar\nGhost/Poison",
" 095      \nOnix\nRock/Ground",
" 096      \nDrowzee\nPsychic\n",
" 097      \nHypno\nPsychic\n",
" 098      \nKrabby\nWater\n",
" 099      \nKingler\nWater\n",
" 100      \nVoltorb\nElectric\n",
" 101      \nElectrode\nElectric\n",
" 102      \nExeggcute\nGrass/Psychic",
" 103      \nExeggutor\nGrass/Psychic",
" 104      \nCubone\nGround\n",
" 105      \nMarowak\nGround\n",
" 106      \nHitmonlee\nFighting\n",
" 107      \nHitmonchan\nFighting\n",
" 108      \nLickitung\nNormal\n",
" 109      \nKoffing\nPoison\n",
" 110      \nWeezing\nPoison\n",
" 111      \nRhyhorn\nGround\nRock",
" 112      \nRhydon\nGround\nRock",
" 113      \nChansey\nNormal\n",
" 114      \nTangela\nGrass\n",
" 115      \nKangaskhan\nNormal\n",
" 116      \nHorsea\nWater\n",
" 117      \nSeadra\nWater\n",
" 118      \nGoldeen\nWater\n",
" 119      \nSeaking\nWater\n",
" 120      \nStaryu\nWater\n",
" 121      \nStarmie\nWater/Psychic",
" 122      \nMr. Mime\nPsychic\n",
" 123      \nScyther\nBug/Flying",
" 124      \nJynx\nIce/Psychic",
" 125      \nElectabuzz\nElectric\n",
" 126      \nMagmar\nFire\n",
" 127      \nPinsir\nBug\n",
" 128      \nTauros\nNormal\n",
" 129      \nMagikarp\nWater\n",
" 130      \nGyarados\nWater/Flying",
" 131      \nLapras\nWater/Ice",
" 132      \nDitto\nNormal\n",
" 133      \nEevee\nNormal\n",
" 134      \nVaporeon\nWater\n",
" 135      \nJolteon\nElectric\n",
" 136      \nFlareon\nFire\n",
" 137      \nPorygon\nNormal\n",
" 138      \nOmanyte\nRock/Water",
" 139      \nOmastar\nRock/Water",
" 140      \nKabuto\nRock/Water",
" 141      \nKabutops\nRock/Water",
" 142      \nAerodactyl\nRock/Flying",
" 143      \nSnorlax\nNormal\n",
" 144      \nArticuno\nIce/Flying",
" 145      \nZapdos\nElectric/Flying",
" 146      \nMoltres\nFire/Flying",
" 147      \nDratini\nDragon\n",
" 148      \nDragonair\nDragon\n",
" 149      \nDragonite\nDragon/Flying",
" 150      \nMewtwo\nPsychic\n",
" 151      \nMew\nPsychic\n",
" ?&0      \nMissingNo\n?????\n",
null];

var poke_images = [ 
'images/poke1.png',
'images/poke2.png',
'images/poke3.png',
'images/poke4.png',
'images/poke5.png',
'images/poke6.png',
'images/poke7.png',
'images/poke8.png',
'images/poke9.png',
'images/poke10.png',
'images/poke11.png',
'images/poke12.png',
'images/poke13.png',
'images/poke14.png',
'images/poke15.png',
'images/poke16.png',
'images/poke17.png',
'images/poke18.png',
'images/poke19.png',
'images/poke20.png',
'images/poke21.png',
'images/poke22.png',
'images/poke23.png',
'images/poke24.png',
'images/poke25.png',
'images/poke26.png',
'images/poke27.png',
'images/poke28.png',
'images/poke29.png',
'images/poke30.png',
'images/poke31.png',
'images/poke32.png',
'images/poke33.png',
'images/poke34.png',
'images/poke35.png',
'images/poke36.png',
'images/poke37.png',
'images/poke38.png',
'images/poke39.png',
'images/poke40.png',
'images/poke41.png',
'images/poke42.png',
'images/poke43.png',
'images/poke44.png',
'images/poke45.png',
'images/poke46.png',
'images/poke47.png',
'images/poke48.png',
'images/poke49.png',
'images/poke50.png',
'images/poke51.png',
'images/poke52.png',
'images/poke53.png',
'images/poke54.png',
'images/poke55.png',
'images/poke56.png',
'images/poke57.png',
'images/poke58.png',
'images/poke59.png',
'images/poke60.png',
'images/poke61.png',
'images/poke62.png',
'images/poke63.png',
'images/poke64.png',
'images/poke65.png',
'images/poke66.png',
'images/poke67.png',
'images/poke68.png',
'images/poke69.png',
'images/poke70.png',
'images/poke71.png',
'images/poke72.png',
'images/poke73.png',
'images/poke74.png',
'images/poke75.png',
'images/poke76.png',
'images/poke77.png',
'images/poke78.png',
'images/poke79.png',
'images/poke80.png',
'images/poke81.png',
'images/poke82.png',
'images/poke83.png',
'images/poke84.png',
'images/poke85.png',
'images/poke86.png',
'images/poke87.png',
'images/poke88.png',
'images/poke89.png',
'images/poke90.png',
'images/poke91.png',
'images/poke92.png',
'images/poke93.png',
'images/poke94.png',
'images/poke95.png',
'images/poke96.png',
'images/poke97.png',
'images/poke98.png',
'images/poke99.png',
'images/poke100.png',
'images/poke101.png',
'images/poke102.png',
'images/poke103.png',
'images/poke104.png',
'images/poke105.png',
'images/poke106.png',
'images/poke107.png',
'images/poke108.png',
'images/poke109.png',
'images/poke110.png',
'images/poke111.png',
'images/poke112.png',
'images/poke113.png',
'images/poke114.png',
'images/poke115.png',
'images/poke116.png',
'images/poke117.png',
'images/poke118.png',
'images/poke119.png',
'images/poke120.png',
'images/poke121.png',
'images/poke122.png',
'images/poke123.png',
'images/poke124.png',
'images/poke125.png',
'images/poke126.png',
'images/poke127.png',
'images/poke128.png',
'images/poke129.png',
'images/poke130.png',
'images/poke131.png',
'images/poke132.png',
'images/poke133.png',
'images/poke134.png',
'images/poke135.png',
'images/poke136.png',
'images/poke137.png',
'images/poke138.png',
'images/poke139.png',
'images/poke140.png',
'images/poke141.png',
'images/poke142.png',
'images/poke143.png',
'images/poke144.png',
'images/poke145.png',
'images/poke146.png',
'images/poke147.png',
'images/poke148.png',
'images/poke149.png',
'images/poke150.png',
'images/poke151.png',
'images/unknown.png'
];

var poke_gps_location = [
  [42.9871,-85.6203], //1
  [42.9301,-85.6460], //2
  [42.9467,-85.7129], //3
  [42.9786,-85.6391], //4
  [42.9504,-85.6334], //5
  [42.9672,-85.6994], //6
  [42.9770,-85.6929], //7
  [42.9819,-85.6880], //8
  [42.9365,-85.6603], //9
  [42.9427,-85.7140], //10
  [42.9720,-85.7239], //11
  [43.0030,-85.6863], //12
  [42.9613,-85.7246], //13
  [42.9782,-85.6735], //14
  [42.9368,-85.6454], //15
  [42.9774,-85.6572], //16
  [42.9683,-85.7229], //17
  [42.9440,-85.6978], //18
  [42.9446,-85.6500],
  [42.9797,-85.6415],
  [42.9501,-85.6427],
  [43.0019,-85.6523],
  [42.9953,-85.6849],
  [42.9292,-85.6493],
  [42.9288,-85.6772],
  [42.9850,-85.6824],
  [42.9744,-85.6355],
  [42.9478,-85.6371],
  [42.9723,-85.6826],
  [42.9521,-85.6827],
  [42.9600,-85.6725],
  [42.9604,-85.6359],
  [42.9523,-85.6910],
  [42.9367,-85.6219],
  [42.9282,-85.6540],
  [42.9834,-85.6517],
  [43.0011,-85.6900],
  [42.9785,-85.6605],
  [42.9822,-85.6797],
  [42.9741,-85.6665],
  [42.9852,-85.7101],
  [42.9446,-85.7057],
  [42.9281,-85.6543],
  [42.9717,-85.6984],
  [42.9323,-85.6953],
  [42.9872,-85.6727],
  [43.0010,-85.6795],
  [42.9530,-85.6876],
  [42.9355,-85.6553],
  [42.9207,-85.6772],
  [42.9901,-85.6478],
  [42.9285,-85.6681],
  [42.9643,-85.6496],
  [42.9635,-85.6855],
  [42.9533,-85.6830],
  [42.9487,-85.6274],
  [42.9269,-85.6492],
  [42.9624,-85.6921],
  [42.9377,-85.6973],
  [42.9515,-85.6506],
  [42.9502,-85.6230],
  [42.9510,-85.6731],
  [42.9479,-85.6201],
  [42.9805,-85.6429],
  [42.9841,-85.6711],
  [42.9297,-85.6900],
  [42.9837,-85.6349],
  [42.9609,-85.6441],
  [42.9523,-85.6167],
  [42.9437,-85.7184],
  [42.9327,-85.7042],
  [42.9561,-85.6762],
  [42.9716,-85.6312],
  [42.9491,-85.6834],
  [42.9423,-85.7083],
  [42.9572,-85.6113],
  [42.9808,-85.6164],
  [42.9544,-85.6115],
  [42.9738,-85.6707],
  [42.9691,-85.6841],
  [42.9614,-85.6402],
  [42.9865,-85.6702],
  [42.9832,-85.6170],
  [42.9380,-85.6883],
  [42.9543,-85.6283],
  [42.9300,-85.6889],
  [42.9861,-85.6572],
  [42.9685,-85.7035],
  [42.9414,-85.7123],
  [42.9685,-85.6801],
  [42.9461,-85.6137],
  [42.9407,-85.6359],
  [42.9496,-85.7024],
  [42.9619,-85.6591],
  [42.9479,-85.6391],
  [42.9650,-85.7059],
  [42.9707,-85.6161],
  [42.9836,-85.6438],
  [42.9467,-85.6381],
  [42.9382,-85.6776],
  [42.9336,-85.7068],
  [42.9414,-85.6336],
  [42.9589,-85.6888],
  [42.9743,-85.6895],
  [42.9874,-85.6194],
  [42.9436,-85.6486],
  [42.9668,-85.6687],
  [42.9911,-85.6279],
  [42.9834,-85.6808],
  [42.9826,-85.6275],
  [42.9867,-85.6287],
  [42.9872,-85.6193],
  [42.9404,-85.7017],
  [42.9582,-85.7100],
  [42.9359,-85.6648],
  [42.9298,-85.6597],
  [42.9216,-85.6587],
  [42.9534,-85.7068],
  [42.9876,-85.6964],
  [42.9225,-85.6538],
  [42.9451,-85.6181],
  [42.9827,-85.6597],
  [42.9980,-85.6765],
  [42.9761,-85.6578],
  [42.9368,-85.6269],
  [42.9630,-85.6282],
  [42.9859,-85.6366],
  [42.9574,-85.6927],
  [42.9319,-85.6568],
  [42.9787,-85.7215],
  [42.9862,-85.6448],
  [42.9823,-85.6620],
  [42.9762,-85.7168],
  [42.9922,-85.6679],
  [43.0014,-85.6938],
  [42.9629,-85.6888],
  [42.9722,-85.6708],
  [42.9463,-85.6697],
  [42.9325,-85.6881],
  [42.9365,-85.6268],
  [42.9631,-85.6642],
  [42.9560,-85.6901],
  [42.9431,-85.6516],
  [42.9343,-85.6666],
  [42.9936,-85.6590],
  [42.9855,-85.6762],
  [42.9688,-85.6396],
  [42.9526,-85.6491],
  [42.9923,-85.6716],
  [43.0025,-85.6559],
  [42.9358,-85.6692]
];

var LATITUDE = -1.0;
var LONGITUDE = -1.0;
var ALTITUDE = -1.0;
//POKEDEX Cards
var pokemon_found_entries;

var current_viewable_entry_index = 0;

var top_bar_image = new UI.Image({
  image: 'images/ui_top.png',
  size: new Vector2(144, 11),
  position: new Vector2(0, 0)
});
var bottom_bar_image = new UI.Image({
  image: 'images/ui_bottom.png',
  size: new Vector2(144, 11),
  position: new Vector2(0, 157)
});
var catch_button_indicator_image = new UI.Image({
  image: 'images/complete.png',
  size: new Vector2(14, 14),
  position: new Vector2(124, 77)
});

var pokedex_entry_card = new UI.Window({
  backgroundColor: 'white',
  fullscreen: true
});

var pokedex_entry_text = new UI.Text({
  text: poke_names[NUM_POKEMON],
  position: new Vector2(10,70),
  size: new Vector2(144, 80),
  backgroundColor: 'clear',
  color: 'black'
});

var pokedex_entry_number_text = new UI.Text({
  text: String(current_viewable_entry_index+1),
  position: new Vector2(110, 128),
  size: new Vector2(50, 50),
  backgroundColor: 'clear',
  color: 'black'
});

var poke_image = new UI.Image({
  position: new Vector2(10,15),
  size: new Vector2(56, 56),
  image: poke_images[NUM_POKEMON],
  backgroundColor: 'clear'
});

//CATCH A POKEMON Cards
var catch_pokemon_card = new UI.Window({
  fullscreen: true,
  backgroundColor: 'white'
});

var catch_arrow_image = new UI.Image({
  image: 'images/arrow.png',
  size: new Vector2(144, 50),
  position: new Vector2(0, 115)
});
var catch_pokemon_title = new UI.Text({
  backgroundColor: 'clear',
  color: 'black',
  position: new Vector2(10, 20),
  size: new Vector2(124, 60),
  text: 'Throw a \nPokeball!',
  font: 'GOTHIC_28_BOLD'
});

var successful_pokemon_catch_card = new UI.Card({
  title: 'Caught!',
  body: 'You caught a Pokemon!'
});

var failed_pokemon_catch_card = new UI.Card({
  title: 'No Pokemon Found',
  body: 'No Pokemon Found'
});

var waiting_for_catch_info = new UI.Card({
  title: 'Catching Pokemon...',
  body: 'Please Wait'
});

//GPS HANDLER
var locationOptions = {
  enableHighAccuracy: true, 
  maximumAge: 0, 
  timeout: 5000
};

function locationSuccess(pos) {
  var coordinates = pos.coords;
  if (coordinates.latitude !== null)
    LATITUDE = coordinates.latitude.toFixed(4);
  else
    LATITUDE = -1.0;
  if (coordinates.longitude !== null)
    LONGITUDE = coordinates.longitude.toFixed(4);
  else
    LONGITUDE = -1.0;
  if (coordinates.altitude !== null)
    ALTITUDE = coordinates.altitude.toFixed(0);
  else ALTITUDE = -1.0;
  console.log('lat= ' + LATITUDE + ' lon= ' + LONGITUDE + ' alt='  + ALTITUDE);
  
  var pokemon_index = 0;
  var found_pokemon_index = -1;
  
  for(pokemon_index = 0; pokemon_index < NUM_POKEMON; pokemon_index++){
    if((poke_gps_location[pokemon_index][0]*1.000005) >= LATITUDE && (poke_gps_location[pokemon_index][0]*0.999995) <= LATITUDE){
      if((Math.abs(poke_gps_location[pokemon_index][1]*1.000005)) >= Math.abs(LONGITUDE) && (Math.abs(poke_gps_location[pokemon_index][1]*0.999995)) <= Math.abs(LONGITUDE)){
        found_pokemon_index = pokemon_index;
        break;
      }
    }
  }
  
  if(found_pokemon_index >= 0){
    //SUCCESS
    successful_pokemon_catch_card.show();
    pokemon_found_entries[found_pokemon_index] = true;
    //console.log(pokemon_found_entries[found_pokemon_index]);
    current_viewable_entry_index = found_pokemon_index;
    localStorage.setItem('Pokedex_finds', pokemon_found_entries);
  }
  else{
    //FAILED
    failed_pokemon_catch_card.show();
  }
  waiting_for_catch_info.hide();
}

function locationError(err) {
  console.log('location error (' + err.code + '): ' + err.message);
}

//INTERFACE HANDLERS
function transition_to_pokedex_entry(entry_number){
  // LOOP IF GOES OVER
   if(entry_number < 0) {entry_number = NUM_POKEMON-1;}
   else if(entry_number > NUM_POKEMON-1) {entry_number = 0;}
  //console.log('Entry_num:' + entry_number + " value:" + pokemon_found_entries[entry_number]);
   if(pokemon_found_entries[entry_number]){
     //Known Pokemon
     pokedex_entry_text.text(poke_names[entry_number]);
     poke_image.image(poke_images[entry_number]);
   }
  else {
    //Unknown Pokemon
    pokedex_entry_text.text(poke_names[NUM_POKEMON]);
    poke_image.image(poke_images[NUM_POKEMON]);
  }
  current_viewable_entry_index = entry_number;
  
  console.log(poke_image.image);
  pokedex_entry_card.add(pokedex_entry_text);
  pokedex_entry_number_text.text(String(current_viewable_entry_index+1));
  pokedex_entry_card.add(pokedex_entry_number_text);
  pokedex_entry_card.add(poke_image);
  pokedex_entry_card.add(top_bar_image);
  pokedex_entry_card.add(bottom_bar_image);
  pokedex_entry_card.add(catch_button_indicator_image);
  //console.log("changing screens");
  pokedex_entry_card.show();
}

catch_pokemon_card.on('click', 'down', function() {
  //console.log('Catching a pokemon Click:');
  //UPDATE GPS COORDS
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
  waiting_for_catch_info.show();
  catch_pokemon_card.hide();
});

catch_pokemon_card.on('click', 'select', function(){
  //Change the pokedex_card to the current viewable poke index if the pokemon has been found
  //console.log('select Click');
  transition_to_pokedex_entry(current_viewable_entry_index);
  catch_pokemon_card.hide();
});

pokedex_entry_card.on('click', 'select', function(){
  catch_pokemon_card.add(catch_arrow_image);
  catch_pokemon_card.add(catch_pokemon_title);
  catch_pokemon_card.show();
  pokedex_entry_card.hide();
});

pokedex_entry_card.on('click', 'up', function(){
  transition_to_pokedex_entry(current_viewable_entry_index-1);
});

pokedex_entry_card.on('click', 'down', function(){
  transition_to_pokedex_entry(current_viewable_entry_index+1);
});

successful_pokemon_catch_card.on('click', 'down', function(){
  transition_to_pokedex_entry(current_viewable_entry_index);
  successful_pokemon_catch_card.hide();
});

failed_pokemon_catch_card.on('click', 'down', function(){
  transition_to_pokedex_entry(current_viewable_entry_index);
  failed_pokemon_catch_card.hide();
});

pokemon_found_entries  = JSON.parse('[' + localStorage.getItem('Pokedex_finds') + ']');
//pokemon_found_entries = null;
if(pokemon_found_entries === null) { pokemon_found_entries = [
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false
];}
current_viewable_entry_index = 0;
transition_to_pokedex_entry(0);
