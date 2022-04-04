import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
// TODO: tsに対応していないので型エラーがでる。なんとかしたい。
import * as GIO from "giojs";
import data from "./sampleDate";

const initCountry = "JP";

const Giojs: NextPage = () => {
  const ref = useRef(null);

  // TODO: ここなぜか2回呼ばれるので、地球儀が2つ描画されてる
  useEffect(() => {
    const controller = new GIO.Controller(ref.current, {
      control: {
        initCountry,
      },
    });

    controller.addData(data);
    controller.init();
  }, []);

  return <div style={{ width: 1000, height: 1000 }} ref={ref} />;
};

export default Giojs;
