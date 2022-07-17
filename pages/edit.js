import React, { useEffect, useState } from "react";

const EditSchedule = ({ schedule }) => {
  console.log(schedule);
  //   const schedule = [
  //     [
  //       { content: "06:00", span: "1" },
  //       { content: "prayer", span: "7" },
  //     ],
  //     [
  //       { content: "07:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "08:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "09:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "10:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "11:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "12:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "14:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "16:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "18:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "20:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "22:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //     [
  //       { content: "24:00", span: "1" },
  //       { content: "2", span: "1" },
  //       { content: "3", span: "1" },
  //       { content: "4", span: "1" },
  //       { content: "5", span: "1" },
  //       { content: "6", span: "1" },
  //       { content: "7", span: "1" },
  //       { content: "8", span: "1" },
  //     ],
  //   ];
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
  const handleChange = (e, btn) => {
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
    switch (btn) {
      case 1:
        out = getNew(e, sixs);
        if (out) {
          setSix(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 2:
        out = getNew(e, svns);
        if (out) {
          setSvn(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 3:
        out = getNew(e, eits);
        if (out) {
          setEit(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 4:
        out = getNew(e, nines);
        if (out) {
          setNine(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 5:
        out = getNew(e, tens);
        if (out) {
          setTen(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 6:
        out = getNew(e, eles);
        if (out) {
          setEle(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 7:
        out = getNew(e, twes);
        if (out) {
          setTwe(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 8:
        out = getNew(e, frts);
        if (out) {
          setFrt(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 9:
        out = getNew(e, stns);
        if (out) {
          setStn(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 10:
        out = getNew(e, etns);
        if (out) {
          setEtn(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 11:
        out = getNew(e, tnts);
        if (out) {
          setTnt(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 12:
        out = getNew(e, ttws);
        if (out) {
          setTtw(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 13:
        out = getNew(e, tfrs);
        if (out) {
          setTfr(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
    }
    // console.log(e.target[0]);
  };
  const handleStructChange = (btn) => {
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
    switch (btn) {
      case 1:
        out = getNew(sixs);
        if (out) {
          setSix(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 2:
        out = getNew(svns);
        if (out) {
          setSvn(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 3:
        out = getNew(eits);
        if (out) {
          setEit(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 4:
        out = getNew(nines);
        if (out) {
          setNine(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 5:
        out = getNew(tens);
        if (out) {
          setTen(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 6:
        out = getNew(eles);
        if (out) {
          setEle(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 7:
        out = getNew(twes);
        if (out) {
          setTwe(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 8:
        out = getNew(frts);
        if (out) {
          setFrt(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 9:
        out = getNew(stns);
        if (out) {
          setStn(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 10:
        out = getNew(etns);
        if (out) {
          setEtn(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 11:
        out = getNew(tnts);
        if (out) {
          setTnt(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 12:
        out = getNew(ttws);
        if (out) {
          setTtw(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
      case 13:
        out = getNew(tfrs);
        if (out) {
          setTfr(out);
          alert("success");
        } else {
          alert("error: Jumlahnya harus 8");
        }
        break;
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
    // out.map(async (line, i) => {
    //   console.log({ ind: i, schedule: line });
    //   await fetch("/api/schedule", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ ind: i, schedule: line }),
    //   });
    // });
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
        onSubmit={(e) => handleChange(e, 1)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(1)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 2)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(2)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 3)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(3)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 4)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(4)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 5)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(5)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 6)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(6)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 7)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(7)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 8)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(8)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 9)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(9)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 10)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(10)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 11)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(11)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 12)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(12)}
      />
      <form
        method="post"
        onSubmit={(e) => handleChange(e, 13)}
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
                  ? "col-span-2 bg-vin2"
                  : block.span === "3"
                  ? "col-span-3 bg-vin2"
                  : block.span === "4"
                  ? "col-span-4 bg-vin2"
                  : block.span === "5"
                  ? "col-span-5 bg-vin2"
                  : block.span === "6"
                  ? "col-span-6 bg-vin2"
                  : "col-span-7 bg-vin2"
              }
              defaultValue={block.content}
            />
          );
        })}
        <input
          type="submit"
          value="Change"
          className="bg-yellow-200 text-vin2"
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
        onClick={() => handleStructChange(13)}
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

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/schedule");
  const { schedule } = await res.json();
  console.log(schedule);
  return {
    props: { schedule: schedule },
  };
};

export default EditSchedule;
