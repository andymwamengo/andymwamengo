

export interface Education {
  label: string,
  data: DataObject[],
}

export interface DataObject {
  id: string,
  institution: string,
  programme: string,
  website: string,
  startDate: string,
  endDate: string,
}

export const EDUCATION: Education = {
  label: "Education",
  data: [
    {
      id: '1',
      institution: "Univeristy of Dar es Salaam",
      programme: "Bachelor of Science in Computer Science",
      website: "https://udsm.com",
      startDate: "2017",
      endDate: "2020",
    },
    {
      id: '2',
      institution: "Bagamoyo Secondary School",
      programme: "PCM",
      website: "https://bagamoyo.sc.tz/",
      startDate: "2015",
      endDate: "2017",
    },
    {
      id: '3',
      institution: "God's Bridge Secondary",
      programme: "Science, Business, ICT and Arts",
      website: "https://godsbridgeschools.org",
      startDate: "2011",
      endDate: "2014",
    },
  ]
};
