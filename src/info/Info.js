import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,4)", "rgb(23,90,223)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kimana",
    lastName: "Misago",
    initials: "MK", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Senior Developer & Cloud Architect",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🤖',
            text: 'specializing in GenAI & Cloud-Native'
        },
        {
            emoji: '🌍',
            text: "based in Côte d'Ivoire (West Africa)"
        },
        {
            emoji: "💼",
            text: "CEO & Co-Founder at Mplaces Africa / DOMOSO"
        },
        {
            emoji: "📧",
            text: "kimana.misago@mplaces.africa"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/KimPliskin/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/kimpliskin225/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/kimitoshikurosawa",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kimana-misago-b62564131/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Kim_Pliskin",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "A Senior Full-Stack Developer and Cloud Architect with 9 years of experience, now specializing in Generative AI and Cloud-Native solutions. I build high-impact applications, from complex IoT systems to large-scale FinTech platforms. As a proven tech leader and co-founder, recently certified in Kubernetes and Google's Gemini API, I am passionate about driving innovation. Let's connect.",
    skills: {
        proficientWith: [
            'PHP (Laravel, Symfony)', // 
            'Python (Django, Flask)', // 
            'Node.js', // 
            'React.js', // 
            'Flutter', // 
            'AWS', // 
            'Google Cloud (GCP)', // 
            'Docker', // 
            'Kubernetes', // 
            'Generative AI (Gemini, OpenAI)', // 
            'Terraform', // 
            'CI/CD', // 
            'Agile/Scrum', // 
            'Git',
            'GitHub'
        ],
        exposedTo: ['TensorFlow', 'Vertex AI', 'Tailwind CSS'] //
        }
    ,
    hobbies: [
        {
            label: 'Basketball', // 
            emoji: '🏀'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Technology',
            emoji: '👨‍💻'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'video games',
            emoji: '🎮'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [
        {
            title: "AI-Powered English Accent Detection Portal",
            live: "http://accent-detector.domoso.ci", // Link to the live project
            source: "https://github.com/kimitoshikurosawa", // Link to your GitHub
            image: mock2
        },
        {
            title: "Social Media Content Generator LLM",
            live: "https://github.com/kimitoshikurosawa/social_media_content_generator", // Link to the live project
            source: "https://github.com/kimitoshikurosawa/social_media_content_generator", // Link to the repository
            image: mock5
        },
        {
            title: "DomoSo - IoT & SaaS Platform",
            live: "https://domoso.ci", // 
            source: "https://github.com/kimitoshikurosawa",
            image: mock4
        },
        {
            title: "Hypérion 2 - Reinsurance Platform",
            live: "https://hyperion.africa", //
            source: "https://github.com/kimitoshikurosawa",
            image: mock3
        },
        {
            title: "Mplaces - African Online Market",
            live: "https://mplaces.africa", //
            source: "https://github.com/kimitoshikurosawa",
            image: mock1
        }
    ],
    volunteering: [ // This is where your portfolio projects will be detailed
        {
            title: "Aide",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ],

}