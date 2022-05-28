import { ToolsObject } from "./tools";

export interface Skills {
  label: string,
  data: DataObject[],
}

export interface DataObject {
  id: string,
  title: string,
  subTitle?: string,
  extraTitle?: string,
  tools: ToolsObject[],
  subtools: ToolsObject[] | undefined,
  extratools: ToolsObject[] | undefined,
}

export const SKILLS: Skills = {
  label: "Skills",
  data: [
    {
      id: '1',
      title: "Programming Languages",
      tools: [
        { id: "1", name: "JavaScript" },
        { id: "2", name: "Typescript" },
        { id: "3", name: "Dart" },
        { id: "4", name: "PHP" },
        { id: "5", name: "Python" },
      ],
      subTitle: "Also worked with programming",
      subtools: [
        { id: "1", name: "Java" },
        { id: "2", name: "Kotlin" },
      ],
      extraTitle: "Exploring",
      extratools: [
        { id: "1", name: "Rust" },
        { id: "2", name: "Golang" },
        { id: "3", name: "C++" },
      ],
    },
    {
      id: '2',
      title: "Framework Tools",
      tools: [
        { id: "1", name: "NodeJS (Express & NestJS)" },
        { id: "2", name: "Angular" },
        { id: "3", name: "Flutter" },
        { id: "4", name: "Laravel" },
        { id: "5", name: "Django" },
      ],
      subTitle: "Also worked with programming",
      subtools: [
        { id: "1", name: "SpringBoot" },
        { id: "2", name: "Flask" },
        { id: "3", name: "Electron" },
      ],
      extraTitle: "Exploring",
      extratools: [
        { id: "1", name: "Actix" },
        { id: "2", name: "Gin" },
        { id: "3", name: "Machine Learning" },
      ],
    },
    {
      id: '3',
      title: "Databases",
      tools: [
        { id: "1", name: "Postgres" },
        { id: "2", name: "MySQL" },
        { id: "3", name: "Microsoft SQL Server" },
        { id: "4", name: "MongoDB" },
        { id: "5", name: "Sqlite" },
        { id: "6", name: "Redis" },
      ],
      subTitle: "",
      subtools: [
        // { id: "", name: "" },
        // { id: "", name: "" },
      ],
      extraTitle: "Exploring",
      extratools: [
        { id: "1", name: "Casandra" },
      ],
    },
    {
      id: '4',
      title: "Development Tools",
      tools: [
        { id: "1", name: "Docker" },
        { id: "2", name: "CI/CD with GitHub Action" },
        { id: "3", name: "Nginx & Apache Deployment" },
        { id: "4", name: "Bash scripting" },
        { id: "5", name: "Pm2" },
      ],
      subTitle: "",
      subtools: [
        // { id: "", name: "" },
        // { id: "", name: "" },
      ],
      extraTitle: "Exploring",
      extratools: [
        { id: "1", name: "Docker Swarm" },
        { id: "2", name: "Kubernetes" },
      ],
    },
    {
      id: '5',
      title: "API Development",
      tools: [
        { id: "1", name: "REST" },
      ],
      subTitle: "",
      subtools: [
        // { id: "", name: "" },
        // { id: "", name: "" },
      ],
      extraTitle: "Exploring",
      extratools: [
        { id: "1", name: "GraphQL" },
      ],
    },
    {
      id: '6',
      title: "Design UI",
      tools: [
        { id: "1", name: "REST" },
        { id: "2", name: "Figma" },
        { id: "3", name: "Material Design" },
        { id: "4", name: "Boostrap" },
        { id: "5", name: "CSS, SCSS" },
      ],
      subTitle: "",
      subtools: [
        { id: "", name: "" },
        { id: "", name: "" },
      ],
      extraTitle: "Exploring",
      extratools: [
        { id: "1", name: "Tailwind" },
      ],
    },
    {
      id: '7',
      title: "Languages",
      tools: [
        { id: "1", name: "English" },
        { id: "1", name: "Swahili" },
      ],
      subTitle: "",
      subtools: [
        // { id: "", name: "" },
        // { id: "", name: "" },
      ],
      extraTitle: "",
      extratools: [
        // { id: "", name: "" },
      ],
    },
    {
      id: '8',
      title: "Project Management Tools",
      tools: [
        { id: "1", name: "Jira" },
        { id: "1", name: "Clickup" },
      ],
      subTitle: "",
      subtools: [
        // { id: "", name: "" },
        // { id: "", name: "" },
      ],
      extraTitle: "",
      extratools: [
        // { id: "", name: "" },
      ],
    },
  ]
};
