// debugger;

document.getElementsByTagName('button')[0].onclick = function(){

    let loko_goals = document.getElementById('lokos_input');
    let hann_goals =  document.getElementById('hanns_input');

    let loko_goals1 = parseInt(loko_goals.value);
    let hann_goals1 = parseInt(hann_goals.value);
    let victor_team = document.getElementById('victor_team');

    let changer = document.getElementById('changer');

    let loko_comb = document.getElementById('comb1');
    let hann_comb = document.getElementById('comb2');

    let list_title = document.getElementById('list');


    let loco_players = document.getElementById('text-1').value.split('\n');
    let hann_players = document.getElementById('text-2').value.split('\n');

    let amountGoals = loko_goals1 + hann_goals1

    if( typeof(loko_goals1) === 'number' && typeof(hann_goals1) === 'number' ) {

        if ( amountGoals > 7 ) {

            victor_team.innerHTML = "Amount number of Lokomotiv's and Hannover's goals shouldn't be more 7";
        }
        else if ( loko_goals1 === hann_goals1 ) {
            victor_team.innerHTML = "It's a draw! Nice match!!!";
        }
        else {
            if ( loko_goals1 > hann_goals1 ) {
                victor_team.innerHTML = "Lokomotiv is a victor!!!";
            }
            else {
                victor_team.innerHTML = "Hannover is a victor!!!";
            }
        }
    }
    else {
        victor_team.innerHTML = "Written numbers are not a number! Correct these fields."
    }

    // there was should code of combinations, but i couldn't do it :'(

    if ( loco_players.length <= 11 && hann_players.length <= 11) {
        changer.innerHTML = "All inputs are filled correctly";
        loco_players.forEach(element => console.log(element));
        console.log("Locomotiv players' list is above: ");

        changer.innerHTML = "All inputs are filled correctly";
        hann_players.forEach(element => console.log(element));
        console.log("Hannover players' list is above: ");
    }
    else if ( loco_players.length > 11 && hann_players.length <= 11) {
        list_title.innerHTML = "Oh! In Lokomotiv's team there are more 11 players. Correct these fields.";
    }
    else {
        list_title.innerHTML = "Oh! In Hannover's team there are more 11 players. Correct these fields.";
    }
}
