//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;


//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
let manager = [managerName, managerAge, currentTeam, trophiesWon];
return manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
 let formationobj  = [];
  // return formationObject
 if(formation.length > 0){
   formationobj = {defender : formation[0], midfield : formation[1], forward : formation[2]};
   return formationobj ;
 }
 else{
   return null;
 }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
  
function filterByDebut(year){
  let playerdetail = [];
  players.forEach((player) => {
    if(player.debut == year){
      playerdetail.push(player)
    }
  });
  return playerdetail;
}

// function filterByDebut(year){
//   let playerdetail = [];
//   playerdetail = players.filter(player => player.debut == year)
//   for(let i = 0;i<players.length;i++){
//     if(players[i].debut == year){
//       return playerdetail;
//     }
//     else{
//       return [];
//     }
//   }
// }
//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  let playerposition = [];
    players.forEach((player) =>{
      if(player.position == position){
        playerposition.push(player)
      }
    });
  return playerposition;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let wonawards = [];
  for(let i = 0;i<players.length;i++){
    for(let j = 0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name == awardName){
        wonawards.push(players[i])
      }
    } 
  }
  return wonawards;
  
}
// players.forEach((player) => {
//   if(player.awards.name == awardName){
//     wonawards.push(players)
//   }
// });
// return wonawards;

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let noofawards = [];
  let playeraward = [];
  let count = 0;
  for(let i = 0;i<players.length;i++)
  {
    for(let j = 0;j<players[i].awards.length;j++)
    {
     if(players[i].awards[j].name == awardName){
      count++;
     } 
    }
   noofawards[i]=count;
   count=0;
  }
 for(let i = 0;i<players.length;i++){
  if(noofawards[i] == noOfTimes)
  {
    playeraward.push(players[i]);
  }
 }
  return playeraward;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let wonawardsofcountry = [];
  players.forEach((player) =>{
    if(player.country == country){
      for(let j = 0;j<player.awards.length;j++){
        if(player.awards[j].name == awardName){
          wonawardsofcountry.push(player)
        }
      }   
    }
  });
  return wonawardsofcountry;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let teamawardsofage = [];
    players.forEach((player) =>{
      if(player.awards.length>= noOfAwards && player.team == team && player.age <= age){
        teamawardsofage.push(player)
      }
    })
          
  return teamawardsofage;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
