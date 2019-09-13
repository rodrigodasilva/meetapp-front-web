export function checkCurrentPage(page) {
  return {
    type: '@currentPage/CHECK_CURRENT_PAGE',
    payload: { page },
  };
}

export function setCurrentPage(page) {
  return {
    type: '@currentPage/SET_CURRENT_PAGE',
    payload: { page },
  };
}
