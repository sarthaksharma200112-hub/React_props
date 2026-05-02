import Job from "./components/job"
const jobs = [
  {
    brand_logo: "data:image/jpeg;base64,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",
    company_name: "Amazon",
    date_posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tags: ["Full-time", "Remote"],
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/google.com",
    company_name: "Google",
    date_posted: "2 days ago",
    post: "Frontend Developer",
    tags: ["Full-time"],
    pay: "$150/hr",
    location: "Bangalore, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/microsoft.com",
    company_name: "Microsoft",
    date_posted: "1 week ago",
    post: "Software Engineer",
    tags: ["Full-time", "Hybrid"],
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/apple.com",
    company_name: "Apple",
    date_posted: "3 days ago",
    post: "Product Designer",
    tags: ["Full-time"],
    pay: "$160/hr",
    location: "Delhi, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/meta.com",
    company_name: "Meta",
    date_posted: "6 days ago",
    post: "React Developer",
    tags: ["Remote"],
    pay: "$130/hr",
    location: "Pune, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/netflix.com",
    company_name: "Netflix",
    date_posted: "2 days ago",
    post: "UI Engineer",
    tags: ["Full-time", "Remote"],
    pay: "$170/hr",
    location: "Bangalore, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/ibm.com",
    company_name: "IBM",
    date_posted: "4 days ago",
    post: "Backend Developer",
    tags: ["Full-time"],
    pay: "$110/hr",
    location: "Chennai, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/salesforce.com",
    company_name: "Salesforce",
    date_posted: "1 day ago",
    post: "Cloud Engineer",
    tags: ["Full-time"],
    pay: "$135/hr",
    location: "Hyderabad, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/adobe.com",
    company_name: "Adobe",
    date_posted: "3 days ago",
    post: "UI Designer",
    tags: ["Remote"],
    pay: "$145/hr",
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://logo.clearbit.com/oracle.com",
    company_name: "Oracle",
    date_posted: "5 days ago",
    post: "Database Engineer",
    tags: ["Full-time"],
    pay: "$150/hr",
    location: "Pune, India"
  }
];
const app=()=>{
  return( <div className="parent">
    {jobs.map(function(elem){
      return <Job brand_logo={elem.brand_logo} company_name={elem.company_name} date_posted={elem.date_posted} post={elem.post} tags={elem.tags} pay={elem.pay}  location={elem.location} />
    })}
  </div>)
}
export default app