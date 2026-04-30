import React, { useState, useEffect } from 'react';
import JobDetailModal from './JobDetailsModal';
// import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    company: '',
    role: '',
    skill: '',
    employmentType: [],
    experience: [],
    location: []
  });

  // Mock API data - Replace with your actual API endpoint
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Replace this with your actual API endpoint
        // const response = await fetch('YOUR_API_ENDPOINT');
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockData = [
          {
            id: 1,
            title: "SAP HCM Technical Consultant",
            company: "Fusion Consulting",
            recruiterName: "Rahul Sharma",
            location: "Bengaluru",
            employmentType: "Full-Time",
            experience: "5-10 years",
            salary: "Not Disclosed",
            postedTime: "21 hours ago",
            views: 0,
            skills: ["SAP HCM", "ABAP", "Personnel Administration", "Organizational Management", "Time Management"],
            description: "Company Description: Transforming Life Science Consulting Worldwide. Fusion Consulting is a globally leading Business and IT boutique consultancy specialized in the Life Sciences industry across all key areas such as regulatory, quality, pharmacovigilance, medical information, and more.",
            fullDescription: "We are seeking an experienced SAP HCM Technical Consultant to join our team. The ideal candidate will have strong expertise in SAP HCM modules and ABAP programming.\n\nKey Responsibilities:\n• Design and implement SAP HCM solutions\n• Develop custom programs using ABAP\n• Configure Personnel Administration and Organizational Management\n• Support Time Management processes\n• Collaborate with functional teams\n\nRequirements:\n• 5-10 years of experience in SAP HCM\n• Strong ABAP programming skills\n• Experience with PA, OM, and Time Management\n• Excellent communication skills\n• Bachelor's degree in Computer Science or related field",
            applicationDeadline: "2026-05-30",
            jobType: "Permanent",
            department: "IT Consulting"
          },
          {
            id: 2,
            title: "Manager - SAP-PM",
            company: "KPMG India",
            recruiterName: "Priya Mehta",
            location: "Mumbai",
            employmentType: "Full-Time",
            experience: "5-10 years",
            salary: "Not Disclosed",
            postedTime: "22 hours ago",
            views: 0,
            skills: ["SAP-PM", "SAP", "Project Management", "Business Analysis", "Technology Consulting", "Process Improvement"],
            description: "KPMG entities in India are professional services firm(s). These Indian member firms are affiliated with KPMG International Limited. KPMG entities in India are professional services firm(s).",
            fullDescription: "Join KPMG India as a Manager for SAP Plant Maintenance (PM) module. Lead implementation projects and drive digital transformation.\n\nKey Responsibilities:\n• Lead SAP PM implementation projects\n• Manage client relationships\n• Provide solution architecture and design\n• Mentor junior consultants\n• Drive process improvements\n\nRequirements:\n• 5-10 years in SAP PM\n• Strong project management skills\n• Client-facing experience\n• MBA or equivalent preferred",
            applicationDeadline: "2026-05-25",
            jobType: "Permanent",
            department: "Consulting"
          },
          {
            id: 3,
            title: "Software Engineer, Post-Silicon Testing",
            company: "Waymo",
            recruiterName: "David Chen",
            location: "Bangalore",
            employmentType: "Full-Time",
            experience: "2-5 years",
            salary: "3750000-4460000",
            postedTime: "22 hours ago",
            views: 0,
            skills: ["C++", "Python", "Bash", "Post-silicon validation", "Hardware validation", "Embedded systems"],
            description: "Waymo is an autonomous driving technology company with the mission to be the world's most trusted driver. Since its start as the Google Self-Driving Car Project in 2009.",
            fullDescription: "Be part of Waymo's hardware testing team working on cutting-edge autonomous driving technology.\n\nKey Responsibilities:\n• Develop post-silicon validation frameworks\n• Design and execute hardware test plans\n• Debug complex hardware-software interactions\n• Automate testing processes\n• Collaborate with hardware design teams\n\nRequirements:\n• 2-5 years in post-silicon validation\n• Strong C++ and Python skills\n• Experience with embedded systems\n• Bachelor's in Computer Engineering or related field",
            applicationDeadline: "2026-06-15",
            jobType: "Permanent",
            department: "Hardware Engineering"
          },
          {
            id: 4,
            title: "Azure Integration Developer",
            company: "IQ-EQ",
            recruiterName: "Sarah Williams",
            location: "Hyderabad",
            employmentType: "Full-Time",
            experience: "5-10 years",
            salary: "Not Disclosed",
            postedTime: "22 hours ago",
            views: 0,
            skills: ["Azure", "C#", ".NET", "API Management", "iPaaS", "SQL", "NoSQL", "DevOps", "CI/CD", "ASP.NET Web API"],
            description: "Company Description ABOUT IQ-EQ We're a leading Investor Services group offering end-to-end services in administration, compliance, and corporate governance.",
            fullDescription: "Join IQ-EQ as an Azure Integration Developer and work on enterprise integration solutions.\n\nKey Responsibilities:\n• Design and develop Azure integration solutions\n• Implement API Management strategies\n• Build microservices architecture\n• Optimize cloud infrastructure\n• Implement CI/CD pipelines\n\nRequirements:\n• 5-10 years in Azure development\n• Strong C# and .NET expertise\n• Experience with Azure services\n• Knowledge of DevOps practices",
            applicationDeadline: "2026-06-01",
            jobType: "Permanent",
            department: "Technology"
          },
          {
            id: 5,
            title: "QA Automation Engineer",
            company: "Zensar",
            recruiterName: "Amit Patel",
            location: "Pune, Remote",
            employmentType: "Full-Time",
            experience: "2-5 years",
            salary: "Not Disclosed",
            postedTime: "22 hours ago",
            views: 0,
            skills: ["QA Automation", "Selenium", "API Testing", "Postman", "SoapUI", "RestAssured", "C#", ".NET", "SQL"],
            description: "Job Role: QA Automation Engineer (Automation Testing with API & Selenium) Experience: 4-6 Years Role Overview This role involves automation testing with expertise in both API and UI testing.",
            fullDescription: "Zensar is looking for an experienced QA Automation Engineer to strengthen our quality assurance team.\n\nKey Responsibilities:\n• Design and implement automation frameworks\n• Perform API and UI testing\n• Create and maintain test scripts\n• Conduct regression testing\n• Work in Agile environment\n\nRequirements:\n• 4-6 years in QA automation\n• Strong Selenium and API testing skills\n• Experience with testing tools\n• Knowledge of SQL and databases",
            applicationDeadline: "2026-05-28",
            jobType: "Permanent",
            department: "Quality Assurance"
          },
          {
            id: 6,
            title: "Associate Business Systems Analyst",
            company: "Akamai",
            recruiterName: "Jennifer Lee",
            location: "Bengaluru, Remote",
            employmentType: "Full-Time",
            experience: "2-5 years",
            salary: "Not Disclosed",
            postedTime: "22 hours ago",
            views: 0,
            skills: ["Business analysis", "ERP systems", "CRM systems", "Agile software development", "JIRA"],
            description: "Would you like to influence the way Akamai's business is operating using data driven decisions? Do you thrive on solving complex business problems?",
            fullDescription: "Join Akamai as an Associate Business Systems Analyst and drive data-driven business decisions.\n\nKey Responsibilities:\n• Analyze business requirements\n• Work with ERP and CRM systems\n• Support Agile development teams\n• Create documentation and reports\n• Facilitate stakeholder meetings\n\nRequirements:\n• 2-5 years in business analysis\n• Experience with ERP/CRM systems\n• Strong analytical skills\n• Knowledge of Agile methodologies",
            applicationDeadline: "2026-06-10",
            jobType: "Permanent",
            department: "Business Analysis"
          }
        ];
        
        setJobs(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    if (filters.company && !job.company.toLowerCase().includes(filters.company.toLowerCase())) return false;
    if (filters.role && !job.title.toLowerCase().includes(filters.role.toLowerCase())) return false;
    if (filters.skill && !job.skills.some(skill => skill.toLowerCase().includes(filters.skill.toLowerCase()))) return false;
    return true;
  });

  const openJobModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeJobModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    document.body.style.overflow = 'unset';
  };

  const handleAcceptJob = (job) => {
    alert(`You have accepted the job: ${job.title}`);
    // Here you can add API call to accept the job
    closeJobModal();
  };

  const handleRejectJob = (job) => {
    alert(`You have rejected the job: ${job.title}`);
    // Here you can add API call to reject the job
    closeJobModal();
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <header className="bg-[#0f1f3a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">Hirent</h1>
              <p className="text-gray-400 text-sm">Unlimited job discovery platform</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition">
              Premium
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
              <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Welcome back!</span>
          </div>
          <h2 className="text-white text-4xl font-bold">Hello, Bhanu! 👋</h2>
        </div>

        {/* Job Dashboard */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold">Job Dashboard</h3>
              <p className="text-gray-400">{jobs.length} jobs available</p>
            </div>
          </div>

          {/* Search Filters */}
          <div className="bg-[#0f1f3a] rounded-xl p-6 mb-6 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Company</label>
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={filters.company}
                  onChange={(e) => setFilters({...filters, company: e.target.value})}
                  className="w-full bg-[#1a2942] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Role</label>
                <input
                  type="text"
                  placeholder="Search roles..."
                  value={filters.role}
                  onChange={(e) => setFilters({...filters, role: e.target.value})}
                  className="w-full bg-[#1a2942] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Skill</label>
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={filters.skill}
                  onChange={(e) => setFilters({...filters, skill: e.target.value})}
                  className="w-full bg-[#1a2942] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setFilters({company: '', role: '', skill: '', employmentType: [], experience: [], location: []})}
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Clear all
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
                Search
              </button>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0f1f3a] rounded-xl p-6 border border-gray-800 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-bold text-lg">Filters</h4>
                  <button className="text-blue-400 text-sm hover:text-blue-300 transition">Clear all</button>
                </div>

                {/* Filter Sections */}
                <div className="space-y-6">
                  {/* FAANG Filter */}
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">FAANG</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">JUST POSTED</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Top 50 PBC</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Employment Type</h5>
                    <div className="space-y-2">
                      {['Full Time', 'Internship', 'Contract', 'Part Time', 'Freelance'].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-emerald-500 focus:ring-emerald-500" />
                          <span className="text-gray-300">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Experience</h5>
                    <div className="space-y-2">
                      {['Entry Level (0-2 years)', 'Mid Level (2-5 years)', 'Senior Level (5-10 years)', 'Lead / Principal Level (10+ years)'].map((exp) => (
                        <label key={exp} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-emerald-500 focus:ring-emerald-500" />
                          <span className="text-gray-300 text-sm">{exp}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Location</h5>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {['Bengaluru (Bangalore)', 'Hyderabad', 'Pune', 'Gurugram (Gurgaon)', 'Noida', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Ahmedabad', 'Remote', 'Hybrid', 'Others'].map((loc) => (
                        <label key={loc} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-emerald-500 focus:ring-emerald-500" />
                          <span className="text-gray-300 text-sm">{loc}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="lg:col-span-2 space-y-4">
              {loading ? (
                <div className="text-center text-gray-400 py-12">Loading jobs...</div>
              ) : filteredJobs.length === 0 ? (
                <div className="text-center text-gray-400 py-12">No jobs found</div>
              ) : (
                filteredJobs.map((job) => (
                  <div key={job.id} className="bg-[#0f1f3a] rounded-xl p-6 border border-gray-800 hover:border-emerald-500 transition">
                    <h3 className="text-white text-xl font-bold mb-3">{job.title}</h3>
                    
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                      </svg>
                      <span>{job.company}</span>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        {job.employmentType}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        {job.experience}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                        </svg>
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        {job.postedTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        {job.views} views
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.slice(0, 5).map((skill, index) => (
                        <span key={index} className="bg-[#1a2942] text-blue-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 5 && (
                        <span className="bg-[#1a2942] text-gray-400 px-3 py-1 rounded-full text-sm">
                          +{job.skills.length - 5} more
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {job.description}
                      <button className="text-blue-400 ml-1">...more</button>
                    </p>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => openJobModal(job)}
                        className="flex-1 bg-[#1a2942] hover:bg-[#243654] text-white py-2 px-4 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        View Details
                      </button>
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                        </svg>
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* Pagination */}
              <div className="bg-[#0f1f3a] rounded-xl p-4 border border-gray-800 flex items-center justify-between">
                <span className="text-gray-400 text-sm">Showing 1-{filteredJobs.length} jobs</span>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 text-gray-400 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <span className="text-gray-400">...</span>
                  <button className="px-4 py-2 text-gray-400 hover:text-white transition">3</button>
                  <button className="px-4 py-2 text-gray-400 hover:text-white transition">4</button>
                  <button className="px-4 py-2 text-gray-400 hover:text-white transition">5</button>
                  <span className="text-gray-400">...</span>
                  <button className="px-4 py-2 text-gray-400 hover:text-white transition">2397</button>
                  <button className="px-3 py-2 text-gray-400 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
                <select className="bg-[#1a2942] text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Detail Modal - Separate Component */}
      <JobDetailModal 
        job={selectedJob}
        isOpen={showModal}
        onClose={closeJobModal}
        onAccept={handleAcceptJob}
        onReject={handleRejectJob}
      />
    </div>
  );
}

export default App;