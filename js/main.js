import {init as backgroundInit} from './three_bg.js'
import {init as scopeInit} from './three_scope.js'
import {init as newsfeedInit} from './newsfeed.js'
import {LatinumCalculator as LatCalc} from './lat_calc.js'
import {startTime as startTime} from './clock.js'


function mainInit(){
  startTime(document.getElementsByClassName("widget2")[0])
  backgroundInit()
  scopeInit()
  newsfeedInit()
  calcStart()
}

function calcStart(){
  let latCalc = new LatCalc('blue', 0.721);
  latCalc.Init()
}

mainInit()
