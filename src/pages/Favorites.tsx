import { Link } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';

const Favorites = () => {
    const favorites = useAppSelector((state) => state.countriesR.favoriteCountries)
    const countries = useAppSelector((state) => state.countriesR.countries)

    const favoriteInfo:any =  countries.filter(country => favorites.includes(country.cca3)) 
  
    const favoriteList = favoriteInfo.map((country:any) => 
      <Link to={"/detail/:cca3"}>
      <img src={country.flags.png} alt={country.flags.alt} />
      <div >{country.name.common}</div>
      </Link>

    )
  return (
  <div> 
    {favoriteList}
  </div>
  )
}

export default Favorites