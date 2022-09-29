const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXTAREA = "UPDATE-TEXTAREA";

export let sendPostActionCreater = (data) => {
  return {
    type: SEND_MESSAGE,
    data: data,
  };
};

export let updateTextareaActionCreater = (text) => {
  return { type: UPDATE_TEXTAREA, data: text };
};
