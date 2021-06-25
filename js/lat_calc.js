


export class LatinumCalculator {

  constructor(theme, bias) {

		this.bias = bias
    this.cacheArray = []
		this.taxRate = 0.2
		this.exchRate = 1.17
		this.themes = {'royal_blue': {bg:'1201FD', text: '000000'},
									 'floral_white': {bg:'1201FD', text: '000000'},
									 'blanched_almond': {bg:'1201FD', text: '000000'},
									 'dark_magenta': {bg:'1201FD', text: '000000'},
									 'spring_green': {bg:'1201FD', text: '000000'}
									}
		this.theme = this.themes[theme]
    this.num2 = 51
    this.div1 = null
    this.display1 = null
    this.currentDenomination = 'bars'

  }

  GetLatinum(usd, view){

		const slipsInStrip = 100
		const stripsInBar = 20
		let pureSlips = usd * this.exchRate
    pureSlips = pureSlips - (pureSlips * this.taxRate)
		let slips = pureSlips % slipsInStrip
		let pureStrips = Math.floor((pureSlips / slipsInStrip))
		let strips = pureStrips % stripsInBar
		let bars = Math.floor((pureStrips / stripsInBar))

		let denominations = {

			slips: {'slips':pureSlips, 'strips':0, 'bars': 0},
			strips: {'slips':slips, 'strips':pureStrips, 'bars': 0},
			bars: {'slips':slips, 'strips':strips, 'bars': bars}

		}

		return denominations[view]

  }

	SetBias(bias){

		this.bias = bias

	}

	SetTax(tax){

		this.tax = tax

	}

	ChangeColor(color){

		this.color = color

	}

	GetBias(){

		return this.bias

	}

  AddSelectors(){

    this.calcMain = document.querySelector(".calc_main")
    this.slipDisplay = document.querySelector(".slip_display")
    this.stripDisplay = document.querySelector(".strip_display")
    this.barDisplay = document.querySelector(".bar_display")
    this.thSlips = document.querySelector(".slip_header")
    this.thStrips = document.querySelector(".strip_header")
    this.thBars = document.querySelector(".bar_header")
    this.calcInput = document.querySelector(".calc_input")
    this.exchRateInput = document.querySelector(".exch_rate_input")
    this.taxRateInput = document.querySelector(".tax_rate_input")
    this.calcButton = document.querySelector(".calc_button")
    this.select1 = document.querySelector(".dropdown")
    this.exchRateDisplay = document.querySelector(".exch_rate_display")
    this.taxRateDisplay = document.querySelector(".tax_rate_display")
    this.app1Icon = document.querySelector(".app1_icon")
    this.calculatorKeys = document.querySelector(".calculator_keys")
    this.calcCloseBtn = document.querySelector(".calc_close_btn")

  }

  AddListeners(){

    this.calcButton.addEventListener("click", (e) => {this.Calculate(e)})
    this.app1Icon.addEventListener("click", (e) => {this.Appear(e)})
    this.select1.onchange = (e) => {this.DropdownSelected(e)}
    this.exchRateInput.addEventListener("change", (e) => {this.ExchRateUpdate(e)});
    this.taxRateInput.addEventListener("change", (e) => {this.TaxRateUpdate(e)});
    this.calculatorKeys.addEventListener("click", (e) => {this.ClickCalculator(e)});
    this.calcCloseBtn.addEventListener("click", (e) => {this.CloseCalc(e)});

  }

  DropdownSelected(e){

    this.currentDenomination = e.target.value
    this.Calculate()

  }

  CloseCalc(){

    this.calcMain.style.display = "none"

  }

  ClickCalculator(e){

    let value = e.target.value

    if(value === 'all-clear'){
      this.calcInput.value = ''
      this.slipDisplay.innerHTML = 0
      this.stripDisplay.innerHTML = 0
      this.barDisplay.innerHTML = 0
    }
    else{
      this.calcInput.value += value
    }

  }

  Init(){

    this.AddSelectors()
    this.AddListeners()

  }

	Appear(){

    this.calcMain.style.display = "flex"
    this.Render()

  }

  Render(){

    this.exchRateDisplay.innerHTML = this.exchRate
    this.taxRateDisplay.innerHTML = this.taxRate

  }

  ExchRateUpdate(e){

    e.preventDefault();
    this.exchRate = this.exchRateInput.value
    this.Render()
    this.Calculate()

  }

  TaxRateUpdate(e){

    e.preventDefault();
    this.taxRate = this.taxRateInput.value
    this.Render()
    this.Calculate()

  }

  Calculate(e){

    this.thSlips.classList.remove("selected_denomination")
    this.thStrips.classList.remove("selected_denomination")
    this.thBars.classList.remove("selected_denomination")
    switch (this.currentDenomination) {
      case 'slips':
        this.thSlips.classList.add("selected_denomination")
        break;
        case 'strips':
          this.thStrips.classList.add("selected_denomination")
        break;
        case 'bars':
          this.thBars.classList.add("selected_denomination")
        break;
      default:
        break;
    }

    let latinum = this.GetLatinum(this.calcInput.value, this.currentDenomination)
    this.slipDisplay.innerHTML = +(Math.round(latinum.slips + "e+2")  + "e-2")
    this.stripDisplay.innerHTML = latinum.strips
    this.barDisplay.innerHTML = latinum.bars

  }

}
