import React from 'react'

interface OutputPaneProps {
  bill: number,
  tipPercentage: number,
  numPeople: number
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
        {outputNum}
      </div>
    </div>
  )
}

const OutputPane: React.FC<OutputPaneProps> = ({ bill, tipPercentage, numPeople }) => {
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
        onClick={() => console.log('should reset now')}
      >Reset!</button>
    </div>
  )
}

export default OutputPane