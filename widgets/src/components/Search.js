import React, { useState, useEffect } from "react";
import axios from "axios";

//wikipedia search component
const Search = () => {
  //search term
  const [term, setTerm] = useState("programming");
  //search result
  const [results, setResults] = useState([]);

  //effect hook similar to lifecycle methods but more flexible
  //first arg func is what you want to execute
  /*second arg when func executes: 
    [] => only initial render, 
    nothing => initial and every rerender, 
    [value] => initial and after value changed
  */
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    //if first rendered run search immediately
    if (term && !results.length) {
      search();
    }
    //create a timer so only execute search when user stop typing for 500ms
    else {
      const timeoutid = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      //clean up calls before the next useEffect runs
      return () => {
        //cancel previous timer when input changes
        clearTimeout(timeoutid);
      };
    }

    //execute callback when component first rendered or when term changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
