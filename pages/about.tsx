import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div>
        <Head>
            <title>About | NikkeDev</title>
        </Head>
        <div className="max-w-[800px] m-auto pt-1">
            <h1 className="text-5xl font-bold text-sky-600 md:text-6xl pb-2 m-4">About me</h1>
            <p className="text-white text-lg m-4">
                Hello! My name is Niklas, I'm a teen from Imatra, Finland. I am interested in programming and server maintenance. I also like listening to music and playing video games.
                <br /><br />
                I mainly develop web applications. I usually use JavaScript, TypeScript, PHP, HTML and CSS languages. I have also used Java and Python in some projects, but I use them less often.
            </p>
        </div>
    </div>
  );
}

export default About;