import homeIcon from "../assets/sidebar-icons/home-icon.svg";
import questionsIcon from "../assets/sidebar-icons/questions-icon.svg";

export const SIDEBAR_LINKS = [
  { name: "Home", href: "/", iconURL: homeIcon },
  { name: "Questions", href: "/questions", iconURL: questionsIcon }
];

export const SERVER_URL = "http://localhost:3000";
export const FOOTER_LINKS = [
  { name: "Link 1", href: "/"},
  { name: "Link 2", href: "/questions"}
];

export const POSTS = [
  {
    name: "Understanding JavaScript Closures",
    body: "A closure is a function having access to the parent scope, even after the parent function has closed.",
    authorName: "Jane Doe",
    createdAt: new Date("2024-11-01T10:15:00"),
  },
  {
    name: "Mastering Async/Await",
    body: "Async/await simplifies working with asynchronous code, making it look synchronous.",
    authorName: "John Smith",
    createdAt: new Date("2024-11-02T12:30:00"),
  },
  {
    name: "CSS Grid: A Beginner's Guide",
    body: "CSS Grid Layout is a two-dimensional layout system for the web.",
    authorName: "Emma Johnson",
    createdAt: new Date("2024-11-03T14:45:00"),
  },
  {
    name: "React Hooks Explained",
    body: "Hooks let you use state and other React features without writing a class.",
    authorName: "William Brown",
    createdAt: new Date("2024-11-04T16:00:00"),
  },
  {
    name: "Node.js Performance Optimization",
    body: "Optimizing Node.js applications is key for building scalable services.",
    authorName: "Sophia Davis",
    createdAt: new Date("2024-11-05T18:15:00"),
  },
  {
    name: "TypeScript: Benefits and Use Cases",
    body: "TypeScript extends JavaScript by adding static types, helping catch errors early.",
    authorName: "James Wilson",
    createdAt: new Date("2024-11-06T20:30:00"),
  },
  {
    name: "Understanding RESTful APIs",
    body: "REST is an architectural style that defines a set of constraints for creating web services.",
    authorName: "Olivia Martinez",
    createdAt: new Date("2024-11-07T09:45:00"),
  },
  {
    name: "Docker for Beginners",
    body: "Docker is a platform for developing, shipping, and running applications in containers.",
    authorName: "Benjamin Taylor",
    createdAt: new Date("2024-11-08T11:00:00"),
  },
  {
    name: "Introduction to Web Accessibility",
    body: "Web accessibility ensures that websites are usable by people with disabilities.",
    authorName: "Charlotte Anderson",
    createdAt: new Date("2024-11-09T13:15:00"),
  },
  {
    name: "Debugging in Chrome DevTools",
    body: "Chrome DevTools provides a powerful set of tools for debugging and inspecting web apps.",
    authorName: "Michael Thomas",
    createdAt: new Date("2024-11-10T15:30:00"),
  },
];