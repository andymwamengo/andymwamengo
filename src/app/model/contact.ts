
export interface Contact {
  label: string,
  data: DataObject[],
}

export interface DataObject {
  id: string,
  label: string,
  link: string,
  name: string,
  icon: string,
}

export const CONTACT: Contact = {
  label: "Contacts",
  data: [
    {
      id: '1',
      label: "Email",
      link: "mailto:andymwamengo@gmail.com",
      name: "andymwamengo@gmail.com",
      icon: "assets/email.svg",
    },
    {
      id: '2',
      label: "GitHub",
      link: "https://github.com/andymwamengo",
      name: "https://github.com/andymwamengo",
      icon: "assets/github.svg",
    },
    {
      id: '3',
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/andymwamengo/",
      name: "https://www.linkedin.com/in/andymwamengo/",
      icon: "assets/linkedin.svg",
    },
    {
      id: '4',
      label: "Twitter",
      link: "https://twitter.com/andymwamengo",
      name: "https://twitter.com/andymwamengo",
      icon: "assets/twitter.svg",
    },
  ]
};
