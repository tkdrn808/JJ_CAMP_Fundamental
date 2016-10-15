/** @function isDataType  데이터 유형을 올바르게 체크해주는 헬퍼 함수 */
function isDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}