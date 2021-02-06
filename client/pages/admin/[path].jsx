import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  return <pre>{JSON.stringify(router)}</pre>;
}
