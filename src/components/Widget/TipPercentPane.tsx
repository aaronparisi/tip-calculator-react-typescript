import React, { useRef } from "react";

export interface TipPercentPaneProps {
  tipPercentage: number;
  updateTipPercentage: (newTip: number) => void;
}

interface PercentageSelectorButtonProps {
  buttonPercentage: number;
  selectedTipPercentage: number;
  updateTipPercentage: (newTip: number) => void;
}

const PercentageSelectorButton: React.FC<PercentageSelectorButtonProps> = ({
  buttonPercentage,
  selectedTipPercentage,
  updateTipPercentage,
}) => {
  // todo check whether or not this button is selected to dynamically set class for styling
  // todo handle custom values if they happen to coincide with a button percentage option
  console.log(`percentage of this button: ${buttonPercentage}`);
  console.log(`percentage selected: ${selectedTipPercentage}`);
  return (
    <button
      className={
        selectedTipPercentage === buttonPercentage
          ? "pct-selector-selected"
          : "pct-selector"
      }
      id={`pct-selector-${buttonPercentage}`}
      onClick={() => updateTipPercentage(buttonPercentage)}
    >
      {`${buttonPercentage}%`}
    </button>
  );
};

const TipPercentPane: React.FC<TipPercentPaneProps> = ({
  tipPercentage,
  updateTipPercentage,
}) => {
  const percentageSelectors: number[] = [5, 10, 15, 20, 25, 50];

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // logic to make it not render if such and such
    updateTipPercentage(parseFloat(inputRef?.current?.value ?? "0"));
  };

  return (
    <div className="tip-pane">
      <h2>Select Tip %</h2>
      {percentageSelectors.map((pct) => {
        return (
          <PercentageSelectorButton
            key={pct}
            buttonPercentage={pct}
            selectedTipPercentage={tipPercentage}
            updateTipPercentage={updateTipPercentage}
          />
        ); // is it ok to pass this function to a child prop?
      })}

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <input type="number" ref={inputRef} step={0.01} min={0} max={100} />
      </form>
    </div>
  );
};

export default TipPercentPane;
