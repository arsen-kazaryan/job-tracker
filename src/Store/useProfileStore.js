import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useProfileStore = create(
  persist(
    (set)=> ({
      name: 'Aram N.',
      role: 'Junior Developer',
      avatar: null,

      updateProfile : (fields)=>  
        set((state)=> ({...state, ...fields})),

      resetProfile: () => set({ name:'Aram N.', role: 'Junior Developer', avatar: null }),
    }),
    {
      name: 'job-tracker.profile'
    }
  )
)