import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { technologies } from '@/constants/technologies';

const Slider = () => {
  return (
    <div id="technologies">
      <div className="h-[25rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden dark:bg-[#020817]">
        <InfiniteMovingCards
          items={technologies}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Slider;
