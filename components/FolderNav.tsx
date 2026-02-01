"use client";
import { useState } from "react";
import Folder from "./Folder";

export type FolderTab = "about" | "projects" | "skills";

interface FolderNavProps {
    onTabChange?: (tab: FolderTab) => void;
    activeTab?: FolderTab;
}

export default function FolderNav({ onTabChange, activeTab: controlledTab }: FolderNavProps) {
    const [internalTab, setInternalTab] = useState<FolderTab>("about");
    const activeTab = controlledTab ?? internalTab;

    const handleTabClick = (tab: FolderTab) => {
        if (!controlledTab) {
            setInternalTab(tab);
        }
        onTabChange?.(tab);
    };

    const folders = [
        { id: "about" as FolderTab, label: "About", color: "#5227FF" },
        { id: "projects" as FolderTab, label: "Projects", color: "#FF6B35" },
        { id: "skills" as FolderTab, label: "Skills", color: "#00D9FF" }
    ];

    return (
        <div className="flex gap-6 lg:gap-8 items-end justify-center lg:justify-start">
            {folders.map((folder) => (
                <div
                    key={folder.id}
                    className="relative cursor-pointer transition-all duration-300"
                    onClick={() => handleTabClick(folder.id)}
                >
                    <Folder
                        color={folder.color}
                        size={activeTab === folder.id ? 1.1 : 0.9}
                        className={`transition-all duration-300 ${activeTab === folder.id ? "opacity-100" : "opacity-60 hover:opacity-80"
                            }`}
                    />
                    <div
                        className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-all duration-300 ${activeTab === folder.id
                                ? "text-white dark:text-white opacity-100"
                                : "text-gray-600 dark:text-gray-400 opacity-70"
                            }`}
                    >
                        {folder.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
