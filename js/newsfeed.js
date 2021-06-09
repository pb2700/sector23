

let currentQuote = ''
let isApp2Open = false
let letters = ""
let letterIndex = 0
let timeout1 = null


this.panel7 = document.querySelector(".panel7")
this.panel7Body = document.querySelector(".panel7_body")
this.app2Icon = document.querySelector(".app2_icon")
this.app2Icon.addEventListener("click", (e) => {openApp2(e)})


async function getData(){

  try{

    const response = await fetch('https://api.kanye.rest/')
    return await response.json()

  } catch (error) {

    console.log('ERROR: ', error)

  }

}

async function updateData(){

  const result = await getData()
  currentQuote = result.quote

}

function openApp2(){

  if(isApp2Open) return
  isApp2Open = true
  updateData()
  this.panel7.style.display = "inline-block"
  this.panel7Body.innerHTML = letters
  typeText()

}

async function typeText(){

  letters = currentQuote.slice(0, ++letterIndex)
  this.panel7Body.innerHTML = letters
  if(letters.length === currentQuote.length){
    letterIndex = 0
    letters = ""
    await updateData()
    timeout1 = setTimeout(typeText, 800)

  }
  else{
    if(letters[letters.length-1] === ' '){
      typeText()
    }
    else{
      timeout1 = setTimeout(typeText, 300)
    }
  }
}

function resetNewsfeed(){
  clearTimeout(timeout1)
  letters = ""
  letterIndex = 0
  currentQuote = ""
}
