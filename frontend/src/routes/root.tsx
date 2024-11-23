import { Layout } from "../components/layout";
import { Outlet } from "react-router-dom";
import { sidebarLinks } from "../constants";

export function Root() {
    return (
        <Layout links={sidebarLinks}>
            <div className="w-full h-full"><Outlet /></div>
        </Layout>
    )
}