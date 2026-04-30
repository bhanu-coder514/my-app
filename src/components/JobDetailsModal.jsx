import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,  
  ExternalLink,
  Mail,
  MessageSquareText,
  MapPin,
  Phone,
  Send,
  UserRound,
  Wallet,
  X,
  XCircle,
} from "lucide-react";

const textValue = (value, fallback = "Not Disclosed") =>
  value === undefined || value === null || value === "" ? fallback : value;

const getSkills = (job) =>
  job?.skills || job?.skill || job?.tags || job?.keywords || [];

const JobDetailsModal = ({ isOpen, job, onClose, onAccept, onReject }) => {
  const themeMode = useSelector((state) => state.theme?.mode || "light");
  const isDark = themeMode === "dark";

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => event.key === "Escape" && onClose?.();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!job) return null;

  const skills = getSkills(job);
  const recruiter = job.recruiterDetails || {};
  const recruiterName = recruiter.name || job.recruiterName || job.recruiter;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-3 py-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close job details"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-details-title"
            className={`relative flex h-[88vh] w-[95vw] flex-col overflow-hidden rounded-2xl border shadow-2xl md:h-[80vh] md:w-[80vw] ${
              isDark
                ? "border-[#5067AA]/40 bg-[#17233d] text-white"
                : "border-[#d5def2] bg-white text-[#1f3b66]"
            }`}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <div
              className={`flex items-start justify-between gap-4 border-b p-5 sm:p-6 ${
                isDark ? "border-white/10" : "border-[#d5def2]"
              }`}
            >
              <div className="min-w-0">
                <p
                  className={`mb-2 flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-[#86A6DE]" : "text-[#5067AA]"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  {textValue(job.company || job.companyName, "Company")}
                </p>
                <h2
                  id="job-details-title"
                  className={`text-2xl font-bold leading-tight sm:text-3xl ${
                    isDark ? "text-white" : "text-[#243f69]"
                  }`}
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  {textValue(job.title || job.role || job.jobTitle, "Job Role")}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition ${
                  isDark
                    ? "bg-white/10 text-white hover:bg-white/15"
                    : "bg-[#eef3fb] text-[#324F78] hover:bg-[#dfe8f6]"
                }`}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Info icon={Briefcase} label="Type" value={job.type || job.employmentType} isDark={isDark} />
                <Info icon={MapPin} label="Location" value={job.location || job.city} isDark={isDark} />
                <Info icon={Clock} label="Experience" value={job.experience} isDark={isDark} />
                <Info icon={Wallet} label="Salary" value={job.salary || job.ctc} isDark={isDark} />
                <Info icon={Calendar} label="Posted" value={job.postedAt || job.posted || job.createdAt} isDark={isDark} />
                <Info icon={UserRound} label="Recruiter" value={recruiterName} isDark={isDark} />
                <Info icon={Building2} label="Company" value={job.company || job.companyName} isDark={isDark} />
              </div>

              <div
                className={`mt-6 rounded-2xl border p-4 sm:p-5 ${
                  isDark
                    ? "border-[#86A6DE]/20 bg-[#111b31]"
                    : "border-[#d5def2] bg-[#f8fbff]"
                }`}
              >
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3
                      className={`mb-1 text-sm font-bold uppercase tracking-wide ${
                        isDark ? "text-slate-300" : "text-[#324F78]"
                      }`}
                    >
                      Recruiter Details
                    </h3>
                    <p className={`text-xl font-bold ${isDark ? "text-white" : "text-[#243f69]"}`}>
                      {textValue(recruiterName, "Recruiter")}
                    </p>
                    <p className={isDark ? "text-sm text-slate-400" : "text-sm text-[#5067AA]/75"}>
                      {textValue(recruiter.designation || recruiter.role, "Talent Acquisition")} at{" "}
                      {textValue(recruiter.company || job.company || job.companyName, "Company")}
                    </p>
                  </div>

                  {(job.sentAt || job.matchReason) && (
                    <div
                      className={`rounded-xl px-3 py-2 text-sm ${
                        isDark ? "bg-emerald-400/10 text-emerald-300" : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        <Send className="h-4 w-4" />
                        Sent to you
                      </div>
                      {job.sentAt && <p className="mt-1 opacity-85">{job.sentAt}</p>}
                    </div>
                  )}
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <RecruiterLine icon={Mail} label="Email" value={recruiter.email} isDark={isDark} />
                  <RecruiterLine icon={Phone} label="Phone" value={recruiter.phone} isDark={isDark} />
                  <RecruiterLine icon={MapPin} label="Location" value={recruiter.location} isDark={isDark} />
                  <RecruiterLine icon={ExternalLink} label="LinkedIn" value={recruiter.linkedin} isDark={isDark} />
                  <RecruiterLine icon={Clock} label="Response Time" value={recruiter.responseTime} isDark={isDark} />
                  <RecruiterLine icon={MessageSquareText} label="Message" value={job.matchReason} isDark={isDark} />
                </div>
              </div>

              <div className="mt-6">
                <h3 className={`mb-3 text-sm font-bold uppercase tracking-wide ${isDark ? "text-slate-300" : "text-[#324F78]"}`}>
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.length ? (
                    skills.map((skill) => (
                      <span
                        key={String(skill)}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                          isDark
                            ? "border-[#86A6DE]/25 bg-[#243b63] text-[#9dbbf0]"
                            : "border-[#bdcbea] bg-[#eef3fb] text-[#5067AA]"
                        }`}
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className={isDark ? "text-slate-400" : "text-[#5067AA]/70"}>No skills added</span>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h3 className={`mb-3 text-sm font-bold uppercase tracking-wide ${isDark ? "text-slate-300" : "text-[#324F78]"}`}>
                  Job Description
                </h3>
                <p className={`whitespace-pre-line text-base leading-7 ${isDark ? "text-slate-300" : "text-[#5067AA]"}`}>
                  {textValue(job.description || job.jobDescription, "No description available.")}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col gap-3 border-t p-4 sm:flex-row sm:justify-end ${
                isDark ? "border-white/10 bg-[#111b31]" : "border-[#d5def2] bg-[#f8fbff]"
              }`}
            >
              <button
                type="button"
                onClick={() => onAccept?.(job)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white hover:bg-emerald-600"
              >
                <CheckCircle2 className="h-5 w-5" />
                Accept
              </button>
              <button
                type="button"
                onClick={() => onReject?.(job)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white hover:bg-rose-600"
              >
                <XCircle className="h-5 w-5" />
                Reject
              </button>
            </div>
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
};

const Info = ({ icon: Icon, label, value, isDark }) => (
  <div className={`rounded-xl p-4 ${isDark ? "bg-white/10" : "bg-[#f3f6fb]"}`}>
    <p className={`mb-2 flex items-center gap-2 text-xs font-semibold uppercase ${isDark ? "text-slate-400" : "text-[#5067AA]/70"}`}>
      <Icon className="h-4 w-4" />
      {label}
    </p>
    <p className={`font-semibold ${isDark ? "text-white" : "text-[#243f69]"}`}>{textValue(value)}</p>
  </div>
);

const RecruiterLine = ({ icon: Icon, label, value, isDark }) => (
  <div className={`rounded-xl p-3 ${isDark ? "bg-white/10" : "bg-white"}`}>
    <p
      className={`mb-1 flex items-center gap-2 text-xs font-semibold uppercase ${
        isDark ? "text-slate-400" : "text-[#5067AA]/70"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </p>
    <p className={`wrap-break-word text-sm font-semibold ${isDark ? "text-white" : "text-[#243f69]"}`}>
      {textValue(value, "Not Available")}
    </p>
  </div>
);

export default JobDetailsModal;
