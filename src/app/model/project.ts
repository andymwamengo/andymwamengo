import { ToolsObject } from './tools';

export interface Project {
  label: string;
  data: DataObject[];
}

export interface DataObject {
  id: string;
  link: string;
  title: string;
  company?: string;
  projectDate?: string;
  description: string;
  spanText: string;
  toolLabel: string;
  tools: ToolsObject[];
}

export const PROJECT: Project = {
  label: 'Projects',
  data: [
    {
      id: '4',
      link: 'https://mambopoint.com',
      title: 'mambopoint',
      projectDate: '03/2021 - Now',
      company: 'Marimba Informatics Limited',
      description:
        'mambopoint is a network that intends to support the entire life-span of a middle-class individual. It supports this life-cycle by providing relevant and most needed services at every stage of living. It starts from the moment an individual aspires to enter into a job market to as far as their desire to acquire cars for transport.',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'NestJS' },
        { id: '2', name: 'Angular' },
        { id: '3', name: 'Postgres' },
        { id: '4', name: 'Flutter' },
        { id: '5', name: 'Redis' },
      ],
    },
    {
      id: '70',
      link: 'https://play.google.com/store/apps/details?id=smartcodes.tz.co.myapplication',
      title: 'Rifaly',
      company: 'Smart Africa Group(SAG)',
      projectDate: '12/2022 - Now',
      description:
        'Discover exciting unlimited content whether its reading newspapers, books, magazines, articles, or listening to audio content',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'Android' },
        { id: '2', name: 'Kotlin' },
        { id: '3', name: 'ExpressJS' },
        { id: '4', name: 'Redis' },
      ],
    },
    {
      id: '71',
      link: 'https://dev.timelydoc.com',
      title: 'Timelydoc',
      projectDate: '03/2022 - 11/2022',
      company: 'Codeblock TZ',
      description:
        'Google Drive alternative for managing documents/attachments with premium features',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'NestJS' },
        { id: '2', name: 'REST/Graphql' },
        { id: '3', name: 'Postgres' },
        { id: '4', name: 'Redis' },
        { id: '5', name: 'GitHub Actions,' },
      ],
    },
    // {
    //   id: '72',
    //   link: 'https://codeblock.co.tz/',
    //   title: 'CodePlay',
    //   projectDate: '03/2022 - 11/2022',
    //   company: 'Codeblock TZ',
    //   description:
    //     'Spotify/Apple Music/BoomPlay alternative for musics/songs arts with premium and different business model',
    //   spanText: '',
    //   toolLabel: 'Tools',
    //   tools: [
    //     { id: '1', name: 'Go' },
    //     { id: '2', name: 'Gin' },
    //     { id: '3', name: 'REST/Graphql' },
    //     { id: '4', name: 'Postgres' },
    //     { id: '5', name: 'Redis' },
    //   ],
    // },
    {
      id: '5',
      link: 'http://www.truebitstech.com/',
      title: 'Hospital Management System',
      projectDate: '03/2021 - 01/2022',
      company: 'True Bits Technologies',
      description:
        'Maintaining and Adding new features in the Hospital Management System (TIBANOVA), The system manages all activities in the hospital (patients, staffs, insurers)',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'PHP' },
        { id: '2', name: 'Ajax, Jquery' },
        { id: '3', name: 'MySQL' },
        { id: '4', name: 'Redis' },
      ],
    },
    {
      id: '6',
      link: 'http://www.truebitstech.com/',
      title: 'Human Resource Portal',
      company: 'True Bits Technologies',
      projectDate: '05/2021 - 12/2021',
      description:
        'Developing Human Resource Management System (HR) portal) having recruitment features, employee management and payroll management',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'ExpressJS' },
        { id: '2', name: 'Angular' },
        { id: '3', name: 'MySQL' },
        { id: '4', name: 'Redis' },
      ],
    },
    {
      id: '7',
      link: 'http://www.truebitstech.com/',
      title: 'Bank Payment Integration',
      company: 'True Bits Technologies',
      projectDate: '09/2021 - 12/2022',
      description:
        'Integration of the Hospital Management System with Bank Payments for allowing patients to pay via control number generated in the system and verified by the bank provider',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'ExpressJS' },
        { id: '2', name: 'Angular' },
        { id: '3', name: 'MySQL' },
        { id: '4', name: 'Redis' },
      ],
    },
    {
      id: '1',
      link: 'https://tsiteshare.com',
      title: 'tsiteshare',
      projectDate: '01/2021 - Now',
      company: 'Tcnet Inc(Self Project)',
      description:
        'tsiteshare is the academic based platform which is a platform for questions, answers, upvotes, downvotes, jobs and academic based events and sharing services provided by the platform. The platform is provided as web application',
      spanText: 'and android application in development.',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'NestJS' },
        { id: '2', name: 'Angular' },
        { id: '3', name: 'Postgres' },
        { id: '4', name: 'Flutter' },
        { id: '5', name: 'Redis' },
      ],
    },
    {
      id: '2',
      link: 'https://tnetwork-ea738.web.app',
      title: 'tnetwork',
      projectDate: '05/2022 - Now',
      company: 'Tcnet Inc(Self Project)',
      description:
        'tnetwork is the twitter like social network where people can exchange ideas via post, messaging, moments, spaces The platform is provided as web application.',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'NestJS' },
        { id: '2', name: 'Angular' },
        { id: '3', name: 'Postgres' },
        { id: '4', name: 'Flutter' },
        { id: '5', name: 'Redis' },
        { id: '6', name: 'GitHub Actions' },
      ],
    },
    {
      id: '3',
      link: 'https://drive.google.com/file/d/1lBnW-Paw6QP3fGd9uZDLJ-EpnuABoN8-/view?usp=sharing',
      title: 'bitm',
      projectDate: '07/2022 - Now',
      company: 'Tcnet Inc(Self Project)',
      description:
        'bitm is the mobile application for providing end to end transactions, communication and exchange of data via RSA (Public, Private, digital signature, encryption and description). This mobile app has features including offline data storage when no network and plus many more.',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'ExpressJS' },
        { id: '2', name: 'Firebase' },
        { id: '3', name: 'Postgres' },
        { id: '4', name: 'Flutter' },
        { id: '5', name: 'Redis' },
      ],
    },
    {
      id: '80',
      link: 'andymwamengo@gmail.co',
      title: ' More Projects',
      projectDate: '2019 - Now',
      company: 'More Projects',
      description:
        '.Net, SpringBoot, Django, ML, Android, ReactJS, CI/CD, GitHub Actions, Integrations, Software Tools',
      spanText: '',
      toolLabel: 'Tools',
      tools: [
        { id: '1', name: 'Software Tools' },
      ],
    },
  ],
};
