import { useLayoutEffect } from "react";
import { DataTable } from "@/components/Table";
import { columns } from "@/components/Table/columns";
import useAppStore from "@/stores/app.store";
import { Payment } from "@/utils/types";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

const Home = async () => {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Home