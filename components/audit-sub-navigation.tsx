"use client";

import AssignmentIcon from "@mui/icons-material/Assignment";
import WarningIcon from "@mui/icons-material/Warning";
import FolderIcon from "@mui/icons-material/Folder";
import styles from "./AuditSubNavigation.module.css";

interface AuditSubNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function AuditSubNavigation({
  activeTab,
  onTabChange,
}: AuditSubNavigationProps) {
  const tabs = [
    { id: "overview", label: "Resumen", icon: AssignmentIcon },
    { id: "non-conformities", label: "No Conformidades", icon: WarningIcon },
    { id: "files", label: "Archivos", icon: FolderIcon },
  ];

  return (
    <nav className={styles["sub-navigation"]}>
      <div className={styles["nav-container"]}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles["nav-tab"]} ${activeTab === tab.id ? styles["nav-tab-active"] : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <tab.icon className={styles["tab-icon"]} />
            <span className={styles["tab-label"]}>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
