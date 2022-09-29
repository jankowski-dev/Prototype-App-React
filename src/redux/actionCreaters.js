export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_TEXTAREA = "UPDATE-TEXTAREA";

export let sendPostActionCreater = (data) => {
  return {
    type: SEND_MESSAGE,
    data: data,
  };
};

export let updateTextareaActionCreater = (data) => {
  return { 
    type: UPDATE_TEXTAREA, 
    data: data };
};
