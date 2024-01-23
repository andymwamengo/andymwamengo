export interface Article {
  label: string;
  data: DataObject[];
}

export interface DataObject {
  id: string;
  link: string;
  name: string;
}

export const ARTICLES: Article = {
  label: 'Articles',
  data: [
    {
      id: '1',
      link: 'https://dev.to/andymwamengo/how-to-create-and-generate-migrations-in-typeorm-03-with-nestjs-9-4g55',
      name: 'How to create and generate migrations in Typeorm 0.3+ with NestJS 9+',
    },
    {
      id: '2',
      link: 'https://dev.to/andymwamengo/how-to-write-a-data-seeder-helper-in-nestjs-9-with-typeorm-03-239k',
      name: 'How to write a Data Seeder Helper in NestJS 9+ with Typeorm 0.3+',
    },
    {
      id: '2',
      link: 'https://dev.to/andymwamengo/how-to-write-a-base-service-for-your-nestjs-rest-api-using-typeorm-version-03-489f',
      name: 'How to write a base service for your NestJS REST API using Typeorm Version 0.3+',
    },
  ],
};
