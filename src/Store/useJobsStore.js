import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jobs as defaultJobs, } from '../components/data/jobCard';

const status_flow ={
    New: 'Applied',
  Applied: 'Waiting',
  Waiting: 'Interview',
  Interview: 'Offer',
  Offer: 'Rejected',
  Rejected: 'New',
}

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
    jobs: state.jobs.map((job) => {

      if (job.id !== id) return job

      return {
        ...job,
        status: status_flow[job.status],
        statusType: status_flow[job.status].toLowerCase()
      }
    })
  })),

    resetJobs: () => set({ jobs: defaultJobs }),
  }),
    {
      name: 'job-tracker.jobs'
    }
  )
)