'use client';
import React, { useState } from 'react';
import ProjectCard from '@/components/ui/project-card';
import MarkdownRenderer from '@/components/ui/markdown-renderer';
import { projectsMarkdown } from '@/constants/projects';

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <div id="projects">
      <div className={'text-lg py-16 font-medium text-center sm:text-start'}>
        Recent projects
      </div>
      <div className={'flex justify-between gap-5 items-center'}>
        <div className={'sm:w-2/5 w-full'}>
          <div className={'flex flex-col gap-y-3'}>
            {projectsMarkdown.map((project, index) => (
              <div key={index} onClick={() => setProjectIndex(index)}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm h-[560px] w-3/5 overflow-y-scroll px-3 py-1 scrollbar-hide hidden sm:block">
          <MarkdownRenderer content={projectsMarkdown[projectIndex].details} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
