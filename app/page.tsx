import { mySQLClient } from "@/lib/mysql-client";

export default async function Home() {
  const client = await mySQLClient();
  const [rows] = await client.query("SELECT * FROM microblog_posts");

  return (
    <div>
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}
