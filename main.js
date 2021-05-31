//get all keys
const keys = document.querySelectorAll('.key')

//Play notes
function playNotes(event){
    let audiokeycode = getKeyCode(event)

    //type or pressed key
    let key = document.querySelector(`.key[data-key = "${audiokeycode}"]`)
    
    //if key exists
    const canFoundAnyKey = !key 
    if(canFoundAnyKey){
        return
    }
    //play audio
    playAudio(audiokeycode)

    //add class playing
    addPlaying(key)

}

function getKeyCode(event){
    if(event.type === 'keydown'){
        keycode = event.keyCode 
    } else {
        keycode = event.target.dataset.key
    }
    return keycode
}

function playAudio(audiokeycode){
    let audio = document.querySelector(`audio[data-key = "${audiokeycode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function addPlaying(key){
    key.classList.add('playing')
}

function removePlaying(event){
    event.target.classList.remove('playing')
}

function registerEvents(){
    //click with mouse
    keys.forEach(function(key){
    key.addEventListener("click", playNotes)
    key.addEventListener("transitionend", removePlaying)
    })

    //key board type
    window.addEventListener("keydown", playNotes)
}

window.addEventListener('load', registerEvents)