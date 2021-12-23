import exp from "constants";

export interface Panel {
  id: string;
  position?: string;
  isChild?: boolean;
}

export interface IPanelController {
  panels: Panel[];

  addPanel: (panel: Panel) => void;
  removePanel: (panel: Panel) => void;
  getPanel: (panel: Panel) => Panel;
  clearPanels: () => void;
}

class _PanelController {
  public panels: Panel[] = [];

  private addPanel(newPanel): void {
    if (!this.getPanel(newPanel)) {
      this.panels = [...this.panels, newPanel];
    }
  }

  private removePanel(removePanel): void {
    if (this.getPanel(removePanel)) {
      this.panels = this.panels.filter((panel: Panel) => {
        return panel.id !== removePanel.id;
      });
    }
  }

  private getPanel(targetPanel): Panel | undefined {
    return this.panels.find((panel: Panel) => panel.id === targetPanel.id);
  }

  public clearPanels(): void {
    this.panels = [];
  }
}

const PanelController = new _PanelController();

export { PanelController };
