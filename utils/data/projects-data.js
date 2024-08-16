import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Hamlet 3B Information System, Karang Anyar Village',
        description: 
        "I built an information system for the Hamlet 3B Information System Development Project, Karang Anyar Village in 2023 This was motivated by the lack of infrastructure in the village so that information from residents to other residents was hampered.",
        tools: ['HTML 5', 'CSS', 'JS', 'PHP Blade', 'Laravel', 'SQL'],
        role: 'Full Stack Developer',
        code: 'https://github.com/kevinsimorangkir21/Sistem-Informasi-Dusun-SID-3B.git',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'LOST Game Development',
        description: 'In this project, a simple game called LOST is created. A game that presents a gaming experience that combines pixel graphic elements with a turn-based battle system. The game is compiled with the Python and Docker programming languages ​​that are collaborated so that it can play the game well. Some techniques in attacking to healing players so that they bring competition between players in this game.',
        tools: ['Python', 'Docker'],
        role: 'Programming',
        code: '',
        demo: '',
        image: travel,
    },
    // {
    //     id: 3,
    //     name: 'Kedaton Connect Dashboard',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },