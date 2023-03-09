import { useRouter } from "next/router";

export default function Preview() {
    const router = useRouter();

    console.log(router.query.markdown)

    return <div>{router.query.markdown}</div>;
}
