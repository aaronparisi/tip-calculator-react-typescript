import React, { useState } from 'react'
import InputPane from './InputPane'
import OutputPane from './OutputPane'

interface WidgetPaneProps {

}

const WidgetPane: React.FC<WidgetPaneProps> = () => {
  const [bill, setBill] = useState<number>(200);
  const [tipPercentage, setTipPercentage] = useState<number>(25)
  const [numPeople, setNumPeople] = useState<number>(2)

  const updateBill = (newBill: number): void => {
    setBill(newBill)
  }

  const updateTipPercentage = (newTip: number): void => {
    setTipPercentage(newTip)
  }

  const updateNumPeople = (newNumPeople: number): void => {
    setNumPeople(newNumPeople)
  }

  const resetAll = () => {
    setBill(0)
    setTipPercentage(0)
    setNumPeople(0)
  }

  return (
    <div className="widget">
      <h1>Hello from widget!</h1>
      <InputPane 
        bill={bill}
        updateBill={updateBill}
        tipPercentage={tipPercentage}
        updateTipPercentage={updateTipPercentage}
        numPeople={numPeople}
        updateNumPeople={updateNumPeople}
      />
      <OutputPane 
        bill={bill} 
        tipPercentage={tipPercentage} 
        numPeople={numPeople}
        resetAll={resetAll}
      />
    </div>
  )
}

export default WidgetPane

// big question for me is:
// who handles the calculations?
// is app the brains or does it just pass that info to the output portion?
// I'm going to go with the latter because idk app seems to be handling a lot of bits of state already
// and otherwise output really doesn't do much at all
// THAT SAID, imagine a situation where we want to render the same output pane but with different logic
// so in that case I guess we COULD have outputpane take fn params
// might come back to that