import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vedant T. Kocharekar",
  initials: "VK",
  url: "",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Passionate about automating infrastructure, optimizing deployments, and leveraging cloud technologies to build scalable and resilient systems.",
  summary:
    "I am a passionate DevOps and Cloud enthusiast dedicated to optimizing software development and delivery processes. With a strong foundation in automation, continuous integration, and cloud infrastructure, I thrive on transforming complex systems into streamlined, efficient workflows. My experience spans various tools and technologies, enabling me to foster collaboration between development and operations teams, enhance scalability, and improve system reliability.",
  avatarUrl: "/boy.jpg",
  skills: [
    "Linux",
    "Git",
    "AWS",
    "Azure",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VedantTK",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vedantkocharekar",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "St. Francis Institute of Technology",
      href: "https://www.sfit.ac.in/",
      degree: "Bachelor's Degree of Electronics and Telecommunication",
      logoUrl: "/sfit.jpg",
      end: "2024",
    },
    {
      school: " Vidyavardhini's Bhausaheb Vartak Polytechnic",
      href: "https://vbvp.edu.in/",
      degree: "Diploma in Electronics and Telecommunication",
      logoUrl: "/bvp.png",
      end: "2021",
    },
  ],
  
} as const;
