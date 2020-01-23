const projects = [
    {
        name: "stylish",
        stack: ['Javascript','HTML5', 'CSS3'],
        skills: ['Javascript','HTML5', 'CSS3','svg','javascript','DOM manipulation'],
        type: 'Web',
        visibleKeywords:['frontend'],
        githubUrl: 'https://github.com/AnnaFinnerty/stylish',
        url: 'https://annafinnerty.github.io/stylish/',
        src: ['./img/Stylish1.png'],
        description: 'Interactive logo prototype for hair salon',
        caseStudy: [
            'A fun weekend project to get back into pure js.',
            'I used the prototype pattern to sync up user input with a bunch of fun hairstyles. Inputs are dynamically displayed based on the current hairstyle.',
            'Illustrations were created in Inkscape, but are displayed as PNGs -- not SVG, an upgrade I plan to make in the future',
            '  '
        ],
        live: true,
        start: true,
        left: true,
        dark: false,
        logoColor: 'black',
        titleColor: 'white',
        arrowColor: 'dimgray',
        dotColor: 'dimgray',
        bannerColor: 'black',
        buttonColor: 'black',
        borderColor: 'black',
        font: 'Pacifico',
        collaborators: []
    },
    {
        name: "habit",
        stack: ['EJX','Express.js','Mongoose', 'MongoDB'],
        skills: ['EJX','Express.js','Mongoose', 'MongoDB','agile teamwork', 'Node.js','javascript'],
        type: 'App',
        visibleKeywords:['frontend','backend',],
        url: 'https://gahabit-app.herokuapp.com/',
        githubUrl: 'https://github.com/walter74ucla/Project-2',
        src: ['./img/Habit1.png'],
        description: 'Habit tracker app with RESTful routes',
        caseStudy: [
            'Habit is a full CRUD app that allows users to create and track the development of personal habits.',
            'My partner and I started by building out the backend in Express and Mongoose, creating multiple related models to track users created behaviors, as well as instances of those behaviors',
            'Since privacy was important to us, users could could whether they wanted to be visible to other users.',
            '  '
        ],
        live: true,
        start: false,
        logoColor: 'orange',
        titleColor: 'darkorange',
        arrowColor: 'orange',
        dotColor: 'orange',
        bannerColor: 'black',
        buttonColor: 'darkorange',
        borderColor: 'orange',
        font: 'Righteous',
        collaborators: [{
            name: 'Walter Sylvester',
            url: 'https://github.com/walter74ucla'
        }]
    },
    {
        name: "still breaking",
        stack: ['React.js','Python', 'Flask', 'SQL', 'API'],
        skills: ['React.js','Python', 'Flask', 'SQL', 'API','React-Semantic-UI','Node.js','javascript'],
        type: 'App',
        visibleKeywords:['frontend','backend','agile teamwork'],
        url: 'https://still-breaking-react.herokuapp.com/',
        githubUrl: 'https://github.com/tbone9/still-breaking-react',
        src: ['./img/StillBreaking1.png'],
        description: 'News content discovery app with multiple APIs',
        caseStudy: [
            'Still breaking allows users to keep track of ongoing news stories before they fall through the cracks,',
            'Using NewsAPI, my partner and I allows registered users to search and save for stories, create topics to group stories, and saved their most search topics',
            "Optimized for mobile usage, Still Breaking has a clean, modern interface with multiple modals.",
            '  '
        ],
        live: true,
        start: false,
        logoColor: 'dodgerblue',
        titleColor: 'navy',
        arrowColor: 'navy',
        dotColor: 'navy',
        bannerColor: 'black',
        buttonColor: 'navy',
        borderColor: 'dodgerblue',
        font: 'Special Elite',
        collaborators: [{
            name: 'Tyler Walker',
            url: 'https://github.com/tbone9'
        }]
    },
    {
        name: "citadels",
        stack: ['React.js', 'CSS3', 'AI'],
        skills: ['React.js', 'CSS3', 'AI','svg','Node.js','javascript'],
        type: 'Game',
        visibleKeywords:['frontend','backend'],
        url: 'https://annafinnerty.github.io/Citadels/',
        githubUrl: 'https://github.com/AnnaFinnerty/Citadels',
        src: ['./img/Citadels1.png'],
        description: 'React game with AI opponent',
        caseStudy: [
            'One of my first projects in React.js, but still one of my favorites',
            "This turn-based game-takeover game simple enough when played against another player, but I struggled for months to make an AI that was suitably easy for 'easy' mode. It simply wanted to win!",
            "Amazingly enough, most of it's behavior is random -- with a little distance calculation of the closest route to your citadel!",
            '  '
        ],
        live: true,
        start: true,
        logoColor: 'dodgerblue',
        titleColor: 'coral',
        arrowColor: 'coral',
        dotColor: 'dodgerblue',
        bannerColor: 'black',
        buttonColor: 'dodgerblue',
        borderColor: 'coral',
        font: "Bowlby One SC",
        collaborators: []
    },
    {
        name: "Word Wrap",
        stack: ['Javascript','HTML5', 'CSS'],
        type: 'Game',
        visibleKeywords:['frontend','backend'],
        url: 'https://annafinnerty.github.io/Citadels/',
        githubUrl: '',
        src: '',
        description: 'Animated JS game using prototype pattern',
        caseStudy: [],
        live: false,
        start: true,
        logoColor: 'white',
        titleColor: 'white',
        arrowColor: 'black',
        dotColor: 'black',
        bannerColor: 'black',
        buttonColor: 'black',
        borderColor: 'black',
        font: 'Helvetica',
        collaborators: []
    },
    {
        name: "color wheel",
        stack: ['HTMLCanvas', 'HTML5', 'CSS3'],
        skills: ['HTMLCanvas', 'HTML5', 'CSS3','agile teamwork','javascript'],
        type: 'Game',
        visibleKeywords:['frontend','backend'],
        url: 'https://annafinnerty.github.io/named_colorwheel/',
        githubUrl: 'https://github.com/AnnaFinnerty/named_colorwheel',
        src: ['./img/ColorWheel1.png'],
        description: 'Color picker for HTML named colors',
        caseStudy: [
            "My first ever complete project -- with my partner's help!",
            "I wanted to explore using HTML5 canvas to create a useful tool, and had just learned about CSS named colors, and thought it would be fun to have an interactive tool to explore them.",
            "The default value shows the colors sorted, and then drawn in a circle, arranged by rgb values. Click the slider on the side to see other sorts.",
            "Click to see differently complementary pairings -- all done with some simple trigonometry.",
            "A lot of math, but a project I'm still proud of completing.",
            '  '
        ],
        live: true,
        start: true,
        logoColor: 'magenta',
        titleColor: 'greenyellow',
        arrowColor: 'magenta',
        dotColor: 'greenyellow',
        bannerColor: 'black',
        buttonColor: 'magenta',
        borderColor: 'magenta',
        font: 'Permanent Marker',
        collaborators: [{
            name: 'Michael Finnerty',
            url: 'https://github.com/MichaelJamesFinnerty'
        }]
    },    
    {
        name: "library",
        stack: ['Express.js','JSX', 'Mongoose', 'MongoDB'],
        type: 'App',
        visibleKeywords:['frontend','backend'],
        url: '',
        githubUrl: '',
        src: ['./img/Habit1.png'],
        description: 'books read/to read app in Express.js',
        caseStudy: [],
        live: false,
        start: true,
        logoColor: 'white',
        titleColor: 'white',
        arrowColor: 'black',
        dotColor: 'white',
        bannerColor: 'black',
        buttonColor: 'black',
        borderColor: 'black',
        font: 'Times New Roman',
        collaborators: []
    },
    {
        name: "maura",
        stack: ['Java','jdbc', 'Jackson'],
        type: 'Java Program',
        visibleKeywords:['backend'],
        url: '',
        githubUrl: '',
        src: [''],
        description: 'Interface to algorhytymic match generator between missing persons and unidentified remains',
        caseStudy: [],
        live: false,
        start: false,
        logoColor: 'white',
        titleColor: 'white',
        arrowColor: 'black',
        dotColor: 'white',
        bannerColor: 'black',
        buttonColor: 'black',
        borderColor: 'black',
        font: 'Courier',
        collaborators: []
    },
    {
        name: "Song Battle",
        stack: ['React.js','Firestore'],
        skills: ['React.js','Firestore','Node.js','noSQL'],
        type: 'web app',
        visibleKeywords:['backend'],
        url: 'https://song-battle.herokuapp.com/',
        githubUrl: 'https://github.com/AnnaFinnerty/mingle-react',
        src: ['./img/SongBattle1.png'],
        description: 'Playlist sharing app with game feature',
        caseStudy: [
            "This was my capstone project for General Assembly, and it's very much still a work in progress",
            "It allows users to collectively load Youtube videos on an external site and collectively vote on whether or not they like the song -- perfect for parties",
            "Creators can start playlists, invite users to join, and keep records of playlists -- while the users ids are temporary, and expire unless they sign up",
            "I'm still working out live upvoting and downvoting, but it's been a great challenge!",
            '  '
        ],
        live: true,
        start: false,
        logoColor: 'firebrick',
        titleColor: 'white',
        arrowColor: 'firebrick',
        dotColor: 'white',
        bannerColor: 'black',
        buttonColor: 'firebrick',
        borderColor: 'firebrick',
        font: 'Rock Salt',
        collaborators: [],
    }
]

export default projects