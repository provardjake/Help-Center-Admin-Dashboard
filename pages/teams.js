import Layout from "@/components/Layout";
import Link from "next/link";

export default function Teams(){
    return(
        <Layout>
            <Link className="bg-primary py-1 px-3 rounded-lg" href={"teams/new"}>Add Team</Link>
        </Layout>
    )
}