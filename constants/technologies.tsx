import { ReactNode } from 'react';
import {
  SiNestjs,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiFramer,
  SiGo,
  SiFirebase,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFastapi,
  SiMongoose,
  SiPrisma,
  SiReactquery,
  SiAstro,
  SiGraphql,
  SiJavascript,
  SiPhp,
  SiAwslambda,
  SiSpringboot,
  SiDrizzle,
  SiQuarkus,
} from 'react-icons/si';

interface ITechnology {
  icon: ReactNode;
  url: string;
  name: string;
}

export const technologies: ITechnology[] = [
  {
    icon: <SiTypescript size={'2em'} />,
    url: 'https://www.typescriptlang.org/',
    name: 'Typescript',
  },
  {
    icon: <SiPython size={'2em'} />,
    url: 'https://www.python.org/',
    name: 'Python',
  },
  { icon: <SiNodedotjs />, url: 'https://nodejs.org/en/', name: 'Node.js' },
  {
    icon: <SiTailwindcss size={'2em'} />,
    url: 'https://tailwindcss.com/',
    name: 'Tailwindcss',
  },
  {
    icon: <SiNestjs size={'2em'} />,
    url: 'https://nestjs.com/',
    name: 'NestJS',
  },
  {
    icon: <SiExpress size={'2em'} />,
    url: 'https://www.express.com/',
    name: 'Express',
  },
  {
    icon: <SiMongodb size={'2em'} />,
    url: 'https://www.mongodb.com/',
    name: 'MongoDB',
  },
  {
    icon: <SiSocketdotio size={'2em'} />,
    url: 'https://socket.io/',
    name: 'Socket.io',
  },
  {
    icon: <SiMysql size={'2em'} />,
    url: 'https://www.mysql.com/',
    name: 'MySQL',
  },
  {
    icon: <SiReact size={'2em'} />,
    url: 'https://reactjs.org/',
    name: 'React',
  },
  {
    icon: <SiNextdotjs size={'2em'} />,
    url: 'https://nextjs.org/',
    name: 'Next.js',
  },
  {
    icon: <SiRedux size={'2em'} />,
    url: 'https://redux.js.org/',
    name: 'Redux',
  },
  {
    icon: <SiSass size={'2em'} />,
    url: 'https://sass-lang.com/',
    name: 'Sass',
  },
  {
    icon: <SiFramer size={'2em'} />,
    url: 'https://www.framer.com/motion/',
    name: 'Framer-Motion',
  },
  { icon: <SiGo size={'2em'} />, url: 'https://go.dev/', name: 'Go' },
  {
    icon: <SiFirebase size={'2em'} />,
    url: 'https://firebase.google.com/',
    name: 'Firebase',
  },
  {
    icon: <SiPostgresql size={'2em'} />,
    url: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
  },
  { icon: <SiGit size={'2em'} />, url: 'https://git-scm.com/', name: 'Git' },
  {
    icon: <SiDocker size={'2em'} />,
    url: 'https://www.docker.com/',
    name: 'Docker',
  },
  {
    icon: <SiFastapi size={'2em'} />,
    url: 'https://fastapi.tiangolo.com/',
    name: 'FastAPI',
  },
  {
    icon: <SiMongoose size={'2em'} />,
    url: 'https://www.mongooose.com/',
    name: 'Mongoose',
  },
  {
    icon: <SiPrisma size={'2em'} />,
    url: 'https://www.prisma.io/',
    name: 'Prisma',
  },
  {
    icon: <SiAstro size={'2em'} />,
    url: 'https://astro.build/',
    name: 'Astro',
  },
  {
    icon: <SiGraphql size={'2em'} />,
    url: 'https://graphql.org/',
    name: 'GraphQL',
  },
  {
    icon: <SiJavascript size={'2em'} />,
    url: 'https://www.javascript.com/',
    name: 'JavaScript',
  },
  {
    icon: <SiPhp size={'2em'} />,
    url: 'https://www.php.net/',
    name: 'php',
  },
  {
    icon: <SiReactquery size={'2em'} />,
    url: 'https://tanstack.com/query/latest/',
    name: 'ReactQuery',
  },
  {
    icon: <SiAwslambda size={'2em'} />,
    url: 'https://aws.amazon.com/lambda/',
    name: 'AWS',
  },
  {
    icon: <SiSpringboot size={'2em'} />,
    url: 'https://aws.amazon.com/lambda/',
    name: 'SpringBoot',
  },
  {
    icon: <SiDrizzle size={'2em'} />,
    url: 'https://orm.drizzle.team/',
    name: 'Drizzle',
  },
  {
    icon: <SiQuarkus size={'2em'} />,
    url: 'https://quarkus.io/',
    name: 'Quarkus',
  },
];
