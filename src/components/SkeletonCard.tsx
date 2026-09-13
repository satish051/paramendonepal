const SkeletonCard = () => {
  return (
    <div className="bg-white border border-black/10 rounded-lg overflow-hidden flex flex-col h-full animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 bg-black/5 w-full"></div>
      
      {/* Content placeholder */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Date and category */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-4 bg-black/5 rounded w-1/4"></div>
          <div className="h-4 bg-black/5 rounded w-1/4"></div>
        </div>
        
        {/* Title */}
        <div className="h-6 bg-black/5 rounded w-3/4 mb-3"></div>
        <div className="h-6 bg-black/5 rounded w-1/2 mb-4"></div>
        
        {/* Excerpt */}
        <div className="space-y-2 mb-6 flex-grow">
          <div className="h-4 bg-black/5 rounded w-full"></div>
          <div className="h-4 bg-black/5 rounded w-full"></div>
          <div className="h-4 bg-black/5 rounded w-4/5"></div>
        </div>
        
        {/* Button */}
        <div className="h-10 bg-black/5 rounded-full w-1/3 mt-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;