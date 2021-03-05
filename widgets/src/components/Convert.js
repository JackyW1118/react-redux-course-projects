import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {}, //no post body
        {
          params: {
            q: text,
            target: language.value,
            key: KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    const timeoutID = setTimeout(() => {
      if (text !== "") doTranslation();
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
