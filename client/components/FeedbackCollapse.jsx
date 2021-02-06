import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

export default function FeedbackCollapse({
  status,
  type,
  title,
  color,
  message,
  style,
}) {
  return (
    <Collapse className={style} in={status}>
      <Alert
        severity={type}
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              alert({
                ...modal,
                status: false,
              });
            }}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
      >
        <AlertTitle>{title}</AlertTitle>
        <strong style={{ color: color }}>{message}</strong>
      </Alert>
    </Collapse>
  );
}
