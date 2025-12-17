import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadData({ data }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Separate voter name & votes
    const voter = data.find((d) => d.voterName);
    const votes = data.filter((d) => d.category);

    const payload = {
      voterName: voter?.voterName ?? "Anonymous",
      votes,
    };

    console.log("Uploading payload:", payload);
    localStorage.setItem("votes", JSON.stringify(data));
    fetch(
      "https://script.google.com/macros/s/AKfycbxd-8fSFBB70IcZDAxoXt4HxOu0sFgRVUBkC13YrnqmSUG6Q2ftB59DITAajQgT3yvT/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Upload success:", res);
      })
      .catch((err) => {
        console.error("Upload failed:", err);
      });

    const timer = setTimeout(() => {
      navigate("/podcast");
    }, 3500);

    return () => clearTimeout(timer);
  }, [data, navigate]);
}
