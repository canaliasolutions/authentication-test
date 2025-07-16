"use client";

import { AuditCard } from "./audit-card";

// Mock data for demonstration
const mockAudits = [
  {
    id: 1,
    client: {
      name: "Banco Nacional de México",
      logo: null,
    },
    stage: "1er Seguimiento",
    standard: "ISO 27001" as const,
    dateRange: {
      start: "2024-12-15",
      end: "2024-12-20",
    },
    status: "scheduled" as const,
  },
  {
    id: 2,
    client: {
      name: "Grupo Industrial Saltillo",
      logo: null,
    },
    stage: "Renovación",
    standard: "ISO 9001" as const,
    dateRange: {
      start: "2024-12-10",
      end: "2024-12-18",
    },
    status: "in-progress" as const,
  }
];

interface DashboardProps {
  searchTerm?: string;
  filterStatus?: string;
  filterStandard?: string;
}

export function Dashboard({
}: DashboardProps) {
  const filteredAudits = mockAudits;

  const handleAuditClick = (auditId: number) => {
    console.log(`Clicked audit ${auditId}`);
    // TODO: Navigate to audit details page
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Lista de auditorías</h1>
        <p className="dashboard-subtitle">
          Gestiona y supervisa todas las auditorías programadas
        </p>
      </div>

      <div className="dashboard-content">
        {filteredAudits.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h3 className="empty-title">No se encontraron auditorías</h3>
            <p className="empty-description">
              No hay auditorías que coincidan con los filtros seleccionados.
            </p>
          </div>
        ) : (
          <div className="audit-grid">
            {filteredAudits.map((audit) => (
              <AuditCard
                key={audit.id}
                client={audit.client}
                stage={audit.stage}
                standard={audit.standard}
                dateRange={audit.dateRange}
                status={audit.status}
                onClick={() => handleAuditClick(audit.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
