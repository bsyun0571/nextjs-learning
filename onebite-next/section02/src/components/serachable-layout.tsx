import { ReactNode } from "react";

export default function SearchableLayout({
    children
}:{
    children:ReactNode;
}){
    return (
        <div>
            <div>Searchable Layout</div>
            {children}
        </div>
    )
}