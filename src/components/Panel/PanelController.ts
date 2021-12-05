import { getHighestZIndex } from "./utils/getHighestZIndex";

export interface Panel {
  id: string;
  zIndex?: number;
}

export class PanelController {
  private readonly getHighestZIndex: () => number;

  private panels: Panel[] = [];

  public initialHighestZIndex = null;

  constructor(
    getHighestZIndex: () => number,
  ) {
    this.getHighestZIndex = getHighestZIndex;

    this.init();
  }

  private init(): void {
    window.addEventListener('load', () => {
      this.initialHighestZIndex = this.getHighestZIndex();
    });
  }

  public addPanel(panel: Panel): void {
    const found = this.panels.find((panelItem: Panel) => panelItem.id === panel.id);

    if (!found) {
      const zIndex = this.getHighestZindex();
      const newPanel = {
        ...panel,
        zIndex: zIndex
      };

      this.panels = [...this.panels, newPanel];
    }
  }

  public removePanel(panel: Panel): void {
    const found = this.panels.find((panelItem: Panel) => panelItem.id === panel.id);

    if (found) {
      this.panels = this.panels.filter((panelItem: Panel) => {
        return panelItem.id !== panel.id;
      });
    }
  }

  public getHighestZindex(): number {
    return getHighestZIndex();
  }
}
