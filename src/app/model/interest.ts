
export interface Interest {
  label: string,
  data: DataObject[],
}

export interface DataObject {
  id: string,
  name: string,
}

export const INTEREST: Interest = {
  label: "INTERESTS",
  data: [
    { id: "1", name: "Programming" },
    { id: "2", name: "Solving Problems" },
    { id: "3", name: "Unix" },
  ]
}
