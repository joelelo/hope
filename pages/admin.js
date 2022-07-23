import React, { useEffect, useState } from "react";
import ContentTable from "../components/ContentTable";
import { useRouter } from "next/router";
import EditSchedule from "../components/EditSchedule";

const admin = ({ contents, schedule }) => {
  const router = useRouter();
  const [num, setNum] = useState(contents.length);
  const [data, setData] = useState(
    contents.map((content) => {
      return {
        head: content.head,
        text: content.text,
        utubeUrl: content.utubeUrl,
      };
    })
  );
  const columns = [
    {
      Header: "Title",
      accessor: "head",
    },
    {
      Header: "Text",
      accessor: "text",
    },
    {
      Header: "URL",
      accessor: "utubeUrl",
    },
  ];
  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };
  const addRow = () => {
    setData((old) => [...old, { head: "", text: "", utubeUrl: "" }]);
    setNum((num) => {
      return num + 1;
    });
  };
  const removeRow = () => {
    const newd = data;
    newd.pop();
    setData(newd);
    setNum(newd.length);
  };
  const handleSave = async () => {
    console.log(data);
    try {
      await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="px-40">
      <h1 className="text-center text-tit">Admin Panel</h1>
      <ContentTable columns={columns} data={data} updateMyData={updateMyData} />
      <button
        className="mr-5 rounded-xl bg-vin2 p-2 text-white"
        onClick={addRow}
      >
        New Row
      </button>
      <button className="rounded-xl bg-vin2 p-2 text-white" onClick={removeRow}>
        Remove Row
      </button>
      <p>num: {num}</p>
      <button
        onClick={handleSave}
        className="mb-20 rounded-xl bg-green-500 py-2 px-5 text-white"
      >
        Save
      </button>
      <EditSchedule schedule={schedule} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/content");
  const { contents } = await res.json();
  const res2 = await fetch("http://localhost:3000/api/schedule");
  const { schedule } = await res2.json();
  return {
    props: { contents, schedule },
  };
};
export default admin;
