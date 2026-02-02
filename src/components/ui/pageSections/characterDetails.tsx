import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CharacterDetails() {
  return (
    <div className="relative">
      <h1>Character Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>Character Name</CardTitle>
          <CardDescription>Character Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Character Content</p>
        </CardContent>
        <CardFooter>
          <button className="btn btn-primary">Button</button>
        </CardFooter>
      </Card>
    </div>
  );
}
