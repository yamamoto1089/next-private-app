import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
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

    controller.setStyle("mint");

    // // 地球表面(国境)の色(デフォルト値:#FFFFFF)
    // controller.setSurfaceColor("#FFFFFF");

    // // 選択した国の色(デフォルト値:#FFFFFF)
    // controller.setSelectedColor("#FFFFFF");

    // // 選択した国から出ていくラインの色(デフォルト値:#DD380C)
    // controller.setExportColor("#DD380C");

    // // 選択した国に入ってくるラインの色(デフォルト値:#154492)
    // controller.setImportColor("#154492");

    // // 地球の輪郭の色(デフォルト値:#FFFFFF)
    // controller.setHaloColor("#FFFFFF");

    // // 背景色(デフォルト値:#000000)
    // controller.setBackgroundColor("#000000");

    // // 海の明るさ[0~1](デフォルト値:0.5)
    // controller.adjustOceanBrightness(0);

    // // 関連する国の明るさ[0~1](デフォルト値:0.5)
    // controller.adjustRelatedBrightness(0.5);

    // // メンションされた国を光らせるか(デフォルト値:false)
    // controller.lightenMentioned(false);

    // // メンションされた国の光度[0~1](デフォルト値:0.5)
    // controller.adjustMentionedBrightness(0.5);

    // データの追加
    controller.addData(data);

    controller.init();
  }, []);

  // return <div style={{ width: 800, height: 800 }} ref={ref} />;
  return <div style={{ width: 1440, height: 800 }} ref={ref} />;
};

export default Giojs;
