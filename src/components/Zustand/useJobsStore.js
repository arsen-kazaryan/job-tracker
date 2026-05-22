import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jobs as defaultJobs,} from '../data/jobCard';


export const useJobsStore = create(
  persist((set) => ({
    jobs: defaultJobs,

    deleteJob: (id) =>
      set((state) => ({
        jobs: state.jobs.filter((job) => job.id !== id),
      })),

    addJob: (newJob) => {
      set((state) => ({
        jobs: [newJob, ...state.jobs]
      }))
    },

    changeJobStatus: (id) =>
      set((state) => ({
        jobs: state.jobs.map((job) =>
          job.id === id
            ? job.status === 'New'
              ? { ...job, status: 'Applied', statusType: 'applied' }
              : job.status === 'Applied'
                ? { ...job, status: 'Waiting', statusType: 'waiting' }
                : job.status === 'Waiting'
                  ? { ...job, status: 'Interview', statusType: 'interview' }
                  : job.status === 'Interview'
                    ? { ...job, status: 'Rejected', statusType: 'rejected' }
                    : { ...job, status: 'New', statusType: 'new' }
            : job
        ),
      })),

    resetJobs: () => set({ jobs: defaultJobs }),
  }),
    {
      name: 'job-tracker.jobs'
    }
  )
)