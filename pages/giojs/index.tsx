import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import * as GIO from "giojs";

const initCountry = "JP";

const Giojs: NextPage = () => {
  const ref = useRef(null);
  const [country, setCountry] = useState(initCountry);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const controller = new GIO.Controller(ref.current, {
      control: {
        initCountry,
      },
    });

    setController(controller);

    controller.init();

    controller.onCountryPicked((country: any) => {
      setCountry(country.ISOCode);
    });
  }, []);

  return <div style={{ width: 500, height: 500 }} ref={ref} />;
};

export default Giojs;
