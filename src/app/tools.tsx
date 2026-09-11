export type ToolI = {
  class: ToolClassification;
  displayName: ToolDisplayName;
  acronym: ToolAcronym;
};

export enum ToolClassification {FRONTEND, BACKEND, DATABASE, DEVOPS, OTHER }

export enum ToolDisplayName {
  HTML = "HTML",
  CSS = "CSS",
  JAVASCRIPT = "Javascript",
  JQUERY = "jQuery",
  AJAX = "Ajax",
  AXIOS = "Axios",
  TAILWINDCSS = "TailwindCSS",
  NEXTJS = "NextJS",
  REACTJS = "ReactJS",
  TYPESCRIPT = "Typescript",
  JSX = "JSX",
  SPRING_BOOT = "Spring Boot",
  NETFLIX_DGS = "Netflix DGS",
  JAVA = "Java",
  RABBITMQ = "RabbitMQ",
  REST = "REST",
  GRPC = "GRPC",
  GRAPHQL = "GraphQL",
  SQL = "SQL",
  POSTGRESQL = "ProgreSQL",
  MONGODB = "MongoDB",
  DOCKER = "Docker",
  AWS = "AWS",
  GCP_BUCKET = "GCP Bucket",
  LINUX = "Linux",
  GITHUB = "GitHub",
  POSTMAN = "Postman",
  CLOUDFLARE = "Cloudflare",
  NGINX = "nginx",
  CERTBOT = "Certbot",
  TRAEFIK = "Traefik",
  CPP = "C/C++",
  CSHARP = "C#",
  UNITY = "Unity",
  PYTHON = "Python",
  ARDUINO = "Arduino IDE",
  MODELLING_3D = "3D Modelling",
  BLENDER = "Blender",
}

export enum ToolAcronym {HTML, CSS, JS, JQ, AJX, AXO, TCSS, JSX, NJS, RJS, TS, SB, DGS, JAV, RMQ, RST, GRPC, GQL, SQL, PSQL, MDB, DOCK, EC2, GCPB, LIN, GHB, PMAN, CF, NGX, CBOT, TFK, CPP, CSH, UNT, PY, INO, M3D, BLD}

export const tools: ToolI[] = [
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.HTML, acronym: ToolAcronym.HTML },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.CSS, acronym: ToolAcronym.CSS },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.JAVASCRIPT, acronym: ToolAcronym.JS },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.JQUERY, acronym: ToolAcronym.JQ },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.AJAX, acronym: ToolAcronym.AJX },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.AXIOS, acronym: ToolAcronym.AXO },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.TAILWINDCSS, acronym: ToolAcronym.TCSS },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.NEXTJS, acronym: ToolAcronym.NJS },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.REACTJS, acronym: ToolAcronym.RJS },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.TYPESCRIPT, acronym: ToolAcronym.TS },
  { class: ToolClassification.FRONTEND, displayName: ToolDisplayName.JSX, acronym: ToolAcronym.JSX },

  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.SPRING_BOOT, acronym: ToolAcronym.SB },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.NETFLIX_DGS, acronym: ToolAcronym.DGS },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.JAVA, acronym: ToolAcronym.JAV },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.RABBITMQ, acronym: ToolAcronym.RMQ },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.REST, acronym: ToolAcronym.RST },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.GRPC, acronym: ToolAcronym.GRPC },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.GRAPHQL, acronym: ToolAcronym.GQL },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.PYTHON, acronym: ToolAcronym.PY },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.CPP, acronym: ToolAcronym.CPP },
  { class: ToolClassification.BACKEND, displayName: ToolDisplayName.CSHARP, acronym: ToolAcronym.CSH },

  { class: ToolClassification.DATABASE, displayName: ToolDisplayName.SQL, acronym: ToolAcronym.SQL },
  { class: ToolClassification.DATABASE, displayName: ToolDisplayName.POSTGRESQL, acronym: ToolAcronym.PSQL },
  { class: ToolClassification.DATABASE, displayName: ToolDisplayName.MONGODB, acronym: ToolAcronym.MDB },

  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.DOCKER, acronym: ToolAcronym.DOCK },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.AWS, acronym: ToolAcronym.EC2 },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.GCP_BUCKET, acronym: ToolAcronym.GCPB },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.LINUX, acronym: ToolAcronym.LIN },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.GITHUB, acronym: ToolAcronym.GHB },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.POSTMAN, acronym: ToolAcronym.PMAN },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.CLOUDFLARE, acronym: ToolAcronym.CF },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.NGINX, acronym: ToolAcronym.NGX },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.CERTBOT, acronym: ToolAcronym.CBOT },
  { class: ToolClassification.DEVOPS, displayName: ToolDisplayName.TRAEFIK, acronym: ToolAcronym.TFK },

  { class: ToolClassification.OTHER, displayName: ToolDisplayName.UNITY, acronym: ToolAcronym.UNT },
  { class: ToolClassification.OTHER, displayName: ToolDisplayName.ARDUINO, acronym: ToolAcronym.INO },
  { class: ToolClassification.OTHER, displayName: ToolDisplayName.MODELLING_3D, acronym: ToolAcronym.M3D },
  { class: ToolClassification.OTHER, displayName: ToolDisplayName.BLENDER, acronym: ToolAcronym.BLD },
];