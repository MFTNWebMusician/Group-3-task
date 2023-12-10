import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { news } from "../data/Data";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);

  const mainUrl =
    "https://rebuqegfjzfhjqejvkrd.supabase.co/rest/v1/collaborate-task";

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYnVxZWdmanpmaGpxZWp2a3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMTc3NDUsImV4cCI6MjAxNTY5Mzc0NX0.ljcmcx3QuNj6nhRv-i14GbbKSKvQ3aATSKmhljPbaUk";

  useEffect(() => {
    axios
      .get(mainUrl + "?select=*", {
        headers: {
          apikey: apiKey,
          Authorization: "Authorization: Bearer " + apiKey,
        },
      })
      .then((res) => setNewsList(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(newsList);
  }, [newsList]);

  return (
    <MyContext.Provider value={[newsList, setNewsList, mainUrl, apiKey]}>
      {children}
    </MyContext.Provider>
  );
};
