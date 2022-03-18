import React, { useEffect, useState } from 'react'

export interface TipPercentPaneProps {
  tipPercentage: number,
  updateTipPercentage: (newTip: number) => void,
}

interface PercentageSelectorButtonProps {
  percentage: string,  // change this?
  setSelectedTipPercent: (selectedTipPercent: string) => void,
  selectedPercentage: string
}

const PercentageSelectorButton: React.FC<PercentageSelectorButtonProps> = ({ percentage, setSelectedTipPercent, selectedPercentage }) => {
  // todo check whether or not this button is selected to dynamically set class for styling
  // todo handle custom values if they happen to coincide with a button percentage option
  console.log(`percentage of this button: ${percentage}`)
  console.log(`percentage selected: ${selectedPercentage}`)
  return (
    <button
      className={(selectedPercentage === percentage) ? "pct-selector-selected" : "pct-selector" }
      id={`pct-selector-${percentage}`}
      onClick={() => setSelectedTipPercent(percentage)}
    >
      {`${percentage}%`}
    </button>
  )
}

const TipPercentPane: React.FC<TipPercentPaneProps> = ({ tipPercentage, updateTipPercentage }) => {
  const [selectedTipPercent, setSelectedTipPercent] = useState<string>(tipPercentage.toString())
  const [customTipPercent, setCustomTipPercent] = useState<string>("")

  const percentageSelectors: string[] = ["5", "10", "15", "20", "25", "50"]

  useEffect(() => {
    // update widget any time local state changes
    updateTipPercentage(parseFloat(selectedTipPercent))
  }, [selectedTipPercent, updateTipPercentage])  // updateTipPercentage should never really change

  useEffect(() => {
    // update selectedTipPercent whenever the custom tip changes
    if (customTipPercent !== "") setSelectedTipPercent(customTipPercent);
  }, [customTipPercent])

  return (
    <div className="tip-pane">
      <h2>Select Tip %</h2>
      {percentageSelectors.map(pct => {
        return (
          <PercentageSelectorButton
            key={pct}
            percentage={pct} 
            setSelectedTipPercent={setSelectedTipPercent} 
            selectedPercentage={selectedTipPercent}
          />)  // is it ok to pass this function to a child prop?
      })}

        <input
          type="text"
          // onSelect={() => setSelectedTipPercent("")}  // what if user clicks here then clicks away??
          value={customTipPercent}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setCustomTipPercent(e.currentTarget.value)}
        />
    </div>
  )
}

export default TipPercentPane