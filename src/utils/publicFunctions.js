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
export const employeeList = [
  {
    id: "1",
    avatar: "/assets/images/avata2.png",
    firstName: "Robert",
    lastName: "Wolfkisser",
    employeeEmail: "rob_wolf@gmail.com",
    department: "Engineering",
    role: "Engineer",
    moreDetails: "Link to More Details",
  },
  {
    id: "2",
    avatar: "/assets/images/avata2.png",
    firstName: "Jill",
    lastName: "Jailbreaker",
    employeeEmail: "jj@breaker.com",
    department: "Engineering",
    role: "Engineer",
    moreDetails: "Link to More Details",
  },
  {
    id: "3",
    avatar: "/assets/images/avata2.png",
    firstName: "Henry",
    lastName: "Silkeater",
    employeeEmail: "henry@silkeater.io",
    department: "Design",
    role: "Designer",
    moreDetails: "Link to More Details",
  },
  {
    id: "4",
    avatar: "/assets/images/avata2.png",
    firstName: "Bill",
    lastName: "Horsefighter",
    employeeEmail: "bhorsefighter@gmail.com",
    department: "Design",
    role: "Designer",
    moreDetails: "Link to More Details",
  },
  {
    id: "5",
    avatar: "/assets/images/avata2.png",
    firstName: "Jeremy",
    lastName: "Footviewer",
    employeeEmail: "jeremy@foot.dev",
    department: "Management",
    role: "Manager",
    moreDetails: "Link to More Details",
  },
];
export const CompensationList = [
  {
    id: "1",
    avatar: "/assets/images/avata2.png",
    firstName: "Robert",
    lastName: "Wolfkisser",
    employeeEmail: "rob_wolf@gmail.com",
    department: "IT Department",
    salary: "N350,000",
  },
  {
    id: "1",
    avatar: "/assets/images/avata2.png",
    firstName: "Robert",
    lastName: "Wolfkisser",
    employeeEmail: "rob_wolf@gmail.com",
    department: "IT Department",
    salary: "N350,000",
  },
  {
    id: "1",
    avatar: "/assets/images/avata2.png",
    firstName: "Robert",
    lastName: "Wolfkisser",
    employeeEmail: "rob_wolf@gmail.com",
    department: "IT Department",
    salary: "N350,000",
  },
  {
    id: "1",
    avatar: "/assets/images/avata2.png",
    firstName: "Robert",
    lastName: "Wolfkisser",
    employeeEmail: "rob_wolf@gmail.com",
    department: "IT Department",
    salary: "N350,000",
  },
  {
    id: "1",
    avatar: "/assets/images/avata2.png",
    firstName: "Robert",
    lastName: "Wolfkisser",
    employeeEmail: "rob_wolf@gmail.com",
    department: "IT Department",
    salary: "N350,000",
  },
];
export const EarningsList = [
  {
    id: "1",
    name: "Base Salary",
    rate: "Monthly",
  },
  {
    id: "2",
    name: "Overtime Pay",
    rate: "Hourly",
  },
  {
    id: "3",
    name: "Allowances",
    rate: "Hourly",
  },
];
export const DeductionsList = [
  {
    id: "1",
    name: "Income Tax",
    unitAmount: "#30,000",
  },
  {
    id: "2",
    name: "Health Insurance Premiums",
    unitAmount: "#30,000",
  },
  {
    id: "3",
    name: "Retirement Contributions",
    unitAmount: "#30,000",
  },
];
export const employeePaySlipList = [
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
export const LeaveDetailsList = [
  {
    id: "1",
    leaveType: "Maternity Leave",
    entitledDays: "20days",
    startDate: "Mon., 12th Jan. 2023",
    endDate: "Mon., 12th Jan. 2023",
  },
  {
    id: "2",
    leaveType: "Maternity Leave",
    entitledDays: "20days",
    startDate: "Mon., 12th Jan. 2023",
    endDate: "Mon., 12th Jan. 2023",
  },
  {
    id: "3",
    leaveType: "Maternity Leave",
    entitledDays: "20days",
    startDate: "Mon., 12th Jan. 2023",
    endDate: "Mon., 12th Jan. 2023",
  },
  {
    id: "4",
    leaveType: "Maternity Leave",
    entitledDays: "20days",
    startDate: "Mon., 12th Jan. 2023",
    endDate: "Mon., 12th Jan. 2023",
  },
  {
    id: "5",
    leaveType: "Maternity Leave",
    entitledDays: "20days",
    startDate: "Mon., 12th Jan. 2023",
    endDate: "Mon., 12th Jan. 2023",
  },
];
export const leaveList = [
  {
    id: "1",
    date: "2023-12-05",
    employeeName: "John Smith",
    leaveType: "Vacation",
    numberOfDays: "22 days",
    status: "Pending",
  },
  {
    id: "2",
    date: "2023-12-05",
    employeeName: "Abijuwon Selim",
    leaveType: "Vacation",
    numberOfDays: "22 days",
    status: "Pending",
  },
  {
    id: "3",
    date: "2023-12-05",
    employeeName: "Rasaq Osinwin",
    leaveType: "Vacation",
    numberOfDays: "22 days",
    status: "Pending",
  },
];
export const SettingsList = [
  {
    id: "1",
    jobCategory: "Software Engineer",
  },
  {
    id: "1",
    jobCategory: "Software Engineer",
  },
  {
    id: "1",
    jobCategory: "Software Engineer",
  },
  {
    id: "1",
    jobCategory: "Software Engineer",
  },
];
export const hiringList = [
  {
    id: "1",
    vacancy: "Product Designer",
    candidate: "Blessing Obi",
    hiringManager: "Dayo Adegbite",
    dateOfApplication: "2023-12-05",
    status: "Shortlisted",
  },
  {
    id: "2",
    vacancy: "Product Designer",
    candidate: "Blessing Obi",
    hiringManager: "Dayo Adegbite",
    dateOfApplication: "2023-12-05",
    status: "Shortlisted",
  },
  {
    id: "3",
    vacancy: "Product Designer",
    candidate: "Blessing Obi",
    hiringManager: "Dayo Adegbite",
    dateOfApplication: "2023-12-05",
    status: "Shortlisted",
  },
];
export const CompanyList = [
  {
    id: "",
    companyName: "TechNova Solutions",
    companySize: "51-200",
    industry: "Technology",
    websiteURL: "www.technove.com",
    location: "Lagos State",
    status: "under review",
  },
  {
    id: "1",
    companyName: "TechNova Solutions",
    companySize: "51-200",
    industry: "Technology",
    websiteURL: "www.technove.com",
    location: "Lagos State",
    status: "pending",
  },
  {
    id: "1",
    companyName: "TechNova Solutions",
    companySize: "51-200",
    industry: "Technology",
    websiteURL: "www.technove.com",
    location: "Lagos State",
    status: "active",
  },
  {
    id: "1",
    companyName: "TechNova Solutions",
    companySize: "51-200",
    industry: "Technology",
    websiteURL: "www.technove.com",
    location: "Lagos State",
    status: "suspended",
  },
  {
    id: "1",
    companyName: "TechNova Solutions",
    companySize: "51-200",
    industry: "Technology",
    websiteURL: "www.technove.com",
    location: "Lagos State",
    status: "on hold",
  },
];
export const VacancyList = [
  {
    id: "1",
    vacancy: "Product Designer",
    candidate: "Blessing Obi",
    hiringManager: "Dayo Adegbite",
    dateOfApplication: "2023-12-05",
    status: "Shortlisted",
  },
  {
    id: "2",
    vacancy: "Product Designer",
    candidate: "Blessing Obi",
    hiringManager: "Dayo Adegbite",
    dateOfApplication: "2023-12-05",
    status: "Shortlisted",
  },
  {
    id: "3",
    vacancy: "Product Designer",
    candidate: "Blessing Obi",
    hiringManager: "Dayo Adegbite",
    dateOfApplication: "2023-12-05",
    status: "Shortlisted",
  },
];
export const leaveType = [
  {
    id: "1",
    name: "Annual Leave",
  },
  {
    id: "2",
    name: "Annual Leave",
  },
  {
    id: "3",
    name: "Annual Leave",
  },
  {
    id: "4",
    name: "Annual Leave",
  },
  {
    id: "5",
    name: "Annual Leave",
  },
];

export const holidayTypes = [
  {
    id: "1",
    name: "National Holidays",
    date: "Dec 25th, 2023",
    day: "Full Day",
  },
  {
    id: "2",
    name: "National Holidays",
    date: "Dec 25th, 2023",
    day: "Full Day",
  },
  {
    id: "3",
    name: "National Holidays",
    date: "Dec 25th, 2023",
    day: "Full Day",
  },
  {
    id: "4",
    name: "National Holidays",
    date: "Dec 25th, 2023",
    day: "Full Day",
  },
  {
    id: "5",
    name: "National Holidays",
    date: "Dec 25th, 2023",
    day: "Full Day",
  },
];

export const departmentType = [
  {
    id: "1",
    name: "Engineering",
    deptCode: "Eng",
  },
  {
    id: "2",
    name: "Engineering",
    deptCode: "Eng",
  },
  {
    id: "3",
    name: "Engineering",
    deptCode: "Eng",
  },
  {
    id: "4",
    name: "Engineering",
    deptCode: "Eng",
  },
  {
    id: "5",
    name: "Engineering",
    deptCode: "Eng",
  },
];
