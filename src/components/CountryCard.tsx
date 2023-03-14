import { StyledCountryCard } from './componentStyles'
import FormatNumber from './FormatNumber';

interface CountryCardProps {
	  country: any,
}

const CountryCard = ({country}: CountryCardProps): JSX.Element => {

	const {flags, name, population, region, capital} = country || {};

  return (
	<StyledCountryCard>
		<img src={flags.png} alt={name.common} width="320" height="213" />
		<div className="body">
			<h3>{name.common}</h3>
			<p><strong>Population:</strong> {FormatNumber(population)}</p>
			<p><strong>Region:</strong> {region}</p>
			<p><strong>Capital:</strong> {capital?.[0]}</p>
		</div>
	</StyledCountryCard>
  )
}

export default CountryCard