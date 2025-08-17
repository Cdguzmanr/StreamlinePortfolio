interface CategoryFilterProps {
  allCategories: string[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  clearFilters: () => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  allCategories,
  selectedCategories,
  toggleCategory,
  clearFilters,
}) => (
  <div className="flex flex-wrap gap-3">
    {allCategories.map((category, index) => (
      <button
        key={index}
        onClick={() => toggleCategory(category)}
        className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-300 ${
          selectedCategories.includes(category)
            ? "bg-poppy text-white border-poppy"
            : "bg-white text-raisin-black border-gray-300 hover:bg-orange hover:border-orange"
        }`}
      >
        {category}
      </button>
    ))}
    {selectedCategories.length > 0 && (
      <button
        onClick={clearFilters}
        className="px-4 py-2 rounded-full border font-semibold bg-gray-200 text-raisin-black border-gray-300 hover:bg-gray-300 transition-colors duration-300"
      >
        Clear Filters
      </button>
    )}
  </div>
);
export default CategoryFilter;