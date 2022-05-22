import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import {useMutation} from "react-query";
import {countryService, ICountry} from "../app/services/country_service";
import {useState} from "react";

const CreateCountry: NextPage = () => {
    const {push} = useRouter();
    const [data, setData] = useState({
        id: 5,
        image: '/images/south-korea.jpeg',
        population: '',
        title: ''
    } as ICountry);

    console.log(data)
    const {isLoading, mutateAsync} = useMutation('create Country', (data: ICountry) => countryService.create(data), {
        onSuccess: (data) => {
            push('/');
        },
        onError: (error: any) => {
            alert(error.message);
        }
    })


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await mutateAsync(data);
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Create country</h1>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <form onSubmit={handleSubmit}>
                            <input placeholder={'Write Id'} value={data.id}
                                   onChange={e => setData({...data, id: +e.target.value})}/>
                            <input placeholder={'Write Title'} value={data.title}
                                   onChange={e => setData({...data, title: e.target.value})}/>
                            <input placeholder={'Write Population'} value={data.population}
                                   onChange={e => setData({...data, population: e.target.value})}/>
                            <input placeholder={'Write image'} value={data.image}
                                   onChange={e => setData({...data, image: e.target.value})}/>
                            <div>
                                <button disabled={isLoading}>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default CreateCountry
