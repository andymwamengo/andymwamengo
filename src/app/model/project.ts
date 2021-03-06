import { ToolsObject } from './tools';


export interface Project {
  label: string,
  data: DataObject[],
}

export interface DataObject {
  id: string,
  link: string,
  title: string,
  description: string,
  spanText: string,
  toolLabel: string,
  tools: ToolsObject[],
}

export const PROJECT: Project = {
  label: "Projects",
  data: [
    {
      id: '1',
      link: "https://tsiteshare.com",
      title: "tsiteshare",
      description: "tsiteshare is the academic based platform which is a platform for questions, answers, upvotes, downvotes, jobs and academic based events and sharing services provided by the platform. The platform is provided as web application",
      spanText: "and android application in development.",
      toolLabel: "Tools",
      tools: [
        { id: "1", name: "NestJS" },
        { id: "2", name: "Angular" },
        { id: "3", name: "Postgres" },
        { id: "4", name: "Flutter" },
        { id: "5", name: "Redis" },
      ],
    },
    {
      id: '2',
      link: "https://tcnetinc.shop",
      title: "tnetwork",
      description: "tnetwork is the twitter like social network where people can exchange ideas via post, messaging, moments, spaces The platform is provided as web application.",
      spanText: "",
      toolLabel: "Tools",
      tools: [
        { id: "1", name: "NestJS" },
        { id: "2", name: "Angular" },
        { id: "3", name: "Postgres" },
        { id: "4", name: "Flutter" },
        { id: "5", name: "Redis" },
      ],
    },
    {
      id: '3',
      link: "https://mambopoint.com",
      title: "mambopoint",
      description: "mambopoint is a network that intends to support the entire life-span of a middle-class individual. It supports this life-cycle by providing relevant and most needed services at every stage of living. It starts from the moment an individual aspires to enter into a job market to as far as their desire to acquire cars for transport. These are only example services that can be put into the mambopoint platform, many more are welcome.",
      spanText: "",
      toolLabel: "Tools",
      tools: [
        { id: "1", name: "NestJS" },
        { id: "2", name: "Angular" },
        { id: "3", name: "Postgres" },
        { id: "4", name: "Flutter" },
        { id: "5", name: "Redis" },
      ],
    },
    {
      id: '4',
      link: "",
      title: "Hospital Management System",
      description: "Maintaining and Adding new features in the Hospital Management System (TIBANOVA) currently serving more than 16 health Facilities.",
      spanText: "",
      toolLabel: "Tools",
      tools: [
        { id: "1", name: "PHP" },
        { id: "2", name: "Ajax, Jquery" },
        { id: "3", name: "MySQL" },
        { id: "4", name: "RabbitMQ" },
      ],
    },
    {
      id: '5',
      link: "",
      title: "Human Resource Portal",
      description: "Developing Human Resource Management System (HR) portal) having recruitment features, empoyee management and payroll management",
      spanText: "",
      toolLabel: "Tools",
      tools: [
        { id: "1", name: "ExpressJS" },
        { id: "2", name: "Angular" },
        { id: "3", name: "MySQL" },
        { id: "4", name: "Redis" },
      ],
    },
    {
      id: '6',
      link: "",
      title: "Bank Payment Integration",
      description: "Integration of the Hospital Management System with Bank Payments for allowing patients to pay via control number generated in the system and verified by the bank provider",
      spanText: "",
      toolLabel: "Tools",
      tools: [
        { id: "1", name: "ExpressJS" },
        { id: "2", name: "Angular" },
        { id: "3", name: "MySQL" },
        { id: "4", name: "Redis" },
      ],
    },
  ]
};
