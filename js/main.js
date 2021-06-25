import {init as backgroundInit} from './three_bg.js'
import {init as scopeInit} from './three_box.js'
import {init as newsfeedInit, closeApp2 as closeNewsfeed} from './newsfeed.js'
import {LatinumCalculator as LatCalc} from './lat_calc.js'
import {startTime as startTime} from './clock.js'


  function mainInit(){

    let newsFeedCloseBtn = document.querySelector(".newsfeed_close_btn")
    let scopeCloseBtn = document.querySelector(".scope_close_btn")
    let scopePanel = document.querySelector(".scope_panel")
    let scopeIcon = document.querySelector(".app3_icon")
    newsFeedCloseBtn.addEventListener("click", (e) => {closeNewsfeed(e)})
    scopeCloseBtn.addEventListener("click", (e) => {closeScope(e, scopePanel)})
    scopeIcon.addEventListener("click", (e) => {openScope(e, scopePanel)})
    startTime(document.getElementsByClassName("widget2")[0])
    backgroundInit()
    scopeInit()
    newsfeedInit()
    calcStart()

  }

  function openScope(e, panel){
    panel.style.display = "inline-block"
  }

  function closeScope(e, panel){
    panel.style.display = "none"
  }

  function calcStart(){
    let latCalc = new LatCalc('blue', 0.721);
    latCalc.Init()
  }

  mainInit()
