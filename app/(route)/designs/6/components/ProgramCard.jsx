// ProgramCard.jsx

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../../../components/ui/card";

export default function ProgramCard({ program }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{program.title}</CardTitle>
        <CardDescription>{program.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{program.content}</p>
      </CardContent>
    </Card>
  );
}
