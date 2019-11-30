import React, { useState, useEffect } from "react";

import config from "../../config";

export const useTips = (impact, url) => {
  const [allTips, setAllTips] = useState([]);

  useEffect(() => {
    setAllTips([]);
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${config.AUTHORIZATION}`
      }
    })
      .then(res => res.json())
      .then(res =>
        res.smartTipsByImpactLevel.map(tip =>
          setAllTips(allTips => [...allTips, tip])
        )
      )
      .catch(error => console.log(error));
  }, [impact]);

  const filteredTips = !impact
    ? allTips
    : allTips.filter(tip => tip.impactLevel === impact);

  return { filteredTips };
};
