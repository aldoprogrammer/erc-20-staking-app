import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";

export default function Home() {
  return (
   <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh', width: '100vw'}}>
    <div style={{ textAlign: 'center'}}>
        <ConnectEmbed
          client={client}
          chain={chain}
        />
    </div>
   </div>
  );
}
