export const saveState = (stateName, stateValue) =>
  localStorage.setItem(stateName, JSON.stringify(stateValue));

export const loadState = stateName =>
  JSON.parse(localStorage.getItem(stateName));

export const getAvailableSaves = () => Object.keys(localStorage);

export const deleteSave = saveState => localStorage.removeItem(saveState);

export const deleteAllSaves = () => localStorage.clear();
