import logo from '../images/loading.gif';

interface LoadingProps {
	includeText?: boolean
}

const Loading = ({ includeText = true }: LoadingProps): JSX.Element => {
    return (
        <section className="loading flex-centered">
            <img className="loading__logo" src={logo} alt="loading logo" />
            {includeText && <p className="loading__body blinking">Loading data for you..</p>}
        </section>
    );
}

export default Loading;