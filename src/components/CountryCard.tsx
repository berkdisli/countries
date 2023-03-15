import FormatNumber from './FormatNumber';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';

interface CountryCardProps {
	  country: any,
}

const CountryCard = ({country}: CountryCardProps): JSX.Element => {

	const {flags, name, population, region, capital, languages} = country || {};
    const navigate = useNavigate();

	const languageList = (object: Object) => {
		const values = Object.values(object);
		return (
		       <ul aria-label='list of languages'>
		         {values.map((value: string, index: number) => <li key={index}>{value}</li>)}
       </ul>
	    );
	 }

	 const handleCountryClick = (countryCode:string): void => {
        navigate(`/detail/${countryCode}`);
    }

  return (
  <TableContainer component={Paper}>
	<Table aria-label='body'>
 		<TableHead>
			<TableRow>
				<TableCell width='15%'><img src={flags.png} alt={name.common} width="320" height="213" /></TableCell>
				<TableCell width='15%'><h3>{name.common}</h3></TableCell>
				<TableCell width='15%'><p>Population: {FormatNumber(population)}</p></TableCell>
				<TableCell width='15%'><p>Region: {region}</p></TableCell>
				<TableCell width='15%'><p>Capital: {capital?.[0]}</p></TableCell>
				<TableCell width='15%'><p>Languages:{languages ? languageList(languages) : ''}</p></TableCell>
				<TableCell><SlArrowRight /></TableCell>
			</TableRow>	   
		</TableHead>
	</Table>
  </TableContainer>

  )
}

export default CountryCard