import css from "./IssueTitleCard.module.css";
import { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export const IssueTitleCard = ({ issue }) => {
  const { title, body } = issue;
  const [open, setOpen] = useState(false);
  const onClick = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <div className={css.card}>
      <div className={css.title} onClick={onClick}>
        {title}
      </div>
      {open && (
        <div className={css.body}>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};