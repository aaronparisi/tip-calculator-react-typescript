import React from 'react'

interface OutputPaneProps {
  bill: number,
  tipPercentage: number,
  numPeople: number
  resetAll: () => void
}

interface OutputPaneItemProps {
  title: string,
  outputNum: number
}

const OutputPaneItem: React.FC<OutputPaneItemProps> = ({ title, outputNum }) => {
  return (
    <div className={title.toLocaleLowerCase().split("").join("-")}>
      <div>
        <h2>{title}</h2>
        <h3>/ person</h3>
      </div>

      <div className="output-dollars">
        {isNaN(outputNum) ? "--" : outputNum}
      </div>
    </div>
  )
}

const OutputPane: React.FC<OutputPaneProps> = ({ bill, tipPercentage, numPeople, resetAll }) => {
  const tipPerPerson = (bill * (tipPercentage / 100) / numPeople);
  const totalPerPerson = (bill / numPeople) + tipPerPerson;

  return (
    // amount of tip per person
    // total due per person
    // reset button
    <div className="outout-pane">
      <OutputPaneItem title="Tip Amount" outputNum={tipPerPerson} />
      <OutputPaneItem title="Total" outputNum={totalPerPerson} />
      <button
        onClick={() => resetAll()}
      >
        Reset!
      </button>
    </div>
  )
}

export default OutputPane