import { TableContainer, Paper, Table, TableHead, TableRow, TableCell } from '@mui/material'
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';

import FormatNumber from './FormatNumber';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { handleFavorites } from '../features/countriesSlice';


interface CountryCardProps {
	  country: any,
}

const CountryCard = ({country}: CountryCardProps): JSX.Element => {
	const {flags, name, population, region, capital, languages} = country || {};
    const dispatch = useAppDispatch();
    let favorites = useAppSelector((state) => state.countriesR.favoriteCountries)

	const handleFavorite = (cca3:string) => {
		dispatch(handleFavorites(cca3))
	  }
  
	  const selected = (cca3:string) => {
		if (favorites.includes(cca3)) {
		  return <AiFillHeart/>
		}else{
		 return <AiOutlineHeart/>
		} 
	  }

	const languageList = (object: Object) => {
		const values = Object.values(object);
		return (
		       <ul aria-label='list of languages'>
		         {values.map((value: string, index: number) => <li key={index}>{value}</li>)}
       </ul>
	    );
	 }


  return (
  <TableContainer component={Paper}>
	<Table aria-label='body'>
 		<TableHead>
			<TableRow>
				<TableCell width='15%'><img src={flags.png} alt={name.common} width="160" height="106.5" /></TableCell>
				<TableCell width='15%'><h3>{name.common}</h3></TableCell>
				<TableCell width='15%'><p>Population: {FormatNumber(population)}</p></TableCell>
				<TableCell width='15%'><p>Region: {region}</p></TableCell>
				<TableCell width='15%'><p>Capital: {capital?.[0]}</p></TableCell>
				<TableCell width='15%'><p>Languages:{languages ? languageList(languages) : ''}</p></TableCell>
				<TableCell> <Link to="/favorites" className='fav-link'><p  onClick={()=>handleFavorite(country.cca3)} className="icon" >{selected(country.cca3)  }</p></Link></TableCell> 
				<TableCell><SlArrowRight /></TableCell>
			</TableRow>	   
		</TableHead>
	</Table>
  </TableContainer>

  )
}

export default CountryCard