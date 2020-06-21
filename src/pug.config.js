const fs = require('fs');
const path = require('path');
const svgToDataURL = require('svg-to-dataurl')

const loadSvg = function (name) {
    const svgStr = fs.readFileSync(path.join(__dirname, 'assets', 'svg', `${name}.svg`));
    return svgToDataURL(svgStr)
}

module.exports = {
    locals: {
        meta: {
            title: 'Moutia Benachour\'s portfolio',
            description: 'Moutia Benachour portfolio',
            author: 'Moutia Benachour'
        },
        profile: {
            name: 'Moutia Benachour',
            title: 'Fullstack Developer',
            imageAlt: 'Moutia Benachour'
        },
        infos: {
            email: 'motia@benachour.me',
            website: 'http://benachour.me'
        },
        skills: [
            { name: 'PHP', percentage: '90%', level: 'Advanced' },
            { name: 'Javascript/Typescript', percentage: '85%', level: 'Advanced' },
            { name: 'Databases', percentage: '80%', level: 'Advanced' },
            { name: 'Java', percentage: '70%', level: 'Advanced' },
            { name: 'Flutter', percentage: '70%', level: 'Intermediate' },
            { name: 'Go', percentage: '60%', level: 'Intermediate' }
        ],
        presence: [
            {
                icon: loadSvg('github'),
                link: 'https://github.com/motia'
            },
            {
                icon: loadSvg('linkedin'),
                link: 'https://www.linkedin.com/in/moutia-benachour/'
            },
            {
                icon: loadSvg('stackoverflow'),
                link: 'https://stackoverflow.com/users/6501536/motia'
            }
        ],
        experiences: [
            {
                title: 'Full Stack Developer',
                from: 'May 2018',
                to: 'Present',
                company: 'Dromigo',
                text: 'As a technical co-founder of Dromigo, a platform where carriers and ' +
                'shippers can find loads and freight, I developed a PWA to allow the users ' +
                'make their deals and a mobile app to help drivers track their loads.'
            },
            {
                title: 'Consultant',
                from: 'Jun 2018',
                to: 'Jun 2019',
                company: 'Adsument',
                text: 'Consulting at Adsumnet, an IOT stratup. I offered advices on the stack choices concerning the web and offered mentoring for their developers.'
            },
            {
                title: 'Freelance web developer',
                comapny: 'Self employed',
                from: 'June 2016',
                to: 'Present',
                text: 'As a freelance web developer I built websites and web apps for small to medium companies. ' +
                'Those projects encapsulate simple business showcasing websites and CRM web apps with real time capabilities'
            },
            {
            	title: 'Junior Java Desktop Developer',
                comapny: 'Self employed',
                from: 'April 2016',
                to: 'June 2016',
                text: 'I built a simple stock management application for desktop for a local shop'            	
            }
        ],
        // aboutMe: `Hello`,
        projects: [
            {
                id: 1,
                title: 'Dromigo',
                link: 'https://dromigo.com',
                text: 'A platform where carriers and ' +
                    'shippers can find loads and freight, I developed a PWA to allow the users ' +
                    'make their deals and a mobile app to help drivers track their loads.',
                stack: ['PHP', 'Doctrine', 'Nuxt.js', 'PostgreSQL', 'Redis', 'websockets', 'node.js', 'Flutter', 'Docker', 'PWA', 'Onesignal API', 'Stripe API']
            },
            {
                id: 5,
                title: 'Pages Jaunes Algérie',
                link: 'https://play.google.com/store/apps/details?id=com.pagesjaunes.smartpj&hl=en',
                text: 'An address book for Algerian businesses which allows users to contact them or view their locations. '+
                    'Also, It is designed to provide the best UX for slow internet connections in mind, so it '+
                    'uses caching for screens API data and saving favorite business for offline browsing.',
                stack: ['Vue.js', 'Quasar Framework', 'Cordova'],
            },
            {
                id: 2,
                title: 'Rassidi',
                link: 'https://rassidi.com',
                text: 'A PWA + Laravel API for a store that sells virtual payment cards using the local currency.',
                stack: ['Laravel', 'Eloquent', 'Nuxt.js', 'Vue.js', 'Onesignal API', 'PostgreSQL']
            },
            {
    			id: 3,
                title: 'Adgon Expert',
                link: '#',
                text: 'A CRM for expert geometers. It is also equiped with a public search engine for the subscribed experts.'
                + 'Subscribed experts have access to a CRM dashboard, news pages and current tenders according to their subscription plan.',
                stack: ['Laravel', 'Doctrine', 'Nuxt.js', 'Onesignal API', 'MySQL5']
            },
            {
            	id: 4,
            	title: 'Medic Dz',
            	link: '#',
            	text: 'A mobile for appointment management at medical offices. Both the normal users and the service provider can the appointments status and availablity in realtime',
                stack: ['Laravel', 'Elqouent', 'Vue.js', 'Quasar Framework', 'PostgreSQL', 'Onesignal', 'websocket', 'node.js', 'cordova', 'PWA']
            }
        ],
        otherProjects: [
            {
                title: 'Arafood',
                text: 'A mobile application using flutter for real time food order monitoring. It '+
                'was destined for the busy fast foods inside the University of Blida.'
            },
            {
                title: 'Laravel translations port',
                text: 'A Laravel package to help import/export Laravel translations(including the missing ones!) to/from your separate frontend apps.',
                link: 'https://github.com/motia/laravel-translations-port',
                seeMore : {
                    link: 'https://github.com/motia/laravel-translations-port',
                    text: 'explore'
                }
            },
            {
            	title: 'Loginsrv-Grpc',
            	text: 'Golang library for scalable per request gRPC authentication. It comes with a gRPC service and interceptors for attaching and validating the JWT token.',
            	liink: 'https://github.com/motia/loginsrv-grpc',
            	seeMore: {
            		link: 'https://github.com/motia/loginsrv-grpc',
            		text: 'explore'
            	}
            }
        ],
        languages: [
            {
                name: 'Arabic',
                level: 'Native speaker',
                rating: 5
            },
            {
                name: 'English',
                level: 'Professional proficiency',
                rating: 4
            },
            {
                name: 'French',
                level: 'Professional proficiency',
                rating: 4
            }
        ],
        conferences: [
            {
                name: 'State Management in Flutter',
                location: 'Google IO Extended - Algiers, July 2019'
            }
        ],
        education: [
            {
                degree: 'MSc in Automation and Control',
                university: 'USTHB - Algiers',
                time: '2015-2017'
            },
            {
                degree: 'BSc in Electrical Engineering',
                university: 'ENST - Algiers',
                time: '2012-2015'
            }
        ]
    }
}
