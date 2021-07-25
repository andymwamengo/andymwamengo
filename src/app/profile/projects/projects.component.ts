import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'SmartEdu Platform',
      desc: '',
      livedemo: 'http://www.tcnetinc.com',
      imgUrl: 'assets/images/smartedu.png',
      tech: 'Angular 11, NestJS, Postgres, Redis '
    },

    {
      id: 2,
      title: 'Microfinance Monitoring System',
      desc: '',
      // livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      // githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      // mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/mms.png',
      tech: 'Django, Angular, Postgres, Machine Learning(Sklearn), Redis'
    },


    // {
    //   id: 3,
    //   title: 'Mambopoint Web Applocation',
    //   desc: '',
    //   livedemo: 'https://mambopoint-web.web.app/auth/login',
    //   // githurl: 'https://github.com/mehulk05/Blog-using-mean',
    //   // mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
    //   imgUrl: 'assets/images/mambopoint.png',
    //   tech: 'NestJS, Angular, Postgres'
    // },
    // {
    //   id: 5,
    //   title: 'Human Resource System',
    //   desc: '',
    //   // livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
    //   // githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
    //   // mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
    //   imgUrl: 'assets/images/hr.png',
    //   tech: 'Express, NodeJS, MySQL, Angular, Redis'
    // },
    {
      id: 4,
      title: 'Offensive words Detection REST API',
      desc: '',
      // livedemo: 'https://chatapp-using-node.herokuapp.com/',
      // githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      // mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/offensive.png',
      tech: 'Flask, Python, Machine Learning(Deep Learning)'
    },
  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
