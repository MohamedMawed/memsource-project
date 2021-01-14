export interface ProjectType {
  id: string;
  name: string;
  sourceLang: string;
  targetLangs: Array<string>;
  status: string;
  internalId: number;
  dateDue: string | null;
  client: string | null;
  owner: {
    userName: string;
  };
}

export interface TitleValueProps {
  title: string;
  value: string | number;
}
