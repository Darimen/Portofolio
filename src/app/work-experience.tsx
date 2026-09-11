
type WorkExperienceI={
    role?:string
    company?:string
    date?:string
    location?:string
    tools?:string[]
    workDone?:string[]
    resp?:string[]
}

export const workExp: WorkExperienceI[]=
[
    {
        role:"Software Engineer Intern",
        company:"Betfair Development Romania",
        date:"03.2026 - present",
        location:"Cluj-Napoca",
        tools:["Java"],
        workDone:["Write code", "learn", "splunk"],
        resp:["none"]
    },
    {
        role:"Software Developer",
        company:"Odaia",
        date:"10.2024 - 02.2026",
        location:"Cluj-Napoca",
        tools:["Java"],
        workDone:["Write code", "learn", "splunk"],
        resp:["none"]
    }
]

export default workExp;
