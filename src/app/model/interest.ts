export interface Interest {
  label: string;
  data: DataObject[];
}

export interface DataObject {
  id: string;
  name: string;
}

export const INTEREST: Interest = {
  label: 'Interests',
  data: [
    { id: '1', name: 'Learning new Things' },
    { id: '2', name: 'Solving Problems' },
    { id: '3', name: 'Unix' },
  ],
};
