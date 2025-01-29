import { BarChartHorizontalBig, BookCheckIcon, Calendar, Clock, HelpingHandIcon, icons, Laptop, LucideProps, Share2, Timer, User, UserPlus, Users } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface KeyFeatureProp {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const keyFeatures: KeyFeatureProp[] = [
  {
    icon: Laptop,
    title: "Free Support",
    description:
      "Get and give expert advice on careers and studies without any cost.",
  },
  {
    icon: BookCheckIcon,
    title: "Collaborative Learning",
    description:
      "Connect with like-minded individuals to share knowledge and gain insights from real-world experiences.",
  },
  {
    icon: User,
    title: "Intuitive Platform",
    description:
      "Easily find and provide helpful resources with a user-friendly interface designed for seamless interaction.",
  },
];


export interface TestimonialProp {
    name: string;
    role: string;
    feedback: string;
    photoUrl: string;
  }
  
 export const testimonialsData: TestimonialProp[] = [
    {
      name: "Ravi Kumar",
      role: "Student",
      feedback: "HelpMate provided me with valuable career guidance that helped me make important decisions about my future. Highly recommend it!",
      photoUrl: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Priya Sharma",
      role: "Career Counsellor",
      feedback: "Being a part of HelpMate has allowed me to help students navigate their career paths and provide them with the support they need.",
      photoUrl: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Vikram Singh",
      role: "Entrepreneur",
      feedback: "I received great business advice from the community. The insights I gained here helped me scale my startup and make smarter decisions.",
      photoUrl: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Ananya Gupta",
      role: "Graduate",
      feedback: "HelpMate gave me the confidence to find my first job. I got help with interview tips and career advice from experienced professionals.",
      photoUrl: "https://i.pravatar.cc/150?img=4"
    },
    {
      name: "Arjun Patel",
      role: "Mentor",
      feedback: "It's been a rewarding experience to mentor young individuals on HelpMate. The platform encourages growth and mutual learning.",
      photoUrl: "https://i.pravatar.cc/150?img=5"
    }
  ];
  


export  interface Step {
    title: string;
    description: string;
    icon: React.ElementType;
  }
  
export  const howItWorks: Step[] = [
    {
      title: "Sign Up or Log In",
      description: "Create an account or log in to join the HelpMate community and start exploring.",
      icon : UserPlus
    },
    {
        title: "Set Availability",
        description: "Select your availability and preferences to help others find you.",
        icon : Timer
    },
    {
        title : "Share Your Link",
        description : "Share your unique link with others and let them know you're available for help.",
        icon : Share2
    },
    {
        title : "Get Booked For Help",
        description: "Wait for someone to contact you and schedule a meeting.",
        icon : HelpingHandIcon
    }
  ];  

  interface LayoutOptionProp {
    href : string,
    label : string,
    icon :  ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  }

 export const mainLayoutOptions : LayoutOptionProp[]  = [
    {
      href : "/dashboard",
      label : "Dashboard",
      icon : BarChartHorizontalBig
    },
    {
      href : "/events", 
      label : "Events",
      icon : Calendar
    },
    {
      href : "/meetings",
      label : "Meetings",
      icon : Users
    },
    {
      href : "/availability",
      label : "Availability",
      icon : Clock
    }
  ]