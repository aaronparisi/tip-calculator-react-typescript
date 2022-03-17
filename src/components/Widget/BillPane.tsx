import React, { useState } from 'react'

interface BillPaneProps {
  bill: number,
  updateBill: (newBill: number) => void,
}

const BillPane: React.FC<BillPaneProps> = ({ bill, updateBill }) => {
  const [billInputValue, setBillInputValue] = useState<string>(bill.toString())

  const handleBillSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // we have to call the updateBill function to let the widget know we have a new bill quantity
    // don't forget to make the bill amount it a number first!!
    updateBill(parseFloat(billInputValue))
  }

  return (
    <div className="bill-pane">
      <h2>Bill</h2>
      <form
        onSubmit={handleBillSubmit}
      >
        <input   // not sure if I like the number thing...
          type="text"
          value={billInputValue} 
          onChange={(e: React.FormEvent<HTMLInputElement>) => setBillInputValue(e.currentTarget.value)}
        />
      </form>
    </div>
  )
}

export default BillPane