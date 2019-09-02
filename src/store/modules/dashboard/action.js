export function checkIfPageIsDashboard(check) {
  return {
    type: '@dashboard/CHECK_IF_PAGE_IS_DASHBOARD',
    payload: { check },
  };
}
