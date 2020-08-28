export const actionTypes = {
  TEST: "TEST",
  TEST_SUCCESS: "TEST_SUCCESS",
  SWITCH_THEME_TYPE: "SWITCH_THEME_TYPE",
};

export function test() {
  return {
    type: actionTypes.TEST,
  };
}

export function testSuccess() {
  return {
    type: actionTypes.TEST_SUCCESS,
  };
}

export function switchThemeType() {
  return {
    type: actionTypes.SWITCH_THEME_TYPE,
  };
}
