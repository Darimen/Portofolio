export const tags =
{

    "HTML": "HTML",
    "CSS": "CSS",
    "JS": "Javascript",
    "JQ": "jQuery",
    "AX": "Ajax",
    "AJX": "Ajax",
    "AXO": "Axios",
    "TCSS": "TailwindCSS",
    "NJS": "NextJS",
    "RJS": "ReactJS",
    "TS": "Typescript",
    "JSX": "JSX",
    "SB": "Spring Boot",
    "DGS": "Netflix DGS",
    "JAV": "Java",
    "RMQ": "RabbitMQ",
    "RST": "REST",
    "GRPC": "GRPC",
    "GQL": "GraphQL",
    "SQL": "SQL",
    "PSQL": "ProgreSQL",
    "MDB": "MongoDB",
    "DOCK": "Docker",
    "EC2": "AWS",
    "GCPS": "GCP Bucket",
    "LIN": "Linux",
    "GIT": "GitHub",
    "PMAN": "Postman",
    "CF": "Cloudflare",
    "NGINX": "nginx",
    "CERTBOT": "Certbot",
    "TRA": "Traefik",
    "C/C++": "C/C++",
    "C#": "C#",
    "UNITY": "Unity",
    "PY": "Python",
    "INO": "Arduino IDE",
    "3D": "3D Modelling",
    "BLENDER": "Blender"
}

export function getTagAbb(tag: string): string {
    const entries = Object.entries(tags);
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] === tag) {
            return entries[i][0];
        }
    }
    return tag;
}

export function getTagFull(tag: string): string {
    // @ts-expect-error
    return tags[tag] ? tags[tag] : tag;

}


