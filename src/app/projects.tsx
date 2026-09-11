import { ProjectStructI } from "./components/project-card";

export const projects: ProjectStructI[] = [
    {
        title: "Odaia",
        description: "Odaia is a platform that is designed to help its users to find tennants, roommates and to manage household utility bills.",
        challenges: ["Design a scalable database schema", "Manage application deployment and environment setup", "Optimize api calls performance"],
        responsabilities: ["Fullstack development", "DevOps", "Database management", "Server administration"],
        imageUrl: "odaia.png",
        projectUrl: "https://test.odaia.eu",
        tags: ["HTML", "CSS", "JS", "TS", "NJS",
            "RJS", "TCSS", "JSX", "SB", "JAV",
            "RST", "SQL", "PSQL", "DOCK", "EC2",
            "GCPB", "LIN", "GHB", "CF", "NGX",
            "CBOT", "PMAN"
        ],
        moreDetails:"Odaia is a platform whose intention is to help the romanian housing market to opperate more easily for the people, by providing a platform where roommates and rents are in one place, unlike the current situation where people have to search different websites and facebook groups to find a rent and a roommate. This is our first startup project, and we are continuously working to improve it and add new features. My position in the company (beside co-founder) is that of a fullstack developer and DevOps, me being the generalist of the team, helping with backend and frontend developement, but also mananging the server infrastructure and deployment pipelines."
    },
    {
        title: "Movie Recommendation Website",
        description: "A web application that lets users search for movies, view details, leave reviews and get recommendations based on the movie.\n\n This was a group project made for Software Engineering course at university. It was our first contact with Spring Boot framework and REST API development.",
        imageUrl: "movie_site.png",
        responsabilities: ["Security implementation", "Database management"],
        gitUrl: "https://github.com/Casee1/Movie-recommendation-system-Springboot",
        tags: ["HTML", "CSS", "JS", "AXO", "RJS", "JAV", "RST", "MDB", "GHB",
            "SB", "JSX", "PMAN"
        ],
        moreDetails:"This project, was a classical university project, we were a team of 3 people, and this was our first spring boot project, and we decided to use MongoDB for it because we could work with a distributed database where we would see the same data while developing on localhost. My actual contribution to the project was the database pick and data modeling, and security implementation (password hashing, which I know it's in the wrong place of the application, but it was a learning and experimenting opportunity)."
    },
    {
        title: "Pong game",
        description: "Pong game, written in Unity. The game is one computer, multiplayer, using the arrow keys and wasd controls.\n This project was made as an experiment with Unity game engine.",
        gitUrl: "https://github.com/Darimen/PongGame",
        tags: ["CSH", "UNT"],
        moreDetails:"This was my \"I want to be a game dev\" period. I wanted to learn how to make games in Unity, started with trying to make a game of Pacman, realised \"It is going to take a lot to make the models for the ghosts\" and decided to try to make Pong instead. The game is very basic, had fun and got annoyed at the game because the way I wrote the ball acceleration made the ball clip through the paddles."
    },
    {
        title: "Stack Overflow",
        description: "A copy of the website Stack Overflow, made using ReactJS for the frontend and Java Spring Boot for the backend.\n The project featured the usual account creation and management functionalities, but also the ability to ask and answer questions in a threaded format and vote on answers.\n This was a university laboratory project.",
        gitUrl: "https://github.com/Darimen/ProjectStackOverflow_TandeaDarius",
        tags: ["RJS", "SB", "JAV", "RST", "SQL", "PSQL", "HTML", "CSS", "JS", "JSX", "TCSS",
            "GHB", "PMAN"
        ]
    },
    {
        title: "CNC 2D Plotter",
        description: "Another university project. The project consists of a 2D plotter that can draw on a piece of paper using G-code commands. The plotter is controlled by an Arduino board and uses stepper motors for the horizontal movement, and a servo motor for the movement of the pen.",
        gitUrl: "https://github.com/Darimen/CNC2DPlotter",
        tags: ["PY", "CPP", "INO", "M3D", "BLD"],
        moreDetails:"This was a solo project for univesirty, the requirements were to build a laser cutting machine, bun logistic speaking, the task was adapted for a plotter. The project could have been made in many ways, the options were: \n \t\t 1. make a software which lets you draw, then generates the g-code and simulates the movement of a cutter. \n \t\t 2. make the thing either using a CD/DVD Writer or design your own components and control them.  \n I chose to pick the 2nd option and designed the machine in fusion 360, created a python app to allow the user to draw the shapes he wants to \"cut\" and the python program translates the drawing to g-code and sends it to arduino where arduino reads the code and translates it by moving the motors."
    },
    {
        title: "Some Sort of Social Media Platform",
        description: "A social media platform that allows users to create profiles, connect with friends, and make posts. The project was VERY basic itteration of a more complex social media platform that I later developed for my license project.",
        gitUrl: "https://github.com/Darimen/SomeSortOfSocialMedia",
        tags: ["JAV", "SQL", "PSQL"]
    },
    {
        title: "Co-working space management app",
        description: "This project was also a university project. The application is the front-end of a co-working space management system that allows users to book desks, meeting rooms and manage their subscriptions, but also allows the admin to manage the resources of the co-working space.",
        tags: ["RJS", "JS", "HTML", "CSS", "TCSS", "JSX", "GHB"]
    },
    {
        title: "Energy management system",
        description: "A web application that allows users to monitor and manage their energy consumption. The project was made as a university project and features data visualization using charts and graphs, as well as user authentication and authorization, where users can create accounts and log in to view their energy consumption data and admin users can manage all the users and their data.",
        tags: ["RJS", "JS", "SB", "JAV", "RST", "SQL", "PSQL", "TFK", "DOCK",
            "HTML", "CSS", "TCSS", "JSX", "AJX", "RMQ", "PMAN"
        ]
    },
    {
        title: "YASPAI",
        description: "This is my license thesis project, and it is a social media platform, based on microservices, mostly written in Java Spring Boot and one in Python for its integration with AI. I used GraphQL for the back for frontend microservice, REST for creating the security endpoints (auth), and the microservices communicate through gRPC.\nThe frontend of the application is developed in NextJS for it's built in compilator, offering the SEO optimizations and faster web navigation for the users.",
        tags: ["HTML", "CSS", "JS", "TS", "NJS", "JAV",
            "RJS", "JSX", "GHB", "GRPC", "CBOT",
            "DOCK", "LIN", "CF", "DGS", "TCSS", "GQL", "SQL", "PSQL",
            "NGX", "SB", "PY", "RST", "PMAN"],
        responsabilities: ["Fullstack development", "DevOps", "Database management", "Server administration", "Microservices architecture design"],
        challenges: ["Design a scalable microservices architecture", "Implement secure authentication and authorization", "Optimize inter-service communication", "Deploy and manage microservices in a cloud like environment", "Integrate AI functionalities using Python", "Ensure data consistency across microservices", "Implement GraphQL for efficient data fetching", "Handle real-time updates and notifications"],
        projectUrl: "https://licenta.dariustandea.com",
    }
];
