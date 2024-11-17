import { Layout } from "../components/layout";
import homeIcon from "../assets/sidebar-icons/home-icon.svg";
import questionsIcon from "../assets/sidebar-icons/questions-icon.svg";

const sidebarLinks = [
    { name: "Home", href: "/", iconURL: homeIcon },
    { name: "Questions", href: "/questions", iconURL: questionsIcon },
]

export function Root() {
    return (
        <Layout links={sidebarLinks}>
            <div className="flex flex-col items-center mt-10 w-full">
                <h1 className="text-3xl">Welcome to HeapOverflow!</h1>
                <p className="mt-4 text-slate-400">
                    It's a developpers forum where you can ask your questions, and get answers and explanations.
                </p>
            </div>
        </Layout>
    )
}