import React, { useEffect, useState } from "react";

const EditSchedule = ({ schedule }) => {
  console.log(schedule);
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
    // switch (btn) {
    //   case 1:
    //     out = getNew(e, sixs);
    //     if (out) {
    //       setSix(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 2:
    //     out = getNew(e, svns);
    //     if (out) {
    //       setSvn(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 3:
    //     out = getNew(e, eits);
    //     if (out) {
    //       setEit(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 4:
    //     out = getNew(e, nines);
    //     if (out) {
    //       setNine(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 5:
    //     out = getNew(e, tens);
    //     if (out) {
    //       setTen(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 6:
    //     out = getNew(e, eles);
    //     if (out) {
    //       setEle(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 7:
    //     out = getNew(e, twes);
    //     if (out) {
    //       setTwe(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 8:
    //     out = getNew(e, frts);
    //     if (out) {
    //       setFrt(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 9:
    //     out = getNew(e, stns);
    //     if (out) {
    //       setStn(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 10:
    //     out = getNew(e, etns);
    //     if (out) {
    //       setEtn(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 11:
    //     out = getNew(e, tnts);
    //     if (out) {
    //       setTnt(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 12:
    //     out = getNew(e, ttws);
    //     if (out) {
    //       setTtw(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    //   case 13:
    //     out = getNew(e, tfrs);
    //     if (out) {
    //       setTfr(out);
    //       alert("success");
    //     } else {
    //       alert("error: Jumlahnya harus 8");
    //     }
    //     break;
    // }
    // console.log(e.target[0]);
  };
  const handleStructChange = (fn, btn) => {
    console.log(btn);
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
    console.log(btn);
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
  useEffect(() => {
    console.log(six);
  }, [, six]);
  return (
    <div
      id="schedule"
      className="grid w-full grid-cols-11 gap-y-2 pb-20 text-center text-vin4"
    >
      <div className="bg-vin2 text-vin4">Week</div>
      <div className="bg-vin2 text-vin4">Mon</div>
      <div className="bg-vin2 text-vin4">Tue</div>
      <div className="bg-vin2 text-vin4">Wed</div>
      <div className="bg-vin2 text-vin4">Thu</div>
      <div className="bg-vin2 text-vin4">Fri</div>
      <div className="bg-vin2 text-vin4">Sat</div>
      <div className="bg-vin2 text-vin4">Sun</div>
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
        type="text"
        value={sixs}
        onChange={(e) => {
          setSixs(e.target.value);
          console.log(typeof sixs);
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
