import React, { useEffect, useState } from "react";

const EditSchedule = ({ schedule }) => {
  const [six, setSix] = useState(schedule[0].schedule);
  const [svn, setSvn] = useState(schedule[1].schedule);
  const [eit, setEit] = useState(schedule[2].schedule);
  const [nine, setNine] = useState(schedule[3].schedule);
  const [ten, setTen] = useState(schedule[4].schedule);
  const [ele, setEle] = useState(schedule[5].schedule);
  const [twe, setTwe] = useState(schedule[6].schedule);
  const [frt, setFrt] = useState(schedule[7].schedule);
  const [stn, setStn] = useState(schedule[8].schedule);
  const [etn, setEtn] = useState(schedule[9].schedule);
  const [tnt, setTnt] = useState(schedule[10].schedule);
  const [ttw, setTtw] = useState(schedule[11].schedule);
  const [tfr, setTfr] = useState(schedule[12].schedule);
  //struct
  const [sixs, setSixs] = useState(
    six
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [svns, setSvns] = useState(
    svn
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [eits, setEits] = useState(
    eit
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [nines, setNines] = useState(
    nine
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [tens, setTens] = useState(
    ten
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [eles, setEles] = useState(
    ele
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [twes, setTwes] = useState(
    twe
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [frts, setFrts] = useState(
    frt
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [stns, setStns] = useState(
    stn
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [etns, setEtns] = useState(
    etn
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [tnts, setTnts] = useState(
    tnt
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [ttws, setTtws] = useState(
    ttw
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const [tfrs, setTfrs] = useState(
    tfr
      .map((block) => {
        return block.span;
      })
      .toString()
  );
  const handleChange = (e, fn, btn) => {
    e.preventDefault();
    const getNew = (e, st) => {
      const temp = st.split(",");

      if (temp.reduce((sum, a) => sum + parseInt(a), 0) === 8) {
        return temp.map((block, i) => {
          if (e.target[i] !== undefined) {
            if (e.target[i].value !== "Change") {
              return { content: e.target[i].value, span: block };
            }
          }
          return { content: "", span: block };
        });
      }
      return false;
    };
    let out = false;
    out = getNew(e, btn);
    if (out) {
      fn(out);
      alert("success");
    } else {
      alert("error: Jumlahnya harus 8");
    }
  };
  const handleStructChange = (fn, btn) => {
    const getNew = (st) => {
      const temp = st.split(",");
      if (temp.reduce((sum, a) => sum + parseInt(a), 0) === 8) {
        return temp.map((sp, i) => {
          if (i === 0) return { content: st[0].content, span: "1" };
          return { content: "", span: sp };
        });
      }
      return false;
    };
    let out = false;
    out = getNew(btn);
    if (out) {
      fn(out);
      alert("success");
    } else {
      alert("error: Jumlahnya harus 8");
    }
  };
  const handleSave = async () => {
    const out = [
      six,
      svn,
      eit,
      nine,
      ten,
      ele,
      twe,
      frt,
      stn,
      etn,
      tnt,
      ttw,
      tfr,
    ];
    await fetch("/api/schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(out),
    });
  };
  return (
    <div
      id="schedule"
      className="grid w-full grid-cols-11 gap-y-2 pb-20 text-center text-white"
    >
      <div className="bg-vin2">Week</div>
      <div className="bg-vin2">Mon</div>
      <div className="bg-vin2">Tue</div>
      <div className="bg-vin2">Wed</div>
      <div className="bg-vin2">Thu</div>
      <div className="bg-vin2">Fri</div>
      <div className="bg-vin2">Sat</div>
      <div className="bg-vin2">Sun</div>
      <div></div>
      <div></div>
      <div></div>
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setSix, sixs)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {six.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={sixs}
        onChange={(e) => {
          setSixs(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setSix, sixs)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setSvn, svns)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {svn.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={svns}
        onChange={(e) => {
          setSvns(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setSvn, svns)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setEit, eits)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {eit.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={eits}
        onChange={(e) => {
          setEits(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setEit, eits)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setNine, nines)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {nine.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={nines}
        onChange={(e) => {
          setNines(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setNine, nines)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setTen, tens)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {ten.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={tens}
        onChange={(e) => {
          setTens(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setTen, tens)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setEle, eles)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {ele.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={eles}
        onChange={(e) => {
          setEles(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setEle, eles)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setTwe, twes)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {twe.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={twes}
        onChange={(e) => {
          setTwes(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setTwe, twes)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setFrt, frts)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {frt.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={frts}
        onChange={(e) => {
          setFrts(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setFrt, frts)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setStn, stns)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {stn.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={stns}
        onChange={(e) => {
          setStns(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setStn, stns)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setEtn, etns)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {etn.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={etns}
        onChange={(e) => {
          setEtns(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setEtn, etns)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setTnt, tnts)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {tnt.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={tnts}
        onChange={(e) => {
          setTnts(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setTnt, tnts)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setTtw, ttws)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {ttw.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={ttws}
        onChange={(e) => {
          setTtws(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setTtw, ttws)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, setTfr, tfrs)}
        className="col-span-8 grid grid-cols-9 grid-rows-1"
      >
        {tfr.map((block, i) => {
          return (
            <input
              key={i}
              type="text"
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Save Line"
          className="bg-green-300 text-vin2"
        />
      </form>
      <input
        className="text-vin2"
        type="text"
        value={tfrs}
        onChange={(e) => {
          setTfrs(e.target.value);
        }}
      />
      <input
        type="button"
        value="Reset"
        className="bg-yellow-200 text-vin2"
        onClick={() => handleStructChange(setTfr, tfrs)}
      />
      <div></div>
      <div></div>
      <div></div>
      <input
        onClick={handleSave}
        type="button"
        value="Save"
        className="col-span-3 mt-10 bg-green-500"
      />
    </div>
  );
};

export default EditSchedule;
