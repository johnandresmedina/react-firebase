export type ProjectBaseType = {
  title: string;
  authorId: string;
  authorFirstName: string;
  authorLastName: string;
  createdAt: number;
  content: string;
};

export type ProjectType = { id: string } & ProjectBaseType;
