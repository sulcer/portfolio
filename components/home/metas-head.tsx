import React from 'react';
import Head from 'next/head';
import GoogleAnalytics from '@/components/home/google-analytics';

const MetasHead = () => {
  return (
    <>
      <GoogleAnalytics
        GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string}
      />
      <Head>
        <meta charSet="utf-8" />
        <title>Gregor Sulcer - Full Stack Software Engineer</title>
        <meta content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          name="description"
          content="Gregor Sulcer, Full Stack Software Engineer specializing in developing robust web applications and ml solutions. Proficient in JavaScript, React, Node.js, and Python. Explore my portfolio to see innovative projects showcasing my coding skills and problem-solving abilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta name="author" content="Gregor Sulcer" />
        <meta
          name="title"
          content="Gregor Sulcer - Full Stack Software Engineer"
        />
        <meta
          name="keywords"
          content="full stack software engineer, Gregor Sulcer, TypeScript, JavaScript, Python, Go, Java, React, Next, Node.js, web development, portfolio, coding, programming, ml"
        />
        <meta
          content="Gregor Sulcer - Full Stack Software Engineer"
          property="og:title"
        />
        <meta
          content="Welcome to the portfolio of Gregor Sulcer, a Full Stack Software Engineer specializing in TypeScript, JavaScript, Python, Go, Java, React, Next, Node.js. With a proven track record in building scalable web applications, I am passionate about creating innovative solutions. Check out my projects and get in touch!"
          property="og:description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default MetasHead;
