import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SourceTextModule } from "vm";
import { UserProfile } from "@clerk/nextjs";  
export default function Home() {
  return (
     <div>
        <h2>Hello World</h2>
        <Button>Click Me</Button>
        <UserProfile />
     </div>
  );
}
