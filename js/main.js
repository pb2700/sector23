

  function mainInit(){

    startTime(document.getElementsByClassName("widget2")[0])

    this.newFeedCloseBtn = document.querySelector(".panel7_close_btn")
    this.scopeCloseBtn = document.querySelector(".panel5_close_btn")
    this.panel5 = document.querySelector(".panel5")
    this.app3Icon = document.querySelector(".app3_icon")
    this.newFeedCloseBtn.addEventListener("click", (e) => {this.closeNewsFeed(e)})
    this.scopeCloseBtn.addEventListener("click", (e) => {this.closeScope(e)})
    this.app3Icon.addEventListener("click", (e) => {this.openApp3(e)})

  }

function openApp3(){
  panel5.style.display = "inline-block"
}
function closeNewsFeed(){
  isApp2Open = false
  panel7.style.display = "none"
  resetNewsfeed()
}
function closeScope(){
  panel5.style.display = "none"
}

mainInit()

function calcStart(){

  let calculator = new LatinumCalculator('blue', 0.721);
  calculator.Init()
}


calcStart()
