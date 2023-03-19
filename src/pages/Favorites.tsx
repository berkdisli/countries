import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

import { useAppSelector } from "../app/hooks";
import Button from "../components/Button";


const Favorites = () => {
  const favorites = useAppSelector(
    (state) => state.countriesR.favoriteCountries
  );
  const navigate = useNavigate();

  const countries = useAppSelector((state) => state.countriesR.countries);

  const favoriteInfo: any = countries.filter((country) =>
    favorites.includes(country.cca3)
  );

  const handleBackClick = (): void => {
    navigate(-1);
  };

  const favoriteList = favoriteInfo.map((country: any) => (
    <Link to={`/detail/${country.cca3.toLowerCase()}`}>
      <div className="fav-name">{country.name.common}</div>
      <img src={country.flags.png} alt={country.flags.alt} />
    </Link>
  ));
  return (
    <div className="favorite-body">
      <h1>Favorites</h1>
      {favoriteList}
      <div className="action-buttons">
        <Button onClick={handleBackClick}>
          <HiArrowNarrowLeft size="1.5rem" />
          <span>Back</span>
        </Button>
      </div>
    </div>
  );
};

export default Favorites;
