import React, { useMemo, useState } from "react";
import JobDetailsModal from "./JobDetailsModal";
import { mockJobs } from "../../utils/mockJobs";

const getJobId = (job) => job.id || job._id || job.jobId || `${job.company}-${job.title}`;

const JobFeedIntegrationExample = ({ jobs = mockJobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [acceptedJobIds, setAcceptedJobIds] = useState([]);
  const [rejectedJobIds, setRejectedJobIds] = useState([]);

  const visibleJobs = useMemo(
    () => jobs.filter((job) => !rejectedJobIds.includes(getJobId(job))),
    [jobs, rejectedJobIds]
  );

  const handleAccept = (job) => {
    setAcceptedJobIds((current) => [...new Set([...current, getJobId(job)])]);
    setSelectedJob(null);
  };

  const handleReject = (job) => {
    setRejectedJobIds((current) => [...current, getJobId(job)]);
    setSelectedJob(null);
  };

  return (
    <>
      {visibleJobs.map((job) => (
        <div key={getJobId(job)}>
          {/* existing job card UI yahin rahega */}
          {acceptedJobIds.includes(getJobId(job)) && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
              Accepted
            </span>
          )}

          <button type="button" onClick={() => setSelectedJob(job)}>
            View Details
          </button>
        </div>
      ))}

      <JobDetailsModal
        isOpen={!!selectedJob}
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </>
  );
};

export default JobFeedIntegrationExample;
