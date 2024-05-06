export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const info = {
    cvURL:'https://drive.google.com/file/d/1VVXqGHppn-FTENpsVlnxW7HVh_dXb2z-/view',
    firstName: "Mridul",
    lastName: "Munjal",
    initials: "js", 
    position: "a Full Stack Developer",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        
        {
            emoji: "📧",
            text: "mridulmunjal98@gmail.com"
        },
        {
            emoji: '🌎',
            text: 'based in Gurugram,Haryana,India'
        },
        {
            emoji: "💼",
            text: "Senior Developer at Virtusa"
        },
        {
            emoji: '☕',
            text: 'fueled by coffee!'
        },
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: [`Hello! I'm Mridul. I'm a senior developer at Virtusa.`,
     `I am pursuing M.tech at BITS`,
     ` I believe AI will inevitably rule us all one day.`,
     `You should hire me!`],
    skills:
        {
            proficientWith: ['javascript', 'react', 'angular','git', 'github', 'bootstrap', 'html5', 'css3', 'tailwind'],
            exposedTo: ['nodejs', 'python','babel','parcel','webpack']
        }
    ,
        experience : [
            {
              companyName: 'Virtusa Consulting Ltd.',
              duration: "Sept'22 - Till Date",
              techstack: [ 'Angular','ReactJS' , 'Redux', 'NodeJS', ],
              summary:
                '<p>As a Senior Software Developer at Virtusa, I contribute to projects in Banking Domains.</br> My expertise in <span>ReactJS</span> & <span>Angular</span> enables me to deliver cutting-edge web solutions, enhancing <span>user experiences</span> and ensuring <span>optimal</span> performance.</br> With a focus on creating <span>efficient</span>, <span>user-friendly</span> applications, I drive innovation and excellence in technology, prioritize best practices in my development approach.</p>',
              points: [
                '<div>Implemented advanced code-splitting and lazy-loading techniques in ReactJS to optimize application performance, resulting in significantly reduced load times and improved overall user satisfaction.</div>',
                
              ],
            },
            {
              companyName: 'Excavate Research & Analysis',
              duration: "Aug'20 - Sept'22",
              techstack: ['ReactJS', 'Redux', 'NodejS', 'ExpressJS', 'MySQL'],
              summary:
                '<p>As a software developer at Excavate, I contributed in automation of dashboards and PPT reports. Also, closely working with NielsenIQ development team.</p>',
              points: [
                '<div>Developed UI of different standalone products for multiple partners such as Nielsen IQ, Ipsos, Etihad, etc.</div>',
                '<div>Collaborated in automation for creating a whole policy creation flow that automates more than <span>5k products</span> for multiple partners.</div>',
                '<div>Developed an application named <span>Vendor Management</span>, from scratch using <span>ReactJS</span> and <span>NodeJS</span> which allows vendor to keep track of their costing & commissioning of project.</div>',
              ],
            }
          ],

    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [

        // {
        //     title: "Project 2",
        //     live: "https://mm.dev",
        //     source: "https://github.com/",
        //     image: mock2
        // },
        // {
        //     title: "Project 3",
        //     live: "https://mm.dev",
        //     source: "https://github.com/",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://mm.dev",
        //     source: "https://github.com/",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://mm.dev",
        //     source: "https://github.com/",
        //     image: mock5
        // }
    ]
}