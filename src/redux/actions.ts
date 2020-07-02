export const actionTypes = {
  TEST: "TEST",
  TEST_SUCCESS: "TEST_SUCCESS",
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
