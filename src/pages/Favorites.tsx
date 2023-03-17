import { Link } from "react-router-dom";

import { useAppSelector } from "../app/hooks";

const Favorites = () => {
  const favorites = useAppSelector(
    (state) => state.countriesR.favoriteCountries
  );
  const countries = useAppSelector((state) => state.countriesR.countries);

  const favoriteInfo: any = countries.filter((country) =>
    favorites.includes(country.cca3)
  );

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
    </div>
  );
};

export default Favorites;
