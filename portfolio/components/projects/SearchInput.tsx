interface SearchInputProps {
  placeholder: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  searchQuery,
  setSearchQuery,
}) => (
    <div className="w-full md:w-auto">
        <input
            type="text"
            placeholder= {placeholder}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="px-4 py-2 border border-gray-300 text-black rounded-md w-full lg:w-80 md:w-64 focus:outline-none focus:ring-2 focus:ring-ucla-blue"
        />
    </div>
);
export default SearchInput;