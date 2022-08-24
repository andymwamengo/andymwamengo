
export interface Contact {
  label: string,
  data: DataObject[],
}

export interface DataObject {
  id: string,
  label: string,
  link: string,
  name: string,
}

export const CONTACT: Contact = {
  label: "Contacts",
  data: [
    {
      id: '1',
      label: "Email",
      link: "mailto:andymwamengo@gmail.com",
      name: "andymwamengo@gmail.com",
    },
    {
      id: '2',
      label: "Website",
      link: "https://andymwamengo.com",
      name: "https://andymwamengo.com",
    },
    {
      id: '3',
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/andymwamengo/",
      name: "https://www.linkedin.com/in/andymwamengo/",
    },
    {
      id: '4',
      label: "Twitter",
      link: "https://twitter.com/andymwamengo",
      name: "https://twitter.com/andymwamengo",
    },
    {
      id: '5',
      label: "GitHub",
      link: "https://github.com/andymwamengo",
      name: "https://github.com/andymwamengo",
    },
  ]
};
