export type IMode = "DARK" | "LIGHT";

export interface IMenu {
  name: string;
  path?: string;
  childs?: IMenu[];
}
