module.exports = {
    locals: {
        meta: {
            title: 'Moutia Benachour',
            description: 'Moutia Benachour portfolio'
        },
        infos: {
            email: 'motia@benachour.me',
            website: 'http://benachour.me'
        },
        skills: [
            { name: 'PHP & Laravel', percentage: '90%', level: 'Advanced' },
            { name: 'Vue', percentage: '85%', level: 'Advanced' },
            { name: 'Databases', percentage: '80%', level: 'Advanced' },
            { name: 'Flutter', percentage: '70%', level: 'Intermediate' }
        ],
        presence: [
            {
                icon: 'github',
                link: 'https://github.com/motia'
            },
            {
                icon: 'linkedin-in',
                link: 'https://www.linkedin.com/in/moutia-benachour/'
            },
            {
                icon: 'stack-overflow',
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
                stack: ['Laravel', 'Nuxt.js', 'PostgreSQL', 'Redis', 'websocket', 'Flutter', 'Onesignal API', 'Stripe API']
            },
            {
                id: 2,
                title: 'Rassidi',
                link: 'https://rassidi.com',
                text: 'A PWA + Laravel API for a store that sells virtual payment cards using the local currency.',
                stack: ['Laravel', 'Nuxt.js', 'Onesignal API', 'MySQL8']
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
