import {useQuery} from "react-query";
import {countryService, ICountry} from "../app/services/country_service";

export const useCountry = (id?: string) => {
    console.log(id)
    const {data: country, isLoading,} = useQuery(['Country list', id], () => countryService.getCountry(id || ''), {
        onError: (error) => {
            alert(error);
        },
        select: (data): ICountry => data,
        enabled: !!id
    });
    return {
        country,
        isLoading
    }
}