'use client'

import { useRouter } from "next/navigation";
import LoadingComponent from "../components/LoadingComponent.tsx/LoadingComponent";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/posts/1");
  },[])

  return (
    <div>
      <LoadingComponent />
    </div>
  );
}
