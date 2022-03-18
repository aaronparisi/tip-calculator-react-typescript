import React from 'react'
import BillPane, { BillPaneProps } from './BillPane'
import NumPeoplePane, { NumPeoplePaneProps } from './NumPeoplePane'
import TipPercentPane, { TipPercentPaneProps } from './TipPercentPane'

type InputPaneProps = BillPaneProps & NumPeoplePaneProps & TipPercentPaneProps

// interface InputPaneProps {
//   bill: number,
//   updateBill: (newBill: number) => void,
//   tipPercentage: number,
//   updateTipPercentage: (newTip: number) => void,
//   numPeople: number,
//   updateNumPeople: (newNumPeople: number) => void
// }  // todo make this a intersection?

const InputPane: React.FC<InputPaneProps> = ({ 
  bill, 
  updateBill, 
  tipPercentage, 
  updateTipPercentage, 
  numPeople, 
  updateNumPeople
}) => {
  return (
    <div className="input-pane">
      <BillPane bill={bill} updateBill={updateBill} />
      <TipPercentPane tipPercentage={tipPercentage} updateTipPercentage={updateTipPercentage} />
      <NumPeoplePane numPeople={numPeople} updateNumPeople={updateNumPeople} />
    </div>
  )
}

export default InputPane