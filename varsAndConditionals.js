let obiwanAttack = 35
let anakinAttack = 35

if(obiwanAttack < anakinAttack){
    console.log('Anakin has a better attack than obiwan')
}else if (obiwanAttack > anakinAttack){
    console.log('obiwan has a better attack than anakin')
}else {
    console.log ('anakin and obiwan have the same attack')
}

let obiwanhealth = 100
let obiwandefense = 0 

if(obiwanhealth <= anakinAttack){
    console.log('obiwan has been slain')
}else {
    obiwanhealth -= anakinAttack
    console.log(`obiwans health is now at ${obiwanhealth}`)  
}

obiwandefense += 30 

for(let i = 0; i < 5; i++){
    obiwanhealth -= (anakinAttack - obiwandefense)

    if(obiwanhealth <= 0){
        console.log('obiwan was slain')
    } else {
        console.log(`obiwans health is now at ${obiwanhealth}`)
    }
}

while(obiwanhealth > 0){
    obiwanhealth -= (anakinAttack - obiwandefense)
    console.log(`obiwans health is now at ${obiwanhealth}`)
    console.log(`obiwans health is now at ${obiwanhealth}`)
    if(obiwanhealth <= 0){
        console.log('obiwan was slain')
    }
}