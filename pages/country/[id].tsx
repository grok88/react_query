import type {NextPage} from 'next'
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import {useCountry} from "../../hooks/useCountry";
import {useRouter} from "next/router";

const Country: NextPage = () => {
    const {query} = useRouter();
    console.log('query', query)
    const {isLoading, country} = useCountry(String(query?.id));

    console.log(country, isLoading);

    return (
        <div className={styles.container}>
            {isLoading
                ? <div>Loading...</div>
                : <main className={styles.main}>
                    <div className={styles.grid}>
                        <div
                            className={styles.card}
                        >
                            < Image
                                width={260}
                                height={200}
                                src={country?.image || ''}
                                alt={country?.title}
                            />
                            <h2>{country?.title}</h2>
                            <p><b>Population: </b>{country?.population}</p>
                        </div>
                    </div>
                </main>
            }
        </div>
    )
}
export default Country
