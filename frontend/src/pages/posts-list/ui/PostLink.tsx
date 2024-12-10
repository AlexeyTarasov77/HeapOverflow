import { ReactNode } from "react";
import { Link } from "react-router-dom";

export function PostLink({ children, href }: { children: ReactNode; href: string }) {
    return (
      <Link
        className="text-orange-500 transition-colors uppercase font-semibold text-2xl hover:text-orange-600 active:text-red-500"
        to={href}
      >
        {children}
      </Link>
    );
  }