export const metadata = {
  title: {
    template: "%s | Employee | HeasyResource",
    default: "HeasyResource",
  },
  description: "Hr Manangement System",
};
export default function EmpployeeRoot({ children }) {
  return <section>{children}</section>;
}
