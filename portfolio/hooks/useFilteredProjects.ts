import { useMemo } from "react";
import { Project } from "@/components/IProject";
import { sortProjects } from "@/utils/sortProjects";

export function useFilteredProjects(
  projects: Project[],
  selectedCategories: string[],
  searchQuery: string
) {
  return useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        project.categories.some((cat) => selectedCategories.includes(cat));

      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    return sortProjects(filtered);
  }, [projects, selectedCategories, searchQuery]);
}



// -------------------- Newer Version - Need Improvements --------------------------------- //
// // hooks/useFilteredProjects.ts
// import { useMemo } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { Project } from '@/components/IProject';
// import { sortProjects } from '@/utils/sortProjects';

// export default function useFilteredProjects(projects: Project[]) {
//   const searchParams = useSearchParams();
//   const categoryParam = searchParams.get('category');

//   const filteredProjects = useMemo(() => {
//     const filtered = categoryParam
//       ? projects.filter(project =>
//           project.categories.includes(categoryParam.toLowerCase())
//         )
//       : projects;

//     return sortProjects(filtered);
//   }, [projects, categoryParam]);

//   return { filteredProjects, selectedCategory: categoryParam };
// }
