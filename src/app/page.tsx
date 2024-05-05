import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      Root page
      <Button variant="destructive">Click me</Button>
      <Badge variant="secondary">Badge</Badge>
    </main>
  );
}
