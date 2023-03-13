import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface SearchBarProps {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
    return (
    <div className='search-body'>
        <div className='search-container'>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="search-input"
            />
            <Link to="#" className="search-btn">
                    <FaSearch className='fas' />
                </Link>
         </div>
    </div>
            
    );
}

export default SearchBar;