import type {NextPage} from 'next'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import {useCountries} from "../hooks/useCountries";

const Home: NextPage = () => {
    // const [countries, setCountries] = useState<ICountry[]>([]);

    const {isLoading, countries, refetch} = useCountries();

    console.log(countries, isLoading);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    React Query
                </h1>
                {/*{error && <div style={{color: 'red'}}>{(error as any).message}</div>}*/}
                {isLoading
                    ? <div>Loading...</div>
                    : countries?.length
                        ? <div className={styles.grid}>
                            {countries.map(({id, title, population, image}) => {
                                return <div
                                    className={styles.card}
                                    key={id}>
                                    < Image
                                        width={260}
                                        height={200}
                                        src={image}
                                        alt={title}
                                    />
                                    <h2>{title}</h2>
                                    <p><b>Population: </b>{population}</p>
                                </div>

                            })}
                        </div>
                        : <div>Not found country</div>
                }
                {/*<button onClick={() => refetch()}>Fetch data</button>*/}
            </main>
        </div>
    )
}

export default Home
