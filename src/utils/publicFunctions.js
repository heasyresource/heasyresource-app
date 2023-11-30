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
  if (phoneNumber?.startsWith("0")) {
    phoneNumber = phoneNumber.replace(/^0+/, "");
  }
  return "+234" + phoneNumber;
};
export const getSubdomain = (host) => {
  let subdomain = null;
  if (!host && typeof window !== "undefined") {
    // On client side, get the host from window
    host = window.location.host;
  }
  if (host && host.includes(".")) {
    const candidate = host.split(".")[0];
    if (candidate && !candidate.includes("localhost")) {
      subdomain = candidate;
    }
  }
  return subdomain;
};
export const convertDateFormat = (inputDate) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
export const convertStringDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};
export const calculateDateDifference = (start, end) => {
  const startDate = new Date(start);

  if (!end) {
    // If end is null, return a default value or handle it as needed
    return "";
  }

  const endDate = new Date(end);
  const differenceInMs = endDate - startDate;

  const daysDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(daysDifference / 365);
  let resultString;

  if (yearsDifference > 0) {
    resultString = ` · ${yearsDifference} ${
      yearsDifference === 1 ? "year" : "years"
    }`;
  } else if (monthsDifference > 0) {
    resultString = ` · ${monthsDifference} ${
      monthsDifference === 1 ? "month" : "months"
    }`;
  } else {
    resultString = ` · ${daysDifference} ${
      daysDifference === 1 ? "day" : "days"
    }`;
  }
  return resultString;
};
export const formatMonthYear = (dateStr1, dateStr2) => {
  const date1 = new Date(dateStr1);

  if (!dateStr2) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(date1);
  }

  const date2 = new Date(dateStr2);

  const options = { year: "numeric", month: "short" };

  const formattedDate1 = new Intl.DateTimeFormat("en-US", options).format(
    date1
  );
  const formattedDate2 = new Intl.DateTimeFormat("en-US", options).format(
    date2
  );

  if (formattedDate1 === formattedDate2) {
    return formattedDate1;
  } else {
    return `${formattedDate1} - ${formattedDate2}`;
  }
};
export const addHttps = (link) => {
  if (!link.startsWith("http://") && !link.startsWith("https://")) {
    return "https://" + link;
  }
  return link;
};
export const employeeCompensationList = [
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
];

export const CompensationList = [
  {
    avatar: "/assets/images/avata2.png",
    firstName: "Emily ",
    lastName: "Moonlight",
    employeeEmail: "emily_moon@gmail.com",
    department: "Marketing",
    salary: "N300,000",
  },
  {
    avatar: "/assets/images/avata2.png",
    firstName: "Samuel",
    lastName: "Techsmith",
    employeeEmail: " sam_tech@gmail.com",
    department: " Research and Development",
    salary: "N400,000",
  },
  {
    avatar: "/assets/images/avata2.png",
    firstName: "Jessica ",
    lastName: "Codebreaker",
    employeeEmail: "jess_code@gmail.com",
    department: "Software Engineering",
    salary: "N380,000",
  },
  {
    avatar: "/assets/images/avata2.png",
    firstName: " Michael ",
    lastName: "Cyberwizard",
    employeeEmail: "mike_cyber@gmail.com",
    department: "Cybersecurity",
    salary: "N420,000",
  },
  {
    avatar: "/assets/images/avata2.png",
    firstName: "Olivia ",
    lastName: "Dataqueen",
    employeeEmail: "olivia_data@gmail.com",
    department: " Data Analysis",
    salary: "N350,000",
  },
];

export const employeePaySlipList = [
  {
    name: "Base Salary",
    earnings: "#150,000",
    deductions: "-",
    unitAmount: "#150,000",
  },
  {
    name: "State Income Tax",
    earnings: "-",
    deductions: "#15, 532",
    unitAmount: "#30,000",
  },
  {
    name: "Bonuses",
    earnings: "#30,000",
    deductions: "-",
    unitAmount: "#30,000",
  },
  {
    name: "Health Insurance Premiums",
    earnings: "-",
    deductions: "#30,000",
    unitAmount: "#30,000",
  },
];
export const PaySlipList = [
  {
    id: "1",
    name: "Base Salary",
    earnings: "#150,000",
    deductions: "-",
    unitAmount: "#30,000",
  },
  {
    id: "2",
    name: "State Income Tax",
    earnings: "#150,000",
    deductions: "-",
    unitAmount: "#30,000",
  },
  {
    id: "3",
    name: "Bonuses",
    earnings: "#150,000",
    deductions: "-",
    unitAmount: "#30,000",
  },
  {
    id: "4",
    name: "Health Insurance Premiums",
    earnings: "#150,000",
    deductions: "-",
    unitAmount: "#30,000",
  },
  {
    id: "5",
    name: "Health Insurance Premiums",
    earnings: "#150,000",
    deductions: "-",
    unitAmount: "#30,000",
  },
];
