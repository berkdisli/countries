import { useEffect, useState } from "react";
import {
  DropdownTrigger,
  DropdownOverlay,
  StyledDropdown,
} from "./componentStyles";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  value: string;
  placeholder?: string;
  open?: boolean;
  options: string[];
  onChange: (value: string) => void;
}

function Dropdown({
  value,
  placeholder,
  open = false,
  options,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [selectedItem, setSelectedItem] = useState<string>(value);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <StyledDropdown>
      <h3>Choose a region..</h3>
      <DropdownTrigger onClick={handleToggle} isMenuOpen={isOpen}>
        <span>{selectedItem || placeholder}</span>
        <FaChevronDown />
      </DropdownTrigger>
      {isOpen && (
        <DropdownOverlay>
          {options.map((option, index) => {
            const handleItemClick = () => {
              setSelectedItem(option);
              setIsOpen(false);
            };

            return (
              <div key={index} onClick={handleItemClick}>
                {option}
              </div>
            );
          })}
        </DropdownOverlay>
      )}
    </StyledDropdown>
  );
}

export default Dropdown;
