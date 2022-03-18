import React, { useEffect, useState } from 'react'

export interface NumPeoplePaneProps {
  numPeople: number,
  updateNumPeople: (newNumPeople: number) => void
}

const NumPeoplePane: React.FC<NumPeoplePaneProps> = ({ numPeople, updateNumPeople }) => {
  const [localNumPeople, setLocalNumPeople] = useState<number>(numPeople)

  useEffect(() => {
    // update num people whenever local state changes
    updateNumPeople(localNumPeople)
  }, [localNumPeople, updateNumPeople])

  return (
    <div className="num-people-pane">
      <h1>Number of People</h1>
      <input 
        type="number" 
        value={localNumPeople} 
        onChange={(e: React.FormEvent<HTMLInputElement>) => setLocalNumPeople(parseInt(e.currentTarget.value))}
      />
    </div>
  )
}

export default NumPeoplePane