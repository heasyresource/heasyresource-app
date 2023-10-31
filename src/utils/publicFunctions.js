export const requirements = [
  { re: /\d/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

export const getStrength = (string) => {
  let multiplier = string.length >= 8 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(string)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
};

export const normalizePhoneNumber = (phoneNumber) => {
  if (phoneNumber.startsWith("0")) {
    phoneNumber = phoneNumber.replace(/^0+/, "");
  }
  return "+234" + phoneNumber;
};
export const employeeList = [
  {
    id: "1",
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    firstName: "Robert",
    lastName: "Wolfkisser",
    employeeEmail: "rob_wolf@gmail.com",
    department: "Engineering",
    role: "Engineer",
    moreDetails: "Link to More Details",
  },
  {
    id: "2",
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    firstName: "Jill",
    lastName: "Jailbreaker",
    employeeEmail: "jj@breaker.com",
    department: "Engineering",
    role: "Engineer",
    moreDetails: "Link to More Details",
  },
  {
    id: "3",
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    firstName: "Henry",
    lastName: "Silkeater",
    employeeEmail: "henry@silkeater.io",
    department: "Design",
    role: "Designer",
    moreDetails: "Link to More Details",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    firstName: "Bill",
    lastName: "Horsefighter",
    employeeEmail: "bhorsefighter@gmail.com",
    department: "Design",
    role: "Designer",
    moreDetails: "Link to More Details",
  },
  {
    id: "5",
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=250&q=80",
    firstName: "Jeremy",
    lastName: "Footviewer",
    employeeEmail: "jeremy@foot.dev",
    department: "Management",
    role: "Manager",
    moreDetails: "Link to More Details",
  },
];
